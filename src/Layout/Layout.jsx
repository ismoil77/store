import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { IconButton } from "@mui/material";
import { getFromCart } from "../api/home/home";
import { useDispatch } from "react-redux";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { destroyToken } from "../utils/token";
const Layout = () => {

  ////////////////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const navigate = useNavigate()
  ///////////
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getFromCart())
  },[])
  return (
    <div className="">
      <div className="flex justify-between items-center pt-[20px] pb-[20px] border-b-[2px] pl-[100px] pr-[100px] sm:p-[10px]">
        <div className="">
          <MenuIcon />
        </div>
        <div className="block   ">
          <h1 className="text-[30px] font-[600]">Exclusive</h1>
        </div>
        <div className="flex gap-[30px] items-center tp:hidden">
          <Link to={"/"}>
            <h1 className="text-[20px] font-[400] hover:border-[black] hover:border-b-[2px] hover:duration-500">
              Home
            </h1>
          </Link>
          <Link to={"/contact"}>
            <h1 className="text-[20px] font-[400] hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              Contact
            </h1>
          </Link>
          <Link to={"/about"}>
            <h1 className="text-[20px] font-[400] hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              About
            </h1>
          </Link>
          <Link to={"/registration"}>
            <h1 className="text-[20px] font-[400] hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              Sign Up
            </h1>
          </Link>
          <Link to={"/login"}>
            <h1 className="text-[20px] font-[400] hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              Log In
            </h1>
          </Link>
        </div>
        <div className="flex w-[30%] sm:w-[30%] justify-between items-center">
          <div className="w-[60%] bg-[whitesmoke] rounded-lg sm:hidden tp:hidden ">
            <input
              placeholder="What are you looking for?"
              className="w-[80%] text-[gray] h-[40px] rounded-lg pl-[10px] bg-[whitesmoke] outline-none"
              type="text"
            />
            <SearchIcon sx={{ width: "20%" }} />
          </div>
          <div className="w-[30%] sm:w-[100%] gap-[15px] flex items-center">
            <div className="tp:hidden">
               <FavoriteBorderIcon  sx={{ width: "30px", height: "30px" }} />
            </div>
           
            <IconButton>
              {console.log(localStorage.getItem("access_token"))}
              <Link to={localStorage.getItem("access_token")!=null?'cartTovar':'notLogin'}>
                
            <ShoppingCartIcon sx={{ width: "30px", height: "30px" }} onClick={()=>dispatch(getFromCart())} />
            </Link>
            </IconButton>
        
          <IconButton className="pt:hidden" id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
                 <PermIdentityIcon sx={{ width: "30px", height: "30px" }} />
          </IconButton>
         
           <div className="">
                  <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Link to={"profile"}><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={()=>{
        destroyToken()
        navigate("/")
      }}>Logout</MenuItem>
      </Menu>
           </div>
      
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
      <div className="pl-[100px] justify-between pr-[100px] flex pt-[30px] pb-[30px] bg-[black]  sm:p-[10px] sm:flex-wrap">
        <div className="w-[20%] text-[white] sm:w-[100%] p-[10px]">
          <h1 className="text-[20px] font-[600]">Exclusive</h1>
          <h1 className="text-[18px] font-[600] pt-[10px]">Subscribe</h1>
          <h1 className="text-[17px] font-[400] pt-[10px]">
            Get 10% off your first order
          </h1>
          <div className="flex border-[2px] rounded-lg bg-[black] p-[10px] mt-[10px]">
            <input
              placeholder="Enter your email"
              className="w-[80%] rounded-lg bg-[black] outline-none text-[18px]"
              type="text"
            />
            <SendIcon />
          </div>
        </div>
        <div className="text-[white] w-[19%] sm:w-[100%] sm:p-[10px] ">
          <h1 className="text-[20px] font-[600]">Support</h1>
          <h1 className="text-[18px] font-[600] pt-[10px] text-[#c4c2c2]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </h1>
          <h1 className="text-[17px] font-[600] pt-[10px] text-[#c4c2c2]">
            exclusive@gmail.com
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            +88015-88888-9999
          </h1>
        </div>
        <div className="text-[white] w-[19%] sm:w-[45%] sm:p-[10px]">
          <h1 className="text-[20px] font-[600]">Account</h1>
          <h1 className="text-[18px] font-[600] pt-[10px] text-[#c4c2c2]">
            My Account
          </h1>
          <h1 className="text-[17px] font-[600] pt-[10px] text-[#c4c2c2]">
            Cart
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            Wishlist
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            Shop
          </h1>
        </div>
        <div className="text-[white] w-[19%] sm:w-[45%] sm:p-[10px]">
          <h1 className="text-[20px] font-[600]">Quick Link</h1>
          <h1 className="text-[18px] font-[600] pt-[10px] text-[#c4c2c2]">
            Privacy Policy
          </h1>
          <h1 className="text-[17px] font-[600] pt-[10px] text-[#c4c2c2]">
            Terms Of Use
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            FAQ
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            Contact
          </h1>
        </div>
        <div className="text-[white] w-[15%] sm:w-[100%] p-[10px]">
          <h1 className="text-[20px] font-[600]">Social</h1>
          <div className="flex gap-[20px] mt-[10px]">
            <FacebookIcon sx={{ width: "30px", height: "30px" }} />
            <TwitterIcon sx={{ width: "30px", height: "30px" }} />
            <InstagramIcon sx={{ width: "30px", height: "30px" }} />
            <InstagramIcon sx={{ width: "30px", height: "30px" }} />
          </div>
        </div>
      </div>
      <div className="p-[20px] bg-[black] border-t-[1px] border-[gray]">
        <h1 className="text-[gray] text-center ">
          Copyright Rimel 2022. menuNavigation right reserved
        </h1>
      </div>
    </div>
  );
};

export default Layout;
