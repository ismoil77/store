import React, { useEffect } from 'react'
import tov from "/src/assets/img/Frame 611.svg"
import { Rating } from '@mui/material'
import "./tovCss.css";
import { Link } from 'react-router-dom';
import { addTovarCart, getTovarById } from '../../api/home/home';
import { useDispatch } from 'react-redux';
////////////////onClick={()=>dispatch(getTovarById(idd))}
const Tovar = ({quon,prName,price,image,idd,ele}) => {
  const dispatch = useDispatch()
  useEffect(()=>{
 
    dispatch(getTovarById(idd))
    dispatch(addTovarCart())
    // console.log(ele.id);
  },[])
  const urlIMg = import.meta.env.VITE_APP_FILES_URL
  return (
    <div className='w-[270px] relative cardd flex flex-col justify-between h-[350px] gap-[5px]' >
<div className="w-[100%] h-[250px] bg-[#ffffff] rounded-[5px]">
  <div className="absolute  pt-[5px] pl-[10px]">
  <span className='flex justify-center w-[50px] bg-[#DB4444] rounded-[5px] text-[15px] text-[white]'>{ele.discountPrice}$</span>

  </div>
  <img src={`${urlIMg}/${image}`} className='w-[80%] h-[80%] block m-auto p-[30px]' alt="" /> <Link to={localStorage.getItem("access_token")!=null?`/${idd}`:'notLogin'}><button className='w-[100%] h-[30px] mt-[-30px] btnn absolute bg-black hidden text-white' onClick={()=>{dispatch(addTovarCart(ele.id));dispatch(getTovarById(idd));dispatch(getTovar())}} >ADD</button></Link>
</div>
<div className="text-left">
  <p className=''>{prName}</p>
      
      
</div>
<div className="flex text-left">
<p >${price}</p>
        <Rating  value={2}/>
  <p>({quon})</p>
      </div>
   
    </div>
  )
}

export default Tovar
