import React, { useState } from "react";
import { X } from "lucide-react";
import { useContextCart } from "@/context/CardContext.jsx";
import axios from "axios";
  import { ToastContainer, toast } from 'react-toastify';

export default function ProductModal({product}) {
  const { obj } = useContextCart();
const [updateProduct, setUpdateProduct] = useState(product)
  const handleChange = (e) => {
    setUpdateProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    obj.setIsModalOpen(false)
  };

  const closeModal = () => {
    obj.setIsModalOpen(false);
  };

   const UpdateProduct=async(e)=>{
      e.preventDefault()
      try {
      await axios.put(`http://localhost:5000/UpdateProduct/${product._id}`,updateProduct)
      toast.success('Successfully Saved!')
      setTimeout(() => {
        window.location.reload()
        closeModal()
      }, 1000);
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-2">
      <ToastContainer
  position="top-center"
/>
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[95%] max-w-3xl relative animate-fadeIn overflow-y-auto max-h-[90vh]" style={{scrollbarWidth:"none"}}>
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
          Update Product
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={updateProduct?.name || ""}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Price */}
          <div>
            <label className="font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={updateProduct?.price || ""}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Original Price */}
          <div>
            <label className="font-medium text-gray-700">Original Price</label>
            <input
              type="number"
              name="originalPrice"
              placeholder="Enter original price"
              value={updateProduct?.originalPrice || ""}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Discount */}
          <div>
            <label className="font-medium text-gray-700">Discount</label>
            <input
              type="text"
              name="discount"
              placeholder="e.g. 10% OFF"
              value={updateProduct?.discount || ""}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Images */}
          <div className="md:col-span-2">
            <label className="font-medium text-gray-700">Product Images</label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URLs (comma separated)"
              value={
                Array.isArray(updateProduct?.image)
                  ? updateProduct.image.join(", ")
                  : updateProduct?.image || ""
              }
              onChange={(e) =>
                setUpdateProduct((prev) => ({
                  ...prev,
                  image: e.target.value.split(",").map((img) => img.trim()),
                }))
              }
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Delivery - Dropdown */}
          <div>
            <label className="font-medium text-gray-700">Delivery</label>
            <select
              name="delivery"
              value={updateProduct?.delivery || ""}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Select Delivery Option</option>
              <option value="Free Delivery">Free Delivery</option>
              <option value="Paid Delivery">Paid Delivery</option>
              <option value="Fast Delivery">Fast Delivery</option>
            </select>
          </div>
          {/* Category */}
          <div>
            <label className="font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter category"
              value={updateProduct?.category || ""}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Brand */}
          <div>
            <label className="font-medium text-gray-700">Brand</label>
            <input
              type="text"
              name="brand"
              placeholder="Enter brand"
              value={updateProduct?.brand || ""}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Subcategory */}
          <div>
            <label className="font-medium text-gray-700">Subcategory</label>
            <input
              type="text"
              name="subCategory"
              placeholder="Enter subcategory"
              value={updateProduct?.subCategory || ""}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* In Stock */}
          <div className="flex items-center gap-3 mt-6">
            <input
              type="checkbox"
              name="inStock"
              checked={updateProduct?.inStock || false}
              onChange={(e) =>
                setUpdateProduct((prev) => ({
                  ...prev,
                  inStock: e.target.checked,
                }))
              }
              className="w-4 h-4"
            />
            <label className="font-medium text-gray-700">In Stock</label>
          </div>
          {/* Submit Button */}
          <div className="md:col-span-2 mt-4">
            <button
            onClick={UpdateProduct}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
