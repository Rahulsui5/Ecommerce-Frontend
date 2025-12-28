import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import cartbg from "../assets/bgImgs/image_for_empty_cart.png";
import { useContextCart } from "@/context/CardContext";
import axios from "axios";

export default function Cart() {
  const { obj } = useContextCart();

  const removeCartItem = async (productId) => {
    try {
      const userId = localStorage.getItem("userID");
      await axios.delete(`http://localhost:5000/RemoveCart`, {
        data: { userId, productId },
      });
    } catch (error) {
      console.error("Error removing cart:", error);
    }
  };
  const increment = async (productId) => {
    try {
      const userId = localStorage.getItem("userID");
      const res = await axios.get(
        `http://localhost:5000/GetUserCart/${localStorage.getItem("userID")}`
      );
      let quantity = res.data.cart.items.find(
        (item) => item.product._id === productId
      ).quantity;
      quantity += 1;
      await axios.put(`http://localhost:5000/UpdateCart`, {
        userId,
        productId,
        quantity,
      });
    } catch (error) {
      console.error("Error incrementing cart:", error);
    }
  };
  const decrement = async (productId) => {
    try {
      const userId = localStorage.getItem("userID");
      const res = await axios.get(
        `http://localhost:5000/GetUserCart/${localStorage.getItem("userID")}`
      );
      let quantity = res.data.cart.items.find(
        (item) => item.product._id === productId
      ).quantity;
      quantity -= 1;
      if(quantity!==0){
        await axios.put(`http://localhost:5000/UpdateCart`, {
          userId,
          productId,
          quantity,
        });
      }
    } catch (error) {
      console.error("Error incrementing cart:", error);
    }
  };
 
  const totalPrice = obj.cartItems.reduce((acc, item) => acc + item.total, 0);
  const totalQty = obj.cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-1">Your Cart</h1>

      {obj.cartItems.length === 0 ? (
        <div className="text-center text-gray-500 flex flex-col items-center">
          <img src={cartbg} className="h-96 w-96" alt="Empty Cart" />
          <h1 className="sm:text-2xl font-bold">Your cart is empty</h1>
          <p className="mb-3">
            Just relax, let us help you find some first class products.
          </p>
          <Link
            to="/"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all rounded-md px-2 py-1"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 mt-5">
          {/* 🧾 Cart Items */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {obj.cartItems.map((item) => (
              <Card
                key={item._id}
                className="flex flex-col md:flex-row items-center gap-4 p-4 hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.product.image[0]}
                  alt={item.product.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <CardContent className="flex-1 flex flex-col justify-between">
                  <h2 className="text-lg font-semibold">{item.product.name}</h2>
                  <p className="text-gray-600 mb-2">₹{item.price}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <Button
                      className="px-3 py-1"
                      onClick={() => decrement(item.product._id)}
                    >
                      -
                    </Button>
                    <span className="font-medium">{item.quantity}</span>
                    <Button
                      className="px-3 py-1"
                      onClick={() => increment(item.product._id)}
                    >
                      +
                    </Button>
                    <Button
                      variant="destructive"
                      className="ml-auto flex items-center gap-1"
                      onClick={() => removeCartItem(item.product._id)}
                    >
                      <Trash2 className="h-4 w-4" /> Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 🧮 Summary */}
          <div className="flex flex-col gap-6 bg-white p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Items ({obj.cartItems.length})</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-4">
              <span>Quantity</span>
              <span>{totalQty}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-4">
              <span>Delivery</span>
              <span>₹99</span>
            </div>
            <hr className="border-gray-300 mb-4" />
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>₹{totalPrice + 99}</span>
            </div>
            <Link to="/checkout">
              <Button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all">
                Continue
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
