import React, {useState, useEffect} from "react";
import Logo from "../../assets/img/Bookworn.svg";
import { Input, Badge } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import { StoreContext } from "../../store";
import { useContext } from "react";
import { actions } from "../../store";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";

import * as authService from '../../apiService/authService.js'
import * as userService from '../../apiService/userService.js';
import * as productService from '../../apiService/productService';
import * as cartService from '../../apiService/CartService';
import SearchProduct from "./SearchProduct";
import { useTranslation } from "react-i18next";
function Headers() {
  const {t} = useTranslation();
  const {i18n} = useTranslation();
  const currenLang = i18n.language;
const [user, setUser] = useState(null);
const  [search, setSearch] = useState("");
const [isClose, setIsClose] = useState(true);
const [noResult, setNoResult] = useState(false);
const [searchResult, setSearchResult] = useState([]);
const [cart, dispatch] = useContext(StoreContext);
const navigate = useNavigate();

let info = JSON.parse(localStorage.getItem('user'));
const handleLanguage = (lng) => {
  i18n.changeLanguage(lng);
}

  const handleLogout = () => {
    const fetchLogout = async () => {
      const response = await authService.logout();
      if(response?.status === 200){
        localStorage.removeItem('user');
        dispatch(actions.setQuantityCart(0));
        navigate('/shop');
        toast.success("Logout success", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        localStorage.removeItem('token');
        setUser(null);
      }else{
        toast.error("Logout failed", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
        
    }
    fetchLogout();  
  }

  const tmp =  () => {
    if(localStorage.getItem('token') !== null){ 
      const fetchUser = async () => {
      const response = await userService.getUserByToken();
      localStorage.setItem('user', JSON.stringify(response?.data));
      info = response?.data;
    }
    fetchUser();
    }
  }

  useEffect(() => {
    console.log("load");
    if(localStorage.getItem('token') !== null){
      const fetchCart = async() =>{
        const response = await cartService.getCart();
        dispatch(actions.setQuantityCart(response?.data.cartItems?.length));
      }
      fetchCart();
    }
    
    const fetch = setInterval(() => {
      tmp();
     }, 1000*60*15+1);
       return () => clearInterval(fetch);
      
  },[]);
  const searchProduct = async () => {
    const response = await productService.searchProductByName(search);
     setSearchResult(response?.data);
  }
const handleSearch = () => {
  searchProduct();
}
  useEffect(() => {
    if(search.length > 0) {
      searchProduct();
      if(searchResult.length <= 0) {
        setNoResult(false);
        setIsClose(false)
      }
     
    }else { 
      setSearchResult([]);
      setNoResult(true)
      setIsClose(true)
    }
  },[search])

  const menus = [
    { value: `home`, label: `${t('home')}` },
    { value: `about`, label: `${t('about')}` },
    { value: 'shop', label: `${t('shop')}` },
    { value: 'articles', label: `${t('articles')}` },
    { value: 'contact', label: `${t('contact')}` },
  ];
  return (
    <div className="sticky top-0 z-50 shadow-lg">
      <div className="w-100 " style={{ background: "#1B3764" }}>
        <div className="py-10 container mx-auto">
          <div className="flex justify-between items-center relative">
              <Link to="/" className="">
                <img className="w-100" src={Logo} alt="" />
              </Link>
              <div className="bg-white  pl-2 px-1 py-2 rounded-md flex justify-center items-center basis-1/3 h-10">
                <input className="w-[100%] pr-2 focus:outline-none"  id="input" value={search} type="text" placeholder={`${t('search')}...`}  onChange={(e)=>setSearch(e.target.value)}/>
                <button onClick={handleSearch}  className="bg-yellow text-primary border-none w-[62px] h-[32px] rounded-md flex justify-center items-center hover:bg-yellow-hover duration-200 active:bg-yellow">
                  <FaSearch />
                </button>
              </div>
              <div className="absolute top-full left-[51%] translate-x-[-60%] w-[30%] translate-y-2">
                <SearchProduct product={searchResult} close={isClose}/>
              </div>
              
          
            <div className="flex items-center">
            {info === null ? 
            <Link to="/login" className="flex justify-center items-end text-white hover:text-yellow duration-500">
              <FaUser className="text-[25px]  inline-block "/>
              <p className=" ml-2 mr-10">{t('signin/signup')}</p>
              </Link>
              : 
              <div className="relative group">
                <div className="flex justify-center items-end cursor-pointer  text-white " >
                {/* <FaUser className="text-[25px]  inline-block "/> */}
                <p className=" ml-2 mr-6">{info?.fullName}</p>
                
                </div>
                <p  className="transition-all cursor-pointer group-hover:opacity-100 group-hover:top-full mt-[5px] opacity-0 z-[20] absolute top-[50%] left-[50%] translate-x-[-50%] min-w-max bg-[#0000007e] text-white font-medium rounded-[8px] text-sm px-3.5 py-2" onClick={handleLogout}>
                    <span
                        className="absolute bottom-[99%] left-[50%] translate-x-[-50%] border-[7px] border-[transparent] border-b-[#0000007e]"/>
                        Logout
                    </p>
              </div>
              
              }
              
              <Link to="/cart" >
                <Badge count={cart.quantityItem}>
                <FaShoppingBag className="text-[25px] text-white hover:text-yellow duration-500" />
                </Badge>
              </Link>
              <div className="relative group ml-4">
                <div className="flex justify-center items-end cursor-pointer  text-white " >
                
                <p className="ml-2 mr-10 uppercase">{currenLang}</p>
                
                </div>
                <div  className="transition-all cursor-pointer group-hover:opacity-100 group-hover:top-full mt-[5px] opacity-0 z-[20] absolute top-[50%] left-[50%] translate-x-[-32%] min-w-max bg-[#000000cc] text-white font-medium rounded-[8px] text-sm px-3.5 py-2" >
                    <span
                        className="absolute bottom-[99%] left-[20%] translate-x-[-70%] border-[7px] border-[transparent] border-b-[#0000007e]"/>
                        <p className="mb-2 hover:text-yellow-hover duration-300" onClick={()=>handleLanguage('en')}>English</p>
                        <p className="hover:text-yellow-hover duration-300" onClick={()=>handleLanguage('vi')}>Vietnamese</p>
                  </div>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white decoration-none shadow-sm flex basis-10/12 justify-center">
        {menus.map((menu, i) => (
          <Link
            to={`/${menu.value === 'home' ? '': menu.value}`} key={i}
            
          >
          <p className="decoration-none my-3 mx-5 text-gray-500 hover:text-primary duration-300"
            style={{ fontSize: "20px" }}>
            {menu.label}
          </p>
            
          </Link>
        ))}
       
      </div>
    </div>
  );
}

export default Headers;
