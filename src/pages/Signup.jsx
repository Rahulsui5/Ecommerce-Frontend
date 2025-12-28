import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Store } from "lucide-react";
import glass from "../assets/login-signup-imgs/glass.png";
import { Link, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
export default function Signup() {
  const navigator = useNavigate();
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signupData = await axios.post(
        `http://localhost:5000/RegisterUser`,
        form
      );
      if (signupData) {
        toast.success("Signup successfully!");
        setTimeout(() => {
          navigator("/login");
        }, 1000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      if ("User already exists" === error.response.data.message) {
        setTimeout(() => {
          navigator("/login");
        }, 1000);
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <ToastContainer position="top-center" />
      <div className="flex w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg bg-white/20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex w-1/2 flex-col justify-center items-center text-white p-10 bg-gradient-to-br from-purple-700 to-indigo-700"
        >
          <h1 className="text-4xl font-extrabold">Join Our Marketplace</h1>
          <p className="mt-4 text-lg text-gray-200 text-center">
            Become a <span className="font-semibold">Seller</span> or a{" "}
            <span className="font-semibold">Buyer</span>. Start your journey
            today 🚀
          </p>
          <motion.img
            src={glass}
            alt="signup illustration"
            className="w-48 mt-8 drop-shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="w-full md:w-1/2 bg-white/80 p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create Account
          </h2>
          <p className="text-sm text-gray-500 text-center mt-2">
            Sign up and start exploring ✨
          </p>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-purple-500">
              <User className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                name="userName"
                value={form.userName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full outline-none text-sm bg-transparent"
                required
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-purple-500">
              <Mail className="text-gray-400 mr-2" size={20} />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full outline-none text-sm bg-transparent"
                required
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-purple-500">
              <Lock className="text-gray-400 mr-2" size={20} />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full outline-none text-sm bg-transparent"
                required
              />
            </div>
            {/* <Select
              value={form.role}
              className=" "
              onValueChange={(value) => setForm({ ...form, role: value })}
            >
              <SelectTrigger className="flex items-start border border-gray-300 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-purple-500 text-gray-400 ">
                <Mail className="text-gray-400 mr-2" size={20} />
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buyer">Buyer</SelectItem>
                <SelectItem value="seller">Seller</SelectItem>
              </SelectContent>
            </Select> */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
            >
              Sign Up
            </motion.button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
