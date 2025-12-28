import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import {
  ShoppingCart,
  User,
  LogIn,
  Home,
  ListOrdered,
  LogOut,
  UserLock,
  UserCheck,
  UserPenIcon,
} from "lucide-react";
import Button from "@mui/material/Button";
import { IoMdSearch } from "react-icons/io";
import { IoWomanOutline } from "react-icons/io5";
import { IoManOutline } from "react-icons/io5";
import { LiaChildSolid } from "react-icons/lia";
import { BiBook } from "react-icons/bi";
import { TbHorseToy } from "react-icons/tb";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GiJewelCrown } from "react-icons/gi";
import { FaGlasses } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";
import { FaBaseballBatBall } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { BsBagHeart } from "react-icons/bs";
import { FaRegKissWinkHeart } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContextCart } from "@/context/CardContext";
import { UseAuthContext } from "@/context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
export default function Header() {
  const { obj } = useContextCart();
  const { isLogin, setIsLogin } = UseAuthContext();
  const search = [
    "shoes",
    "Jewellery",
    "Accessories",
    "moblies",
    "cloths",
    "watchs",
    "toys",
    "books",
  ];
  const [index, setIndex] = useState(0);
  const [searchItem, setSearchItem] = useState(search[7]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % search.length);
      setSearchItem(search[index]);
    }, 1500);
    return () => clearInterval(interval);
  }, [index]);
  const [searched, setSearched] = useState("");
  const ref = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    const handle = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (searched.trim() !== "") {
          obj.setSearch(searched);
          navigate("/SearchedItem");
        }
      }
    };
    const input = ref.current;
    input.addEventListener("keydown", handle);
    return () => {
      input.removeEventListener("keydown", handle);
    };
  }, [searched]);
  const forsearch = () => {
    if (searched.trim() !== "") {
      obj.setSearch(searched);
      navigate("/SearchedItem");
    }
  };
  const logoutConfirm = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout();
        Swal.fire({
          title: "Logout!",
          text: "Your id has been logout.",
          icon: "success",
        });
      }
    });
  };
  const handleLogout = () => {
    toast.info("Logout");
    setIsLogin(false);
    obj.setIsAdmin(false)
    localStorage.removeItem("userID");
    setTimeout(() => {
      navigate("/");
      window.location.reload()
    }, 1000);
  };
  const getUser = async () => {
    try {
      const resUsers = await axios.get(`http://localhost:5000/AllUser`);
      const user = resUsers.data.user.find((us) => us.role === "admin");
      if (user._id===localStorage.getItem("userID")) {
        obj.setIsAdmin(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <header className="shadow-md sticky top-0 z-50 flex flex-col bg-white/80 backdrop-blur">
      <ToastContainer position="top-center" />
      <div className="bg-white w-screen xl:w-[99vw] px-2  py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
        >
          ByteBuy
        </Link>
        <div className="px-3 bg-blue-50 py-1 flex flex-1 mx-6 border rounded-md outline-none focus-within:ring focus-within:ring-blue-300">
          <input
            ref={ref}
            type="text"
            placeholder={`Search for ${searchItem}...`}
            className="w-full bg-blue-50 outline-none rounded-md"
            value={searched}
            onChange={(e) => {
              setSearched(e.target.value);
            }}
          />
          <Button className="!rounded-full" onClick={forsearch}>
            <IoMdSearch className="w-6 h-6" />
          </Button>
        </div>

        <nav className=" flex items-center gap-5">
          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/"
              className="hover:text-blue-600 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              to={`${isLogin ? "/orders" : "/login"}`}
              className="hover:text-blue-600 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Orders
            </Link>
            {obj.isAdmin && (
              <Link
                to="/admin"
                className="hover:text-blue-600 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Admin
              </Link>
            )}
          </div>

          <Link to={`${isLogin ? "/cart" : "/login"}`} className="relative">
            <ShoppingCart className="h-6 w-6 hover:scale-105 duration-300 hover:text-blue-600" />
            <span className="absolute animate-bounce -top-2.5 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {obj.cartItems.length}
            </span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outlined"
                className="!rounded-full hover:text-blue-600"
                color="black"
                size="icon"
              >
                <User className="h-5 w-5  " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="block md:hidden">
                <DropdownMenuItem asChild>
                  <Link to="/">
                    <Home />
                    Home
                  </Link>
                </DropdownMenuItem>
                {isLogin && (
                  <DropdownMenuItem asChild>
                    <Link to="/order">
                      <ListOrdered />
                      Order
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem asChild>
                  <Link to="/admin">
                    <UserLock />
                    Admin
                  </Link>
                </DropdownMenuItem>
              </div>

              {isLogin && (
                <DropdownMenuItem asChild>
                  <Link to="/profile">
                    <User />
                    Profile
                  </Link>
                </DropdownMenuItem>
              )}

              {!isLogin && (
                <div>
                  {" "}
                  <DropdownMenuItem asChild>
                    <Link to="/login">
                      <LogIn />
                      Login
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/signup">
                      <UserPenIcon />
                      Signup
                    </Link>
                  </DropdownMenuItem>{" "}
                </div>
              )}
              {isLogin && (
                <DropdownMenuItem asChild>
                  <Link to="#" onClick={logoutConfirm}>
                    <LogOut />
                    Logout
                  </Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
      <div
        className="border-t grid grid-flow-col overflow-x-scroll h-16 hover:cursor-pointer gap-7 items-end text-lg justify-items-center text-nowrap "
        style={{ scrollbarWidth: "none" }}
      >
        <Link to="/">
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300 flex flex-col items-center">
            <FaRegKissWinkHeart className="h-6 w-12" />
            For You
          </div>
        </Link>
        <Link to="/category" onClick={() => obj.setCategory("Women")}>
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300 flex flex-col items-center">
            <IoWomanOutline className="h-6 w-12" />
            Women
          </div>
        </Link>
        <Link to="/category" onClick={() => obj.setCategory("Men")}>
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300 flex flex-col items-center">
            <IoManOutline className="h-6 w-12" />
            Men
          </div>
        </Link>
        <Link to="/category" onClick={() => obj.setCategory("Kids")}>
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300  flex flex-col items-center">
            <LiaChildSolid className="h-6 w-12" />
            Kids
          </div>
        </Link>
        <Link to="/category" onClick={() => obj.setCategory("Bags")}>
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300  flex flex-col items-center">
            <BsBagHeart className="h-6 w-12" />
            Bags
          </div>
        </Link>
        <Link to="/category" onClick={() => obj.setCategory("Electronics")}>
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300  flex flex-col items-center">
            <FaLaptop className="h-6 w-12" />
            Electronics
          </div>
        </Link>
        <Link to="/category" onClick={() => obj.setCategory("Sports")}>
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300  flex flex-col items-center">
            <FaBaseballBatBall className="h-6 w-12" />
            Sports
          </div>
        </Link>
        <Link to="/category" onClick={() => obj.setCategory("Beauty")}>
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300  flex flex-col items-center">
            <GiLipstick className="h-6 w-12" />
            Beauty
          </div>
        </Link>
        <Link to="/category" onClick={() => obj.setCategory("Accessories")}>
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300  flex flex-col items-center">
            <FaGlasses className="h-6 w-12" />
            Accessories
          </div>
        </Link>
        <Link to="/category" onClick={() => obj.setCategory("Jewellery")}>
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300  flex flex-col items-center">
            <GiJewelCrown className="h-6 w-12" />
            Jewellery
          </div>
        </Link>
        <Link to="/category" onClick={() => obj.setCategory("Grocery")}>
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300  flex flex-col items-center">
            <MdOutlineLocalGroceryStore className="h-6 w-12" />
            Grocery
          </div>
        </Link>
        <Link to="/category" onClick={() => obj.setCategory("Toys")}>
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300  flex flex-col items-center">
            <TbHorseToy className="h-6 w-12" />
            Toys
          </div>
        </Link>
        <Link to="/category" onClick={() => obj.setCategory("Books")}>
          <div className="hover:text-pink-800 hover:-translate-y-1 duration-300  flex flex-col items-center">
            <BiBook className="h-6 w-12" />
            Books
          </div>
        </Link>
      </div>
    </header>
  );
}
