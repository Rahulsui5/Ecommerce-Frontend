import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContextCart } from "@/context/CardContext";
import Cards from "./Cards";
import axios from "axios";
import { UseAuthContext } from "@/context/AuthContext";
import NotFound from "./NotFound";
export default function ProductDetails() {
  const { id } = useParams();
  const { obj } = useContextCart();
  const {isLogin}=  UseAuthContext()
  const products=obj.products
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [mainImage, setMainImage] = useState(
    "https://png.pngtree.com/png-clipart/20231208/original/pngtree-icon-vector-loading-png-image_13797192.png"
  );
  const getSingleProduct = async (Pid) => {
    try {
      const singleProduct = await axios.get(
        `http://localhost:5000/GetSingleProduct/${Pid}`
      );
      setProduct(singleProduct.data.product);
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    if (product?.image?.length > 0) {
      setMainImage(product.image[0]);
    }
  }, [product]);
  useEffect(() => {
    getSingleProduct(id);
  }, [id]);
  useEffect(() => {
    navigate(`/${id}`);
    getSingleProduct(id);
  }, [id, navigate]);
  useEffect(() => {
    if (products && products.length > 0) {
      let indexProducts = [];
      for (let index = 0; index < 10; index++) {
        indexProducts.push(Math.floor(Math.random() * products.length));
      }
      indexProducts = [...new Set(indexProducts)];
      setSelectedProducts(indexProducts.map((i) => products[i]));
    }
  }, [products]);
  const [heart, setHeart] = useState(false);

  if (!product)
    return <NotFound/>


   const addtocart = async(product) => {
      try {
       const productId=product?._id;
           const userId=localStorage.getItem("userID")
           await axios.post(`http://localhost:5000/AddToCart`,{userId, productId});
         } catch (error) {
           console.error("Error adding to cart:", error);
         }
   };
  return (
    <div className="w-[99vw] mt-5 mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
            <img
              src={mainImage}
              alt={product?.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {product?.image &&
              product.image.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={product?.name + idx}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                    mainImage === img ? "border-blue-500" : "border-transparent"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
          </div>
        </div>

        <div className="flex flex-col justify-start space-y-4 sticky top-20">
          <h1 className="text-3xl md:text-4xl font-bold">{product?.name}</h1>
          <p className="text-gray-500 text-sm">
            Brand: <span className="font-semibold">{product?.brand}</span>
          </p>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-green-600">
              ₹{product?.price}
            </span>
            {product?.originalPrice && (
              <span className="line-through text-gray-400">
                ₹{product?.originalPrice}
              </span>
            )}
            {product?.discount && (
              <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                {product?.discount}% OFF
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm">
              ⭐ {product?.rating+3}
            </span>
            <span className="text-gray-600 text-sm">
              {product?.reviews+55} Reviews
            </span>
          </div>

          <p className="text-sm">
            {product?.inStock ? (
              <span className="text-green-600 font-semibold">In Stock</span>
            ) : (
              <span className="text-red-600 font-semibold">Out of Stock</span>
            )}
          </p>
          <p className="text-sm text-gray-600">{product?.delivery}</p>

          <p className="text-gray-700 leading-relaxed">
            {product?.description ||
              "High-quality product from a trusted brand. Perfect choice for your needs."}
          </p>

          {product.subCategory.includes(["Blouse","Jeans","Top","Dress","Shirt","T-Shirt","Pants"])&&<div className="flex items-center gap-3 mt-4 flex-wrap">
            <span className="font-semibold text-gray-700 ">Size:</span>
            {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className={`px-3 py-1 border rounded-md font-medium hover:bg-blue-600 hover:text-white transition ${
                  product?.selectedSize === size
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => setProduct({ ...product, selectedSize: size })}
              >
                {size}
              </button>
            ))}
          </div>}

          <div className="flex gap-3 mt-4">
            <Button
              disabled={!product.inStock}
              variant="outline"
              onClick={() => {
                isLogin?
                addtocart(product):navigate("/login")
              }}
              className="flex-1 flex items-center gap-2 hover:bg-red-600/80 hover:text-white"
            >
              <ShoppingCart className="h-5 w-5" /> Add to Cart
            </Button>
            <Button onClick={()=>{isLogin?(addtocart(product), navigate("/cart")):navigate("/login")}} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2">
              Buy Now
            </Button>
            <Button
              onClick={() => {
                setHeart(!heart);
              }}
              variant="outline"
              className="w-12 flex items-center justify-center"
            >
              <Heart
                className={`h-5 w-5 text-${heart ? "red" : "black"}-500 `}
              />
            </Button>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <Cards products={selectedProducts} categoryname="Recommended for You" />
      </section>
    </div>
  );
}
