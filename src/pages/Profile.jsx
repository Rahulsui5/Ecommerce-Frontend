import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Package, Settings, LogOut, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { UseAuthContext } from "@/context/AuthContext";
import { useContextCart } from "@/context/CardContext";

export default function Profile() {
  const { setIsLogin } = UseAuthContext();
  const { obj } = useContextCart();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [userr, setUser] = useState([]);
  const user = {
    name: userr.userName,
    email: userr.email,
    profileImg:
      "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000",
  };
  const fetchUser = async () => {
    try {
      const userId = localStorage.getItem("userID");
      const res = await axios.post("http://localhost:5000/SingleUser", {
        userId,
      });
      setUser(res.data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
      setOrders([]);
    }
  };
  const fetchOrders = async () => {
    try {
      const userId = localStorage.getItem("userID");
      const res = await axios.post("http://localhost:5000/GetUserOrder", {
        userId,
      });
      setOrders(res.data.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
    }
  };
  useEffect(() => {
    fetchOrders();
    fetchUser();
  }, []);

  const logoutConfirm = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout();
        Swal.fire({
          title: "Logout!",
          text: "Your id has been logout.",
          icon: "success",
        });
      }
    });
  };
  const handleLogout = () => {
    toast.info("Logout");
    localStorage.removeItem("userID");
    setIsLogin(false);
    obj.setIsAdmin(false);
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <ToastContainer position="top-center" />
      <h1 className="text-3xl font-bold text-center mb-10">My Profile</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <Card className="p-6 text-center">
            <img
              src={user.profileImg}
              alt={user.name}
              className="w-24 h-24 mx-auto rounded-full border-4 border-pink-500"
            />
            <h2 className="text-xl font-semibold mt-4 capitalize">
              {user.name}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </Card>

          <Card className="p-4 flex flex-col gap-3">
            <Link to="/orders">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Package className="w-4 h-4" /> My Orders
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="w-4 h-4" /> Settings
            </Button>
            <div onClick={() => logoutConfirm()}>
              <Button
                variant="ghost"
                className="justify-start gap-2 w-full text-red-600 hover:bg-red-100"
              >
                <LogOut className="w-4 h-4" /> Logout
              </Button>
            </div>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 ">My Orders</h2>

              {orders.length === 0 ? (
                <p className="text-gray-500">
                  You haven’t placed any orders yet.
                </p>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order._id}
                      className="p-4 border rounded-lg hover:shadow-md transition bg-white flex flex-col gap-4"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">
                            <span className="font-medium text-gray-700">
                              Order ID:
                            </span>{" "}
                            {order._id.slice(0, 8)} •{" "}
                            {new Date(order.createdAt).toLocaleDateString()}
                          </p>
                          <span
                            className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
                              order.orderStatus === "Delivered"
                                ? "bg-green-100 text-green-600"
                                : order.orderStatus === "Cancelled"
                                ? "bg-red-100 text-red-600"
                                : order.orderStatus === "Shipped"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-yellow-100 text-yellow-600"
                            }`}
                          >
                            {order.orderStatus}
                          </span>
                        </div>

                        <p className="text-lg font-semibold text-[#007070]">
                          ₹{order.totalAmount}
                        </p>
                      </div>

                      {/* Product List */}
                      <div className="border-t pt-3">
                        {order.products.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between py-2 border-b last:border-0"
                          >
                            <div className="flex items-center space-x-3">
                              {item.product?.image && (
                                <img
                                  src={item.product.image}
                                  alt={item.product.name}
                                  className="w-12 h-12 rounded-md object-cover"
                                />
                              )}
                              <div>
                                <p className="font-medium">
                                  {item.product?.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Qty: {item.quantity}
                                </p>
                              </div>
                            </div>
                            <p className="text-gray-700 font-medium">
                              ₹{item.price * item.quantity}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
