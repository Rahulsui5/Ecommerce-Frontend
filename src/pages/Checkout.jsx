const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
export default function Checkout() {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState([]);
  const [isNewShippingAddress, setIsNewShippingAddress] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    paymentMethod: "",
  });
  const fetchUser = async () => {
    try {
      const userId = localStorage.getItem("userID");
      const res = await axios.post("http://localhost:5000/SingleUser", {
        userId,
      });
      setShippingAddress(res.data.user.shippingAddress);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, [shippingAddress]);

  const addNewAddressInUser = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userID");
    const shippingAddress = {
      fullName: formData.fullName,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pinCode: formData.pinCode,
      userId: userId,
    };
    await axios.put(`http://localhost:5000/AddAddress`, shippingAddress);
    setIsNewShippingAddress(!isNewShippingAddress);
    toast.success("Address added");
  };
  const deleteAddress = async (id) => {
    try {
      const userId = localStorage.getItem("userID");
      await axios.delete(`http://localhost:5000/DeleteAddress`, {
        data: { id, userId },
      });
      toast.info("Address Deleted");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendAddress = (address) => {
    setFormData({
      fullName: address.fullName,
      phone: address.phone,
      address: address.address,
      city: address.city,
      state: address.state,
      pinCode: address.pinCode,
    });
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let shippingAddress = {
  //       fullName: formData.fullName,
  //       phone: formData.phone,
  //       address: formData.address,
  //       city: formData.city,
  //       state: formData.state,
  //       pinCode: formData.pinCode,
  //     };
  //     const paymentMethod = formData.paymentMethod || "card";
  //     const userId = localStorage.getItem("userID");
  //     await axios.post("http://localhost:5000/PlaceOrder",{
  //       userId,
  //       shippingAddress,
  //       paymentMethod,
  //     });
  //     Swal.fire({
  //       title: "Order placed successfully",
  //       icon: "success",
  //       draggable: true,
  //     });
  //     setTimeout(() => {
  //       navigate("/");
  //       window.location.reload();
  //     }, 2000);
  //   } catch (error) {
  //     console.error("Error fetching orders:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        alert("Failed to load Razorpay SDK. Please check your connection.");
        return;
      }
      const userId = localStorage.getItem("userID");
      if(!formData.fullName||!formData.phone||!formData.address||!formData.city||!formData.state||!formData.pinCode){
        toast.error("Select the address")
        return
      }
      if(!formData.paymentMethod){
        toast.error("Select the paymentmethod")
        return
      }
      const shippingAddress = {
        fullName: formData.fullName,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pinCode: formData.pinCode,
      };
      const paymentMethod = formData.paymentMethod || "card";

      // 🟢 If user selects COD
      if (paymentMethod === "cod") {
        const { data } = await axios.post("http://localhost:5000/PlaceOrder", {
          userId,
          shippingAddress,
          paymentMethod: "cod",
        });

        if (data.success) {
          Swal.fire({
            title: "Order Placed Successfully!",
            text: "Cash on delivery selected.",
            icon: "success",
          });
          setTimeout(() => navigate("/"), 2000);
        }
        return;
      }

      // 🟢 If user selects Online Payment (Razorpay)
      const { data: orderResponse } = await axios.post(
        "http://localhost:5000/PlaceOrder",
        {
          userId,
          shippingAddress,
          paymentMethod: "card",
        }
      );

      const options = {
        key: orderResponse.key, // ✅ returned from backend
        amount: orderResponse.amount,
        currency: orderResponse.currency,
        name: "BiteBuy",
        description: "Secure Payment Gateway",
        order_id: orderResponse.orderId,
        handler: async function (response) {
          try {
            // verify payment on backend
            const verifyRes = await axios.post(
              "http://localhost:5000/Verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                userId,
                shippingAddress,
                paymentMethod: "card",
              }
            );

            if (verifyRes.data.success) {
              Swal.fire({
                title: "Payment Successful 🎉",
                text: "Your order has been placed successfully!",
                icon: "success",
              });
              setTimeout(() => {
                navigate("/");
                window.location.reload();
              }, 2000);
            } else {
              Swal.fire({
                title: "Payment Verification Failed",
                icon: "error",
              });
            }
          } catch (err) {
            console.error("Error verifying payment:", err);
          }
        },
        prefill: {
          name: formData.fullName,
          email: "customer@example.com",
          contact: formData.phone,
        },
        theme: {
          color: "#007070",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error placing order:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="relative w-screen h-screen">
      <ToastContainer position="top-center" />
      {isNewShippingAddress && (
        <div className="bg-black/30 h-screen w-screen backdrop-blur inset-0 fixed flex justify-center items-center">
          <form className=" h-fit w-fit border bg-gray-100 p-10 rounded-md flex flex-col gap-y-3 ">
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full"
              required
            />
            <div className="lg:flex-row flex flex-col gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="border p-3 rounded-lg flex-1"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="border p-3 rounded-lg flex-1"
                required
              />
              <input
                type="text"
                name="pinCode"
                placeholder="Pincode"
                value={formData.pinCode}
                onChange={handleChange}
                className="border p-3 rounded-lg flex-1"
                required
              />
            </div>
            <div className=" flex gap-x-2">
              <button
                onClick={(e) => {
                  addNewAddressInUser(e);
                }}
                className="w-full py-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
              >
                Add address
              </button>
              <button
                onClick={() => {
                  setIsNewShippingAddress(!isNewShippingAddress);
                }}
                className="w-full py-3 rounded-md text-white bg-red-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20 grid grid-cols-1 gap-x-5 xl:grid-cols-5">
        <div className={` col-span-3 `}>
          <h1 className="text-3xl font-bold text-center mb-10">
            Place your order
          </h1>
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md flex flex-col gap-6"
          >
            <div className="flex flex-col gap-y-3">
              <h2 className="text-xl font-semibold mt-6 mb-4">
                Payment Method
              </h2>
              <div className="flex gap-4">
                <label className="flex-1 border p-3 rounded-lg cursor-pointer hover:bg-gray-100">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Credit / Debit Card
                </label>
                <label className="flex-1 border p-3 rounded-lg cursor-pointer hover:bg-gray-100">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Cash on Delivery
                </label>
              </div>
              <div className="flex gap-x-2">
                <Button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                  Place Order
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-2 h-full w-full overflow-y-auto  flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-3xl font-bold text-center mb-10">Addresses</h1>
          <button
            onClick={() => {
              setIsNewShippingAddress(!isNewShippingAddress),
                setFormData({
                  fullName: "",
                  phone: "",
                  address: "",
                  city: "",
                  state: "",
                  pinCode: "",
                });
            }}
            className="w-full py-1 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
          >
            Add new address
          </button>
          {shippingAddress.map((address, index) => (
            <div
              key={index}
              className={`border  bg-white shadow-md hover:shadow-lg duration-300 rounded-xl p-4 h-fit w-full`}
            >
              <div className="flex justify-between">
                <input
                  type="radio"
                  name="address"
                  className=" right-4 h-4 w-4"
                  onChange={() => sendAddress(address)}
                />
                <button
                  className="rounded-md py-1 px-2 hover:bg-red-500 active:scale-95 bg-red-700 text-white"
                  onClick={() => deleteAddress(address._id)}
                >
                  Delete
                </button>
              </div>
              <p className="text-lg font-semibold">{address.fullName}</p>

              <p className="text-gray-700 mt-1">{address.address}</p>
              <p className="text-gray-700">
                {address.city}, {address.state} - {address.pinCode}
              </p>
              <p className="text-gray-900 font-medium mt-3">
                Phone: {address.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
