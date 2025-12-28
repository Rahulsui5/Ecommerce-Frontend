import React, { useState } from "react";
import { X } from "lucide-react";
import { useContextCart } from "@/context/CardContext.jsx";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function AddProductModal() {
  const { obj } = useContextCart();

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    originalPrice: "",
    discount: "",
    image: [],
    delivery: "",
    category: "",
    brand: "",
    subCategory: "",
    inStock: false,
  });

  const handleChange = (e) => {
    setNewProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    obj.setIsAddModalOpen(false);
  };

  const closeModal = () => {
    obj.setIsAddModalOpen(false);
  };
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/AddProduct`, newProduct);
      toast.success("Successfully Added!");
      setTimeout(() => {
        window.location.reload();
        closeModal();
      }, 1000);
    } catch (error) {
      toast.warning(error.response.data.message);
    }
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-2">
      <ToastContainer position="top-center" />
      <div
        className="bg-white p-8 rounded-2xl shadow-2xl w-[95%] max-w-3xl relative animate-fadeIn overflow-y-auto max-h-[90vh]"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
          Add New Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Name */}
          <div>
            <label className="font-medium text-gray-700">Product Name</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter product name"
              value={newProduct.name}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="font-medium text-gray-700">Price</label>
            <input
              required
              type="number"
              name="price"
              placeholder="Enter price"
              value={newProduct.price}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Original Price */}
          <div>
            <label className="font-medium text-gray-700">Original Price</label>
            <input
              required
              type="number"
              name="originalPrice"
              placeholder="Enter original price"
              value={newProduct.originalPrice}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Discount */}
          <div>
            <label className="font-medium text-gray-700">Discount</label>
            <input
              required
              type="text"
              name="discount"
              placeholder="e.g. 10% OFF"
              value={`${newProduct.discount}`}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Images */}
          <div className="md:col-span-2">
            <label className="font-medium text-gray-700">Product Images</label>
            <input
              required
              type="text"
              name="image"
              placeholder="Enter image URLs (comma separated)"
              value={
                Array.isArray(newProduct.image)
                  ? newProduct.image.join(", ")
                  : newProduct.image
              }
              onChange={(e) =>
                setNewProduct((prev) => ({
                  ...prev,
                  image: e.target.value.split(",").map((img) => img.trim()),
                }))
              }
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Delivery Dropdown */}
          <div>
            <label className="font-medium text-gray-700">Delivery</label>
            <select
              required
              name="delivery"
              value={newProduct.delivery}
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
              required
              type="text"
              name="category"
              placeholder="Enter category"
              value={newProduct.category}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="font-medium text-gray-700">Brand</label>
            <input
              required
              type="text"
              name="brand"
              placeholder="Enter brand"
              value={newProduct.brand}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Subcategory */}
          <div>
            <label className="font-medium text-gray-700">Subcategory</label>
            <input
              required
              type="text"
              name="subCategory"
              placeholder="Enter subcategory"
              value={newProduct.subCategory}
              onChange={handleChange}
              className="w-full border p-2 mt-1 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* In Stock */}
          <div className="flex items-center gap-3 mt-6">
            <input
              type="checkbox"
              name="inStock"
              checked={newProduct.inStock}
              onChange={(e) =>
                setNewProduct((prev) => ({
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
              onClick={addProduct}
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
