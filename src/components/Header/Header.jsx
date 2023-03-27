import React from "react";
import Logo from "../../assets/img/Bookworn.svg";
import { Input, Badge } from "antd";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";
const { Search } = Input;
function Headers() {
  const menus = [
    { value: "home", label: "Home" },
    { value: "about", label: "About" },
    { value: "pages", label: "Pages" },
    { value: "shop", label: "Shop" },
    { value: "articles", label: "Articles" },
    { value: "contact", label: "Contact" },
  ];
  const onSearch = (value) => console.log(value);
  return (
    <div className="sticky top-0 z-50 shadow-lg">
      <div className="w-100 " style={{ background: "#1B3764" }}>
        <div className="py-10 container mx-auto">
          <div className="flex justify-between items-center">
              <div className="">
                <img className="w-100" src={Logo} alt="" />
              </div>
              <div className="bg-white mr-20 pl-2 px-1 py-2 rounded-md flex justify-center items-center basis-1/3 h-10">
                <input className="w-[100%] pr-2 focus:outline-none"  id="input" type="text" placeholder="Search..." />
                <button  className="bg-yellow text-primary border-none w-[62px] h-[32px] rounded-md flex justify-center items-center hover:bg-yellow-hover duration-200 active:bg-yellow">
                  <FaSearch />
                </button>
              </div>
          
            <div className="flex">
              <Link to="/login" className="flex justify-center items-end text-white hover:text-yellow duration-500">
              <FaUser className="text-[25px]  inline-block "/>
              <p className=" ml-2 mr-10">Accout</p>
              </Link>
              <Link to="/cart">
                <Badge count={5}>
                <FaShoppingBag className="text-[25px] text-white hover:text-yellow duration-500" />
                </Badge>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div className="bg-white decoration-none shadow-sm flex basis-10/12 justify-center">
        {menus.map((menu, i) => (
          <Link
            to={`/${menu.value === 'home' ? '': menu.value}`} key={i}
            className="decoration-none my-3 mx-5 text-gray-500 hover:text-primary duration-300"
            style={{ fontSize: "20px" }}
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Headers;
