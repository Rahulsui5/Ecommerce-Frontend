import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Orders from "./pages/Order";
import ProductDetails from "./pages/ProductDetails";
import { CardContextProvider } from "./context/CardContext";
import AdminDashboard from "./pages/AdminDashboard";
import Category from "./pages/Category";
import SearchedItem from "./pages/SearchedItem";
import{ AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <div className="" >
    <AuthProvider>
    <CardContextProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/editprofile" element={<EditProfile />}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/:id" element={<ProductDetails/>}/>
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/SearchedItem" element={<SearchedItem/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </CardContextProvider>
    </AuthProvider>
      </div>
    </>
  );
}

export default App;
