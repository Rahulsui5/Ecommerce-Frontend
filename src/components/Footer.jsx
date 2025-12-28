import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-10 pb-6 px-6 md:px-16 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">ShopEase 🛍️</h1>
          <p className="text-gray-400 text-sm leading-6">
            Discover the best deals and premium products all in one place. 
            Your comfort and satisfaction are our priority.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-5">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
              <div
                key={idx}
                className="p-2 bg-gray-700 rounded-full hover:bg-[#007070] transition-all cursor-pointer"
              >
                <Icon className="w-4 h-4 text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-[#00c6a9] cursor-pointer transition">Home</li>
            <li className="hover:text-[#00c6a9] cursor-pointer transition">Shop</li>
            <li className="hover:text-[#00c6a9] cursor-pointer transition">About Us</li>
            <li className="hover:text-[#00c6a9] cursor-pointer transition">Contact</li>
            <li className="hover:text-[#00c6a9] cursor-pointer transition">FAQs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#00c6a9]" /> 123 Market Street, Mumbai, India
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#00c6a9]" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#00c6a9]" /> support@shopease.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Join Our Newsletter</h2>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe for exclusive updates, discounts, and offers.
          </p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#00c6a9] hover:bg-[#009580] text-white px-5 py-2 mt-3 sm:mt-0 rounded-r-md  transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>

        {/* Payment Icons */}
        <div className="flex space-x-3 mt-3 md:mt-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            className="w-10 h-6 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
            alt="Mastercard"
            className="w-10 h-6 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/640px-Rupay-Logo.png"
            alt="RuPay"
            className="w-10 h-6 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/UPI_logo.svg/640px-UPI_logo.svg.png"
            alt="UPI"
            className="w-10 h-6 object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
