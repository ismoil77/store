import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { IconButton } from "@mui/material";

const NotLogin = () => {
  return (
    <div className="">
    
      {/* sdd */}
      <div className='mx-[100px] my-[150px]'>
      <p className='text-[110px] font-[500] text-center'>You are not Login</p>
      <p className='text-[20px] font-[400] text-center'>Please login</p>
      <Link to={'/'}><button className='block mx-auto rounded-[5px] my-[20px] bg-[#DB4444] px-[30px] py-[15px] text-[white]'>Back to home page</button>
    </Link></div>

      {/* sdd */}

    </div>
  );
};

export default NotLogin;
