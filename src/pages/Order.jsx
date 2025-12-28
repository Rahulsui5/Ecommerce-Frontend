import React, { useEffect, useState } from "react";
import cartbg from "../assets/bgImgs/image_for_empty_cart.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, MapPin, Calendar, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, [orders]);

  const handleCancelOrder = (orderId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel order",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelOrder(orderId);
        Swal.fire({
          title: "Cancelled!",
          text: "Your order has been Cancelled.",
          icon: "success",
        });
      }
    });
  };
  const cancelOrder = async (orderId) => {
    try {
      await axios.put("http://localhost:5000/CancelOrder", { orderId });
    } catch (error) {
      console.error("error:", error);
    }
  };
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        Loading orders...
      </div>
    );
  if (orders.length < 1)
    return (
      <div className="text-center text-gray-500 flex flex-col items-center">
        <img src={cartbg} className="h-96 w-96" alt="Empty cart" />
        <h1 className="sm:text-2xl font-bold">No Orders Yet</h1>
        <p className="mb-3">
          Just relax, let us help you find some first-class products.
        </p>
        <Link
          to="/"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all rounded-md px-3 py-1"
        >
          Go Shopping
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-8">My Orders</h1>

      <div className="space-y-6">
        {orders.map((order, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="p-6 space-y-4">
              {/* 🧾 Order Details */}
              <div className="flex flex-col md:flex-row justify-between md:items-center border-b pb-4">
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center gap-2">
                    <Package className="w-4 h-4 text-pink-500" /> Order ID:{" "}
                    <span className="font-semibold">{order._id}</span>
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" /> Date:{" "}
                    <span className="font-semibold">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-green-500" /> Status:{" "}
                    <span className="font-semibold">{order.orderStatus}</span>
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-lg font-bold">
                    Total: ₹{order.totalAmount.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* 🛍️ Ordered Products */}
              <div>
                <h2 className="text-lg font-semibold mb-3">Items</h2>
                <div className="space-y-3">
                  {order.products.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-3 border rounded-lg"
                    >
                      <img
                        src={item.product.image[0]}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-semibold">{item.product.name}</p>
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <p className="font-bold">
                        ₹{item.price.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 📦 Delivery Address */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Delivery Address</h2>
                <p className="text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />{" "}
                  {`${order.shippingAddress.fullName}, ${order.shippingAddress.address}, ${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.pinCode}`}
                </p>
                <p className="text-sm text-gray-600">
                  Phone: {order.shippingAddress.phone}
                </p>
              </div>

              {/* 🔘 Buttons */}
              {order.orderStatus === "Processing" ? (
                <div className="flex gap-4 mt-6">
                  <div className="w-full">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                      Track Order
                    </Button>
                  </div>
                  <div
                    onClick={() => handleCancelOrder(order._id)}
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full hover:bg-red-100 text-red-500 border-red-300"
                    >
                      Cancel Order
                    </Button>
                  </div>
                </div>
              ) : order.orderStatus === "Shipped" ? (
                <Button
                  variant="outline"
                  className="w-full bg-blue-400 text-white hover:bg-blue-600 hover:text-black font-bold"
                >
                  Shipped
                </Button>
              ) : order.orderStatus === "Delivered" ? (
                <Button
                  variant="outline"
                  className="w-full bg-green-400 text-white hover:bg-green-600 hover:text-black font-bold"
                >
                  Delivered
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="w-full bg-red-600 text-white hover:bg-red-600 hover:text-black font-bold"
                >
                  Cancelled
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
