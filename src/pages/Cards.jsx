import { Button } from "@/components/ui/button";
import API_BASE_URL from "../utils/api"; 
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart,ChevronRight  } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthContext } from "@/context/AuthContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Cards = ({products,categoryname}) => {
  const navigate=useNavigate()
  const {isLogin}=UseAuthContext()
  const addtocart = async(product) => {
     try {
      const productId=product?._id;
          const userId=localStorage.getItem("userID")
         const res= await axios.post(`${API_BASE_URL}/AddToCart`,{userId, productId});
         toast(res.data.message)
        } catch (error) {
          console.error("Error adding to cart:", error);
        }
  };
  if(products.length<1) return <div className="text-xl text-center font-bold">No product available</div>
  return (
    <div>
      <ToastContainer position="top-center"/>
      <section className="py-6">
  <div className="mx-auto px-3 max-w-7xl">
    <h2 className="text-2xl font-bold mb-6 text-center">
      {categoryname ? categoryname : "Featured Products"}
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product, index) => (
        <Link to={`/${product?._id || ""}`} key={index}>
          <Card className="bg-white shadow-sm rounded-xl overflow-hidden h-full flex flex-col hover:shadow-lg hover:scale-[1.02] duration-300">

            {/* Product Image */}
            <div className="w-full h-40 md:h-48">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Content */}
            <CardContent className="flex flex-col justify-between flex-grow p-4">
              <div className="mb-3">
                <h3 className="font-semibold text-lg line-clamp-1">
                  {product?.name}
                </h3>
                <p className="text-gray-600 text-sm">₹{product?.price}</p>
              </div>

              <div className="flex justify-between items-center mb-3">
                <span className="rounded-full bg-slate-100 text-xs px-2 py-1">
                  Free Delivery
                </span>
                <span className="rounded-full bg-green-500 text-white text-sm font-bold px-2 py-1">
                  {product?.rating == 0 ? 3 : product?.rating} ★
                </span>
              </div>

              {/* Buttons */}
              {isLogin ? (
                <div className="flex justify-between w-full gap-x-2">

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addtocart(product);
                    }}
                    className="flex items-center  border rounded-md bg-white py-1 px-2 w-full justify-center shadow hover:bg-red-600/70 hover:text-white duration-300 hover:scale-[1.04]"
                  >
                    <ShoppingCart className="h-4 w-4" /> Add
                  </button>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addtocart(product);
                      navigate("/cart");
                    }}
                    className="flex items-center border rounded-md bg-white py-1 px-2 w-full justify-center shadow hover:bg-red-600/70 hover:text-white duration-300 hover:scale-[1.04]"
                  >
                    <ChevronRight className="h-5 w-5" /> Buy
                  </button>

                </div>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/login");
                  }}
                  className="flex items-center border rounded-md bg-white py-1 px-2 w-full justify-center shadow hover:bg-red-600/70 hover:text-white duration-300 hover:scale-[1.04]"
                >
                  <ChevronRight className="h-5 w-5" /> Buy Now
                </button>
              )}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Cards;
