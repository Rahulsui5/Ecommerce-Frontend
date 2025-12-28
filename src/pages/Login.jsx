import React, { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import trolley from '../assets/login-signup-imgs/trolley.png'
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { UseAuthContext } from "@/context/AuthContext";
export default function Login() {
    const {setIsLogin}=  UseAuthContext()
  const navigator=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const loginData=  await axios.post(`http://localhost:5000/LoginUser`,{email,password})
        if(loginData){
          setIsLogin(true)
          toast.success('Login successfully!')
          localStorage.setItem("userID",loginData.data.checkUser._id)
          setTimeout(() => {
            navigator('/')
            window.location.reload()
          }, 1000);
        }
    } catch (error) {
      toast.error(error.response.data.message)
      if("No user found please register"===error.response.data.message){
        setTimeout(() => {
          navigator("/signup")
        }, 1000);
      }
    }
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row  bg-gradient-to-br from-blue-500 to-purple-600 md:bg-gradient-to-br md:from-white md:to-white ">
      <ToastContainer position="top-center"/>
      <div className="w-screen md:flex md:w-1/2 md:bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center text-white p-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">Welcome Back!</h1>
          <p className="text-lg">Login to manage your shop & explore amazing products.</p>
          <motion.img 
          initial={{x:-500}} animate={{x: [-500, 0, 0, -500] }} transition={{duration:4,repeat:Infinity,ease:"linear", times: [0,0.25, 0.75, 1], repeatType: "loop"}}
            src={trolley}
            alt="E-commerce"
            className="w-60 mx-auto mt-8"
          />
        </div>
      </div>
      <div className="flex w-screen md:w-1/2 items-center justify-center p-6">
        <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-2xl shadow-xl w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <LogIn className="w-10 h-10 text-blue-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                required
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                required
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all flex items-center justify-center gap-2">
              <LogIn className="w-5 h-5" /> Login
            </button>
          </form>
          <p className="mt-6 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
