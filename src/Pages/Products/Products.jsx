import React from 'react'
import Slider from '@mui/material/Slider';
import { TextField } from '@mui/material';
import Shop from '../../components/Shop/Shop';


const Products = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    function valuetext(value) {
        return `${value}°C`;
      }
  return (
    <main className='w-[87%] m-auto flex justify-between gap-20 my-[50px]'>
        <aside className='w-[20%]  flex flex-col gap-2 text-[20px] tracking-[1px]'>

            <p className='font-[600]'>Category</p>
            <p>All products</p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>See all</p>

            <hr className='my-[20px] border-[gray]' />

            <p className='font-[600]'>Brands</p>
            <div className='flex gap-1 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <p>Samsung</p>
            </div>
            <div className='flex gap-1 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <p>Apple</p>
            </div>
            <div className='flex gap-1 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <p>Huawei</p>
            </div>
            <div className='flex gap-1 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <p>Pocco</p>
            </div>
            <div className='flex gap-1 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <p>Lenovo</p>
            </div>
            <p>See all </p>

            <hr className='my-[20px] border-[gray]' />

            <p className='font-[600]'>Features</p>
            <div className='flex gap-1 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <p>Metallic</p>
            </div>
            <div className='flex gap-1 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <p>Plastic cover</p>
            </div>
            <div className='flex gap-1 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <p>8GB Ram</p>
            </div>
            <div className='flex gap-1 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <p>Super power</p>
            </div>
            <div className='flex gap-1 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <p>Large Memory</p>
            </div>
            <p>See all</p>

            <hr className='my-[20px] border-[gray]' />

            <p className='font-[600]'>Price range</p>

            <Slider getAriaLabel={() => 'Temperature range'} value={value} onChange={handleChange} valueLabelDisplay="auto" getAriaValueText={valuetext}/>
            <div className=' flex gap-5 items-center'>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
            <button className='w-[100%] h-[6svh] mt-[20px] rounded-md border border-[#DB4444] text-[#DB4444] text-[20px]'>Apply</button>

            <hr className='my-[20px] border-[gray]' />

            <p className='font-bold'>Condition</p>
            <div className='flex gap-1 items-center'>
                <input type="radio" className='w-[20px] h-[20px] accent-[#db4444]' name='range' />
                <p>Any</p>
            </div>
            <div className='flex gap-1 items-center'>
                <input type="radio" className='w-[20px] h-[20px] accent-[#db4444]' name='range' />
                <p>Refurbished</p>
            </div>
            <div className='flex gap-1 items-center'>
                <input type="radio" className='w-[20px] h-[20px] accent-[#db4444]' name='range' />
                <p>Brand new</p>
            </div>
            <div className='flex gap-1 items-center'>
                <input type="radio" className='w-[20px] h-[20px] accent-[#db4444]' name='range' />
                <p>Old items</p>
            </div>

            <hr className='my-[20px] border-[gray]' />

            <div className='flex gap-2 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <div className='flex items-center gap-1'>
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <div className='flex items-center gap-1'>
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/empty.png" className='w-[18px]' alt="star" />
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <div className='flex items-center gap-1'>
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/empty.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/empty.png" className='w-[18px]' alt="star" />
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <input type="checkbox" className='w-[20px] h-[20px]' />
                <div className='flex items-center gap-1'>
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/full.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/empty.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/empty.png" className='w-[18px]' alt="star" />
                    <img src="../src/assets/empty.png" className='w-[18px]' alt="star" />
                </div>
            </div>


        </aside>
        <aside className=' w-[75%] flex flex-col gap-10 items-center'>
            <div className='w-[100%] grid grid-cols-3 gap-5'>
                <Shop img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJG_4LmkD4Ha4ERgXT-VT-gWcPPMFdJY6uQ&usqp=CAU"} discount="-40" title={"HAVIT HV-G92 Gamepad"} price={'120'} initialPrice={"160"} stars={88} />
                <Shop img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJG_4LmkD4Ha4ERgXT-VT-gWcPPMFdJY6uQ&usqp=CAU"} discount="-40" title={"HAVIT HV-G92 Gamepad"} price={'120'} initialPrice={"160"} stars={88} />
                <Shop img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJG_4LmkD4Ha4ERgXT-VT-gWcPPMFdJY6uQ&usqp=CAU"} discount="-40" title={"HAVIT HV-G92 Gamepad"} price={'120'} initialPrice={"160"} stars={88} />
                <Shop img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJG_4LmkD4Ha4ERgXT-VT-gWcPPMFdJY6uQ&usqp=CAU"} discount="-40" title={"HAVIT HV-G92 Gamepad"} price={'120'} initialPrice={"160"} stars={88} />
                <Shop img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJG_4LmkD4Ha4ERgXT-VT-gWcPPMFdJY6uQ&usqp=CAU"} discount="-40" title={"HAVIT HV-G92 Gamepad"} price={'120'} initialPrice={"160"} stars={88} />
                <Shop img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJG_4LmkD4Ha4ERgXT-VT-gWcPPMFdJY6uQ&usqp=CAU"} discount="-40" title={"HAVIT HV-G92 Gamepad"} price={'120'} initialPrice={"160"} stars={88} />
                <Shop img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJG_4LmkD4Ha4ERgXT-VT-gWcPPMFdJY6uQ&usqp=CAU"} discount="-40" title={"HAVIT HV-G92 Gamepad"} price={'120'} initialPrice={"160"} stars={88} />
                <Shop img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJG_4LmkD4Ha4ERgXT-VT-gWcPPMFdJY6uQ&usqp=CAU"} discount="-40" title={"HAVIT HV-G92 Gamepad"} price={'120'} initialPrice={"160"} stars={88} />
                <Shop img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJG_4LmkD4Ha4ERgXT-VT-gWcPPMFdJY6uQ&usqp=CAU"} discount="-40" title={"HAVIT HV-G92 Gamepad"} price={'120'} initialPrice={"160"} stars={88} />
                <Shop img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJG_4LmkD4Ha4ERgXT-VT-gWcPPMFdJY6uQ&usqp=CAU"} discount="-40" title={"HAVIT HV-G92 Gamepad"} price={'120'} initialPrice={"160"} stars={88} />
                <Shop img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJG_4LmkD4Ha4ERgXT-VT-gWcPPMFdJY6uQ&usqp=CAU"} discount="-40" title={"HAVIT HV-G92 Gamepad"} price={'120'} initialPrice={"160"} stars={88} />
                <Shop img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJG_4LmkD4Ha4ERgXT-VT-gWcPPMFdJY6uQ&usqp=CAU"} discount="-40" title={"HAVIT HV-G92 Gamepad"} price={'120'} initialPrice={"160"} stars={88} />
            </div>
            <button onClick={() => navigate("product")} className=' p-[10px_50px] bg-[#DB4444] text-white text-[20px] rounded-md m-[30px_auto_10px_auto]'>More Products</button>
        </aside>
    </main>
  )
}

export default Products