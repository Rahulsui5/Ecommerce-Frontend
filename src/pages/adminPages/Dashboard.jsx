import React, { useEffect, useState } from "react";
import { Package, ShoppingBag, CreditCard, Users, User } from "lucide-react";
import axios from "axios";

export default function Dashboard() {
  const [userName, setUserName] = useState("Rahul");
  const [totalOrders, setTotalOrders] = useState("");
  const [deliveredOrders, setDeliveredOrders] = useState("");
  const [totalUsers, setTotalUsers] = useState("");
  const getUser = async () => {
    try {
      const resUsers = await axios.get(`http://localhost:5000/AllUser`);
      setTotalUsers(resUsers.data.userCount);
      const user = resUsers.data.user.find(
        (us) => us.role === "admin"
      ).userName;
      setUserName(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getOrder = async () => {
    try {
      let DO = 0;
      const resOrder = await axios.get("http://localhost:5000/GetAllOrder");
      setTotalOrders(resOrder.data.orders.length);
      resOrder.data.orders.map((order) =>
        order.orderStatus === "Delivered" ? (DO += 1) : 0
      );
      setDeliveredOrders(DO);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUser();
    getOrder();
  }, []);
  const summaryData = [
    {
      title: "Total Orders",
      value: totalOrders,
      icon: <Package className="text-pink-500" size={28} />,
      color: "border-pink-500",
    },
    {
      title: "Delivered Orders",
      value: deliveredOrders,
      icon: <ShoppingBag className="text-purple-500" size={28} />,
      color: "border-purple-500",
    },
    {
      title: "Total User",
      value: totalUsers,
      icon: <Users className="text-green-500" size={28} />,
      color: "border-green-500",
    },
    {
      title: "Admin Account",
      value: userName,
      icon: <User className="text-blue-500" size={28} />,
      color: "border-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Dashboard Overview
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-md border-l-4 ${item.color} p-5 flex items-center justify-between hover:shadow-lg transition`}
          >
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.value}
              </h3>
            </div>
            <div className="bg-gray-100 p-3 rounded-full">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
