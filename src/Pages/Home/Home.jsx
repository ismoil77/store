import React, { useEffect } from 'react'

import image1 from "../../assets/hero.svg"
import image2 from "../../assets/apple.svg";


import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../App.css";

// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay,Pagination } from "swiper/modules";
import Tovar from '../../components/Tovar/Tovar';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import { destroyToken } from '../../utils/token';
import { useNavigate } from 'react-router-dom';
import { addTovarCart, getCategory, getTovar, getTovarById } from '../../api/home/home';
import { useDispatch, useSelector } from 'react-redux';
import timee from '/src/assets/img/Frame 725.svg'
import cat from '/src/assets/img/Frame 624.svg'
import mon from '/src/assets/img/Frame 621.svg'
import col from '/src/assets/img/Frame 600.svg'
import col2 from '/src/assets/img/Frame 622.svg'
import col3 from '/src/assets/img/Frame 622 (1).svg'
import col4 from '/src/assets/img/Frame 684.svg'
import col5 from '/src/assets/img/Frame 738.svg'
import col6 from '/src/assets/img/Frame 701.svg'
import col7 from '/src/assets/img/Frame 702.svg'
import col8 from '/src/assets/img/Frame 704.svg'
import fakeCategory from '/src/assets/img/Category-SmartWatch.svg'
const Home = () => {
  
  const navigate = useNavigate();
  const dataTovar = useSelector((store)=>store.homes.data)
  const dataCategory = useSelector((store)=>store.homes.dataCategory)

 console.log(dataCategory);
 const urlIMg = import.meta.env.VITE_APP_FILES_URL
const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTovar())
    dispatch(getCategory())
    dispatch(addTovarCart())
  },[])
  return (
    <div>
     
      <div className="pl-[100px] pr-[100px] flex justify-between items-center pt-[30px] pb-[30px]">
        <div className="w-[25%] p-[10px] border-r-[1.8px] border-[#aaa9a9]">
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Woman’s Fashion
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Men’s Fashion
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Electronics
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Home & Lifestyle
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Medicine
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Sports & Outdoor
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Baby’s & Toys
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Groceries & Pets
          </h1>
          <h1 className="text-[20px] font-[400] p-[10px] rounded-md hover:bg-[whitesmoke] pt-[10px] cursor-pointer">
            Health & Beauty
          </h1>
        </div>
        <div className="w-[70%]">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }} 
            modules={[Autoplay,Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex justify-between items-center text-[white] bg-[black] pt-[70px] pb-[70px] pl-[10px] pr-[10px]">
                <div className="w-[48%] pt-[20px] pb-[20px]">
                  <div className="flex justify-center items-center ">
                    {/* <img className="w-[10px] h-[30px]" src={image2} alt="" /> */}
                    <h1 className="text-[18px] ">iPhone 14 Series</h1>
                  </div>
                  <div>
                    <h1 className="text-[40px] font-[500]">
                      Up to 10% off Voucher
                    </h1>
                    <button className="text-[20px] border-b-[2px] p-[10px]">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="w-[48%]">
                  <img src={image1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center text-[white] bg-[black] pt-[70px] pb-[70px] pl-[10px] pr-[10px]">
                <div className="w-[48%] pt-[20px] pb-[20px]">
                  <div className="flex justify-center items-center ">
                    {/* <img className="w-[10px] h-[30px]" src={image2} alt="" /> */}
                    <h1 className="text-[18px] font-[700] font-serif">iPhone 14 Series</h1>
                  </div>
                  <div>
                    <h1 className="text-[40px] font-[500]">
                      Up to 10% off Voucher
                    </h1>
                    <button className="text-[20px] border-b-[2px] p-[10px]">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="w-[48%]">
                  <img src={image1} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-between items-center text-[white] bg-[black] pt-[70px] pb-[70px] pl-[10px] pr-[10px]">
                <div className="w-[48%] pt-[20px] pb-[20px]">
                  <div className="flex justify-center items-center ">
                    {/* <img className="w-[10px] h-[30px]" src={image2} alt="" /> */}
                    <h1 className="text-[18px] ">iPhone 14 Series</h1>
                  </div>
                  <div>
                    <h1 className="text-[40px] font-[500]">
                      Up to 10% off Voucher
                    </h1>
                    <button className="text-[20px] border-b-[2px] p-[10px]">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="w-[48%]">
                  <img src={image1} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>


      
      </div> 

{/* ////////tovar */}

       {/* <div className="">
        {
          dataTovar.map((item,index)=>{
          
            return(
              <Tovar key={index} quon={item.quantity} idd={item.id} image={item.image} prName={item.productName} price={item.price}/>
            )
          })
        }
      <Tovar/>


        </div> */}


{/* ////////tovar */}


<div className="w-[85%] mx-auto my-[50px]">

  <div className="">
    <img src={timee} alt="" />
  </div>


  <div className="mt-[50px]">
  <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >


        {
          dataTovar.map((item,index)=>{
          
            return( 
                     <SwiperSlide>  <Tovar key={index} ele={item} quon={item.quantity} idd={item.id} image={item.image} prName={item.productName} price={item.price}/></SwiperSlide>
            
            )
          })
        }
      </Swiper>
      <div className="flex justify-center my-[50px]" >
      <button className='bg-[#DB4444] w-[300px] h-[50px] rounded-[5px] text-[16px] text-white font-[500]'>View All Products</button>

      </div>
  </div>
</div>





<div className="w-[85%] mx-auto my-[50px]">
<div className="">
    <img src={cat} alt="" />
  </div>
<div className="flex">
<Swiper
        cssMode={true}
    
        mousewheel={true}
        keyboard={true}
        slidesPerView={6}
        spaceBetween={20}
        freeMode={true}
        modules={[Mousewheel, Keyboard]}
        className="mySwiper"
      >
{
  dataCategory.data?.map((el)=>{
    return (
      <>
      <SwiperSlide>
      <div className=" flex flex-col items-center w-[200px] h-[200px] border-2 rounded-[5px] border-[#c3c3c3] mt-[50px] hover:bg-[#DB4444] hover:text-[white]">
        <div className="m-[40px]">
           <img className='w-[60px] h-[60px]' src={el.categoryImage?`${urlIMg}/${el.categoryImage}`:fakeCategory} alt="" />
        </div>
        
      <p>{el.categoryName}</p>
      </div>
     </SwiperSlide> 
      </>
    )

  })
}
</Swiper>
</div>
</div>


<div className="w-[85%] mx-auto my-[50px]">
  <div className="flex justify-between items-end">
    <img src={mon} alt="" />
    <button className='bg-[#DB4444] w-[300px] h-[50px] rounded-[5px] text-[16px] text-white font-[500]'>View All</button>
    
  </div>
  <div className="my-[100px]">
  <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >


        {
          dataTovar.map((item,index)=>{
          
            return( 
                     <SwiperSlide>  <Tovar key={index} ele={item} quon={item.quantity} idd={item.id} image={item.image} prName={item.productName} price={item.price}/></SwiperSlide>
            
            )
          })
        }
      </Swiper>
  </div>
</div>








<div className="w-[85%] mx-[auto] my-[100px]">
  <div className="tp:w-[360px] overflow-hidden">
    <img src={col} className='' alt="" />
  </div>
</div>


<div className="w-[85%] mx-[auto] my-[100px]">
  <div className="">
    <img src={col2} className='' alt="" />
  </div>
  <div className="grid grid-cols-4 mt-[50px]">
  {
          dataTovar.map((item,index)=>{
          
            return( 
                    <Tovar key={index} ele={item} quon={item.quantity} idd={item.id} image={item.image} prName={item.productName} price={item.price}/>
            
            )
          })
        }
  </div>
  <div className="flex justify-center my-[50px]">
  <button className='bg-[#DB4444] w-[300px] h-[50px] rounded-[5px] text-[16px] text-white font-[500]'>View All Products</button>


  </div>

</div>



<div className="w-[85%] mx-auto">
  <div className="">
    <img src={col3} alt="" />
  </div>
  <div className="flex justify-between my-[30px]">
    <img className='w-[49%]' src={col4} alt="" />
    <img className='w-[49%]' src={col5} alt="" />
  </div>
</div>



<div className="w-[85%] mx-auto">
  <div className="flex justify-around mt-[100px] mb-[200px]">
    <img src={col6} alt="" />
    <img src={col7} alt="" />
    <img src={col8} alt="" />
  </div>
</div>


    </div>
  );
}
export default Home
