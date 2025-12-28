/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();

export const CardContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const products = await axios.get("http://localhost:5000/GetProduct");
      if (products) {
        setProducts(products.data.products);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const getCartItem = async () => {
    try {
      const userId = localStorage.getItem("userID");
      if (userId) {
        const res = await axios.get(
          `http://localhost:5000/GetUserCart/${userId}`
        );
        setCartItems(res.data.cart.items);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    getCartItem();
  }, [cartItems]);

  let obj = {
    cartItems,
    setCartItems,
    category,
    setCategory,
    search,
    setSearch,
    isModalOpen,
    setIsModalOpen,
    isAddModalOpen,
    setIsAddModalOpen,
    products,
    isAdmin,
    setIsAdmin
  };
  return <Context.Provider value={{ obj }}>{children}</Context.Provider>;
};
export const useContextCart = () => {
  return useContext(Context);
};
export default Context;
