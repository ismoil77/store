import { useSelect } from '@material-tailwind/react'
import { TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFromCart } from '../../api/home/home'
import ClearIcon from '@mui/icons-material/Clear';
import { CleaningServicesOutlined } from '@mui/icons-material'
const CartTovar = () => {
  const dispatch = useDispatch()
  const dataCart = useSelector((store)=>store.homes.dataCart)
  // console.log(dataCart);
useEffect(()=>{
  dispatch(getFromCart())
},[])
const urlIMg = import.meta.env.VITE_APP_FILES_URL
  return (
    <div className='w-[85%] mx-auto'>


<div className="">
  <table className='w-[100%]'>
    <thead>
      <tr className=''>
        <th colSpan='2'>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th colSpan='2'>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      {
        dataCart?.data[0]?.productsInCart?.map((el)=>{
          console.log(el);
          return (
            <>
            <tr>
              <td className='w-[30px]'><img src={`${urlIMg}/${el.product.image}`} alt="" /></td>
              <td>{el.product.productName}</td>
              <td>${el.product.price}</td>
              <td>{el.quantity}</td>
              <td>${el.product.price*el.quantity}</td>
              <td><CleaningServicesOutlined/></td>
            </tr>
            
            </>
          )
        })
      }
    </tbody>
  </table>
</div>













     <div className="mt-[60px]">

      <div className="flex justify-between">
        <button className='w-[218px] h-[56px] border-2 border-black rounded-[5px] text-[17px] font-[700]'>Return To Shop</button>
        <div className="flex gap-[20px]">
        <button className='w-[218px] h-[56px] border-2 border-black rounded-[5px] text-[17px] font-[700]'>Update Cart</button>
        <button className='w-[218px] h-[56px] border-2 border-[#DB4444] text-[#DB4444] rounded-[5px] text-[17px] font-[700]'>Remove all</button>

        </div>
      </div>
<div className="mt-[100px] flex justify-between">
  <div className=" flex gap-5">
        <div className="w-[400px]">
        <TextField fullWidth placeholder='Coupon Code'/>

        </div>
        <div className="">
        <button className='w-[218px] h-[56px] border-2 border-[#DB4444] text-[#DB4444] rounded-[5px] text-[17px] font-[700]'>Apply</button>

        </div>
      </div>

<div className="w-[468px] border-2 border-black p-[20px] flex flex-col gap-7" >
  <p className='text-[20px] font-[600]'>Cart Total</p>
  <div className="flex justify-between text-[16px]">
    <p>Subtotal:</p>
    <p>${dataCart.data[0].totalPrice}</p>
  </div>
  <div className="flex justify-between text-[16px]">
    <p>Shipping:</p>
    <p>${dataCart.data[0].totalDiscountPrice}</p>
  </div>
  <div className="flex justify-between">
    <p className='text-[20px] font-[600]'>Total:</p>
    <p className='text-[20px] font-[600]'>${dataCart?.data[0]?.totalPrice-dataCart?.data[0]?.totalDiscountPrice}</p>
  </div>
  <div className="flex justify-center">
  <button className='w-[218px] h-[56px] border-2 border-[#DB4444] bg-[#DB4444] rounded-[5px] text-white text-[17px] font-[700]'>Procees to checkout </button>

  </div>

</div>
</div>
      
     </div>
    </div>
  )
}

export default CartTovar
