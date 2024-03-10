import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTovarById, minuss, pluss } from '../../api/home/home'
import { IconButton, Rating } from '@mui/material'
import { AddBusinessTwoTone } from '@mui/icons-material'
import fakeCategory from '/src/assets/img/Category-SmartWatch.svg'
import car1 from '/src/assets/img/Frame 904.svg'
import car2 from '/src/assets/img/Frame 911.svg'
const AboutTovar = () => {
  const id = useParams('id')
  const dispatch = useDispatch()
  useEffect(()=>{
//  dispatch(getTovarById(id.id))
  //  dispatch(minuss())
  //  dispatch(pluss())

  },[id.id])
// console.log(id.id);
  let dataTovar = useSelector((store)=>store.homes.dataTovar)
 const urlIMg = import.meta.env.VITE_APP_FILES_URL
const [chet,setChet]= useState(0)
  console.log(dataTovar);
  // console.log(id);
  return (
    <div className='w-[80%] mx-auto mt-[100px] flex gap-8 my-[200px]'>
    <div className="flex flex-col gap-4 w-[13%]">
      {
        dataTovar.data.images?.map((el)=>{
          return (
            <>

              <img className='w-[170px] h-[138px]' src={el.images?`${urlIMg}/${el.images}`:fakeCategory} alt="" />
              
              {/* <img className='w-[60px] h-[60px]' src={`${urlIMg}/${el.images}`} alt="" /> */}
            </>
          )
        })
      }
    </div>
    <div className="text-[15px] w-[45%]">
    <img className='w-[500px] h-[600px]' src={ dataTovar.data.images[0].images?`${urlIMg}/${dataTovar.data.images[0].images}`:fakeCategory} alt="" />
    </div>
    <div className="w-[33%] flex flex-col gap-2">
      <p className='text-[24px] font-[500]'>{dataTovar.data.productName}</p>
      <div className="flex gap-8 items-center">
        <Rating value={4}/>
        <p className='text-[grey] text-[15px]'>({dataTovar.data.quantity} Reviews)</p>
        <p className='text-[#12CA5B] text-[14px] font-[600]'>{dataTovar.data.hasDiscount?"Not In Stock":"In Stock"}</p>
      </div>
      <div className=" flex flex-col gap-3">
        <p className='font-[700] text-[24px]'> ${dataTovar.data.price}.00</p>
        <p className=' text-[24px] text-[grey]'>{dataTovar.data.description.length<50?`PlayStation Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive`:dataTovar.data.description}</p>
        <p className='text-[20px]'>Colours: <span className='w-[80px] h-[30px] rounded-[100%] border-2 border-grey' style={{backgroundColor:dataTovar.data.color,color:dataTovar.data.color}}>oo</span></p>
        <div className="flex items-center gap-3"><p className='text-[20px]'>Size: </p><div className='flex gap-[20px]'>
          <div className="w-[40px] h-[32px] flex justify-center pt-[5px] rounded-[5px] border-2 border-black hover:bg-[#DB4444] hover:text-white">XS</div>
          <div className="w-[40px] h-[32px] flex justify-center pt-[5px] rounded-[5px] border-2 border-black hover:bg-[#DB4444] hover:text-white">S</div>
          <div className="w-[40px] h-[32px] flex justify-center pt-[5px] rounded-[5px] border-2 border-black hover:bg-[#DB4444] hover:text-white">M</div>
          <div className="w-[40px] h-[32px] flex justify-center pt-[5px] rounded-[5px] border-2 border-black hover:bg-[#DB4444] hover:text-white">L</div>
          <div className="w-[40px] h-[32px] flex justify-center pt-[5px] rounded-[5px] border-2 border-black hover:bg-[#DB4444] hover:text-white">XL</div>
          </div>
          
          
          </div>
          <div className="flex gap-6">
<div className="flex">
  <button className='w-[40px] h-[44px] border-2 border-black rounded-l-lg text-[25px]' onClick={()=>setChet(chet-1)} >-</button>
  <div className='w-[80px] h-[44px] border-2 border-black text-[30px] flex justify-center'><p>{chet}</p></div>
  <button className='w-[40px] h-[44px] border-2 border-black rounded-r-lg bg-[#DB4444] text-[white] text-[30px]' onClick={()=>setChet(chet+1)}>+</button>

</div>
<div className="">
<button className='bg-[#DB4444] w-[150px] h-[44px] rounded-[5px] text-[16px] text-white font-[500]'>Buy Now</button>

</div>
<div className="">
  <img src={car1} alt="" />
</div>
          </div>

          <div className="">
            <img src={car2} alt="" />
          </div>
      </div>
    </div>
    </div>
  )
}

export default AboutTovar
