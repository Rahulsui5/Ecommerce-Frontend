import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const getAllOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/GetAllOrder");
      if (res.data.success) {
        setOrders(res.data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllOrders();
  }, []);
  const handleOrderStatus = (orderId, status) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the status of order",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        updateOrder(orderId, status);
        Swal.fire({
          title: "Updated!",
          text: "Your order has been updated.",
          icon: "success",
        });
      }
    });
  };
  const updateOrder = async (orderId, status) => {
    try {
    const res=  await axios.put("http://localhost:5000/UpdateStatus", {
        orderId,
        status,
      });
      console.log(res)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };
  const getColorClass = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      case "Shipped":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-yellow-100 text-yellow-600";
    }
  };
  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        All Orders
      </h2>
      <div className="overflow-x-auto shadow-md rounded-2xl mb-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold">#</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">
                User
              </th>
              <th className="py-3 px-4 text-center text-sm font-semibold">
                Total Amount
              </th>
              <th className="py-3 px-4 text-center text-sm font-semibold">
                Payment Status
              </th>
              <th className="py-3 px-4 text-center text-sm font-semibold">
                Order Status
              </th>
              <th className="py-3 px-4 text-center text-sm font-semibold">
                Payment Method
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold">
                Date
              </th>
              {/* <th className="py-3 px-4 text-center text-sm font-semibold">
                Update
              </th> */}
              <th className="py-3 px-4 text-center text-sm font-semibold">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr
                  key={order._id}
                  className="hover:bg-gray-50 transition-all duration-200 border-b"
                >
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 text-gray-800 font-medium text-sm">
                    {order.user?.userName || "Unknown"}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-700 text-sm">
                    ₹{order.totalAmount.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.paymentStatus === "Paid"
                          ? "bg-green-100 text-green-600"
                          : order.paymentStatus === "Failed"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <select
                      value={order.orderStatus}
                      onChange={(e) =>
                        handleOrderStatus(order._id,e.target.value)
                      }
                      className={`px-3 py-1 rounded-full text-xs font-semibold outline-none border-none cursor-pointer transition-all duration-300 ${getColorClass(
                        order.orderStatus
                      )}`}
                    >
                      {["Processing", "Shipped", "Delivered", "Cancelled"].map(
                        (option) => (
                          <option
                            key={option}
                            value={option}
                            className="text-black bg-white"
                          >
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </td>
                  <td className="py-3 px-4 text-center text-gray-700 text-sm">
                    {order.paymentMethod}
                  </td>
                  <td className="py-3 px-4 text-gray-500 text-sm">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm transition"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500 text-sm italic"
                >
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Order Details Panel */}
      {selectedOrder && (
        <div className=" fixed inset-0 flex items-center h-screen w-screen bg-black/40 backdrop-blur-sm ">
          <div className="bg-white border border-gray-200 mt-10 rounded-2xl shadow-md p-6 h-fit w-fit mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Order #{selectedOrder._id.slice(-6).toUpperCase()}
              </h3>
              <button
                onClick={() => setSelectedOrder(null)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
              <p>
                <strong>User:</strong> {selectedOrder.user?.userName || "N/A"}
              </p>
              <p>
                <strong>Email:</strong> {selectedOrder.user?.email || "N/A"}
              </p>
              <p>
                <strong>Payment Method:</strong> {selectedOrder.paymentMethod}
              </p>
              <p>
                <strong>Total:</strong> ₹{selectedOrder.totalAmount.toFixed(2)}
              </p>
            </div>

            <h4 className="font-semibold text-gray-800 mb-2">
              Shipping Address
            </h4>
            <div className="bg-gray-50 p-3 rounded-lg text-gray-700 text-sm mb-4">
              <p>{selectedOrder.shippingAddress.fullName}</p>
              <p>{selectedOrder.shippingAddress.address}</p>
              <p>
                {selectedOrder.shippingAddress.city},{" "}
                {selectedOrder.shippingAddress.state}{" "}
                {selectedOrder.shippingAddress.postalCode}
              </p>
              <p>{selectedOrder.shippingAddress.country}</p>
              <p>📞 {selectedOrder.shippingAddress.phone}</p>
            </div>

            <h4 className="font-semibold text-gray-800 mb-2">Products</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm">
                <thead className="bg-blue-100 text-gray-700">
                  <tr>
                    <th className="py-2 px-3 border-b text-left">#</th>
                    <th className="py-2 px-3 border-b text-left">Product</th>
                    <th className="py-2 px-3 border-b text-center">Qty</th>
                    <th className="py-2 px-3 border-b text-center">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.products.map((p, i) => (
                    <tr key={i} className="hover:bg-gray-50 border-b">
                      <td className="py-2 px-3">{i + 1}</td>
                      <td className="py-2 px-3">{p.product?.name || "N/A"}</td>
                      <td className="py-2 px-3 text-center">{p.quantity}</td>
                      <td className="py-2 px-3 text-center">
                        ₹{p.price.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-right mt-4 font-bold text-gray-800 text-lg">
              Total Amount: ₹{selectedOrder.totalAmount.toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllOrders;
