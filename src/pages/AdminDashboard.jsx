import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Edit,
  Eye,
  Trash2,
  PlusCircle,
  Users,
  Settings,
  Package,
  Home,
  ShoppingBag,
} from "lucide-react";
import ProductModal from "./adminPages/ProductModal.jsx";
import { useNavigate } from "react-router-dom";
import { useContextCart } from "@/context/CardContext.jsx";
import AddProductModal from "./adminPages/AddProductModal.jsx";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import AllOrders from "./adminPages/AllOrders.jsx";
import User from "./adminPages/User.jsx";
import Dashboard from "./adminPages/Dashboard.jsx";
export default function AdminDashboard() {
  const { obj } = useContextCart();
  const products = obj.products;
  const navigator = useNavigate();
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [checkChoice, setCheckChoice] = useState("");
  const [productsInStore, setProductsInStore] = useState(products);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const [productForUpdate, setproductForUpdate] = useState({});
  useEffect(() => {
    setProductsInStore(products);
  }, [products]);
  const [product, setproduct] = useState({
    selectedCategory: "",
    selectedSubCategory: "",
    searchedProduct: "",
  });
  const handleChanges = (e) => {
    setproduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    if (product.selectedCategory === "All Categories") {
      setProductsInStore(products);
    }
    if (
      product.selectedCategory &&
      product.selectedCategory !== "All Categories"
    ) {
      setProductsInStore(
        products.filter((prod) => prod.category === product.selectedCategory)
      );
    }
  }, [products, product.selectedCategory]);
  useEffect(() => {
    if (product.selectedSubCategory === "All Subcategories") {
      setProductsInStore(products);
    }
    if (
      product.selectedSubCategory &&
      product.selectedSubCategory !== "All Subcategories"
    ) {
      setProductsInStore(
        products.filter(
          (prod) => prod.subCategory === product.selectedSubCategory
        )
      );
    }
  }, [products, product.selectedSubCategory]);
  useEffect(() => {
    const handle = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (product.searchedProduct.trim() !== "") {
          setProductsInStore(
            products.filter(
              (prod) =>
                prod.name
                  .toLowerCase()
                  .includes(product.searchedProduct.toLowerCase()) ||
                prod.category
                  .toLowerCase()
                  .includes(product.searchedProduct.toLowerCase()) ||
                prod.brand
                  .toLowerCase()
                  .includes(product.searchedProduct.toLowerCase()) ||
                prod.subCategory
                  .toLowerCase()
                  .includes(product.searchedProduct.toLowerCase())
            )
          );
        } else {
          setProductsInStore(products);
        }
      }
    };
    const input = ref.current;
    input.addEventListener("keydown", handle);
    return () => {
      input.removeEventListener("keydown", handle);
    };
  }, [products, product.searchedProduct]);
  
  const openEditModal = (product) => {
    setproductForUpdate(product);
    obj.setIsModalOpen(true);
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/DeleteProduct/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.info(error.response.data.message);
    }
  };
  const showProduct = (id) => {
    navigator(`/${id}`);
  };

  return (
    <div className="flex min-h-screen  bg-gray-100">
      {obj.isAddModalOpen && <AddProductModal />}
      {obj.isModalOpen && <ProductModal product={productForUpdate} />}
      {/* ===== Sidebar ===== */}
      <div
        className={`bg-blue-600  text-white h-screen z-20 flex flex-col justify-between transition-all duration-300 ${
          isOpen ? "w-56" : "w-10 md:w-14"
        }`}
      >
        {/* ===== Top Section ===== */}
        <div
          className={`flex flex-col ${
            isOpen ? "items-start px-5" : "items-center"
          } py-5`}
        >
          <button
            onClick={toggleSidebar}
            className="text-white p-1 rounded-lg hover:bg-blue-700 transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Sidebar Links */}
          <ol className="mt-8 space-y-4 text-sm font-medium">
            <li
              className="flex items-center gap-3 hover:text-gray-200 cursor-pointer"
              onClick={() => setCheckChoice("Dashboard")}
            >
              <Home className="w-5 h-5" /> {isOpen && "Dashboard"}
            </li>
            <li
              className="flex items-center gap-3 hover:text-gray-200 cursor-pointer"
              onClick={() => setCheckChoice("Users")}
            >
              <Users className="w-5 h-5" /> {isOpen && "Users"}
            </li>
            <li
              className="flex items-center gap-3 hover:text-gray-200 cursor-pointer"
              onClick={() => setCheckChoice("Orders")}
            >
              <Package className="w-5 h-5" /> {isOpen && "Orders"}
            </li>
            <li
              className="flex items-center gap-3 hover:text-gray-200 cursor-pointer"
              onClick={() => setCheckChoice("Products")}
            >
              <ShoppingBag className="w-5 h-5" /> {isOpen && "Products"}
            </li>
            {/* <li
              className="flex items-center gap-3 hover:text-gray-200 cursor-pointer"
              onClick={() => setCheckChoice("Settings")}
            >
              <Settings className="w-5 h-5" /> {isOpen && "Settings"}
            </li> */}
          </ol>
        </div>

        {/* ===== Bottom Branding ===== */}
        {isOpen && (
          <div className="p-4 text-center text-xs text-gray-200 border-t border-blue-500">
            &copy; 2025 Admin Panel
          </div>
        )}
      </div>

      {/* ===== Main Content ===== */}
      <div
        className={`flex flex-col p-5 transition-all duration-300 w-[90vw] md:w-full h-screen overflow-y-auto`}
      >
        {/* ===== Manage Products Section ===== */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-5 flex flex-col md:flex-row items-center justify-between relative">
          <div>
            <h2 className=" text-base md:text-2xl font-bold mb-1 text-gray-800">
              Manage Your Products
            </h2>
            <p className="text-gray-500">
              👋 Welcome,{" "}
              <span className="font-semibold text-blue-600">Admin</span>
            </p>
          </div>

          {/* Add Product Button */}
          <button
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mt-4 md:mt-0"
            onClick={() => obj.setIsAddModalOpen(!obj.isAddModalOpen)}
          >
            <PlusCircle className="w-5 h-5" /> Add Product
          </button>
        </div>
        {/* ===== Product Filters ===== */}
        <div
          className={` ${
            checkChoice !== "Products" ? "hidden" : "flex"
          } text-xs mb-5 gap-x-1 md:text-base `}
        >
          <div className="bg-white md:p-4 rounded-md w-full py-1 px-2 shadow">
            <h3 className="font-semibold text-gray-700 mb-2">Category</h3>
            <select
              name="selectedCategory"
              value={product.selectedCategory}
              onChange={(e) => handleChanges(e)}
              className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Categories</option>
              {[...new Set(products.map((product) => product.category))].map(
                (category, index) => (
                  <option key={index}>{category}</option>
                )
              )}
            </select>
          </div>

          <div className="bg-white md:p-4 rounded-md w-full py-1 px-2 shadow">
            <h3 className="font-semibold text-gray-700 mb-2">Subcategory</h3>
            <select
              name="selectedSubCategory"
              value={product.selectedSubCategory}
              onChange={(e) => handleChanges(e)}
              className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Subcategories</option>
              {[...new Set(products.map((product) => product.subCategory))].map(
                (subCategory, index) => (
                  <option key={index}>{subCategory}</option>
                )
              )}
            </select>
          </div>

          <div className="bg-white md:p-4 rounded-md w-full py-1 px-2 shadow">
            <h3 className="font-semibold text-gray-700 mb-2">Search Product</h3>
            <input
              ref={ref}
              name="searchedProduct"
              type="text"
              value={product.searchedProduct}
              onChange={(e) => {
                handleChanges(e);
              }}
              placeholder="Search by name..."
              className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* ===== Dashboard ===== */}
        {checkChoice === ""&& <Dashboard/>}
        {checkChoice === "Dashboard"&& <Dashboard/>}
        {/* ===== User ===== */}
        {checkChoice === "Users" && ( <User/>)}
        {/* ===== Order ===== */}
        {checkChoice === "Orders" &&<AllOrders/>}
        {/* ===== Product Table ===== */}
        {checkChoice === "Products" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              All Products
            </h2>
            <div className="bg-white shadow-md rounded-lg overflow-x-auto ">
              <table className="w-full text-sm text-left">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-3">S No</th>
                    <th className="p-3">Image</th>
                    <th className="p-3">Product</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Subcategory</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Sale</th>
                    <th className="p-3">Stock</th>
                    <th className="p-3">Rating</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {productsInStore.map((Product, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3">
                        <img
                          src={Product.image}
                          alt="Product"
                          className="w-10 h-10 rounded-md object-cover"
                        />
                      </td>
                      <td className="p-3 font-medium text-gray-800">
                        {Product.name}
                      </td>
                      <td className="p-3 text-gray-600">{Product.category}</td>
                      <td className="p-3 text-gray-600">
                        {Product.subCategory}
                      </td>
                      <td className="p-3 text-gray-800 font-semibold">
                        {Product.price}
                      </td>
                      <td className="p-3 text-green-600">
                        {Product.discount}% OFF
                      </td>
                      <td className="p-3 text-gray-700">
                        {Product.inStock ? "Available" : "Not available"}
                      </td>
                      <td className="p-3 text-yellow-500">
                        ⭐{Product.rating === 0 ? 3 : product.rating}
                      </td>
                      <td className="p-3 flex justify-center gap-3">
                        <Edit
                          onClick={() => {
                            openEditModal(Product);
                          }}
                          className="w-5 h-5 text-blue-600 cursor-pointer hover:scale-110"
                        />
                        <Eye
                          onClick={() => {
                            showProduct(Product._id);
                          }}
                          className="w-5 h-5 text-green-600 cursor-pointer hover:scale-110"
                        />
                        <Trash2
                          onClick={() => {
                            handleDelete(Product._id);
                          }}
                          className="w-5 h-5 text-red-600 cursor-pointer hover:scale-110"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {checkChoice === "Settings" && <div></div>}
      </div>
    </div>
  );
}
