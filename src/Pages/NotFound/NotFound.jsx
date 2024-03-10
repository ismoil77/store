import React from 'react'

const NotFound = () => {
  return (
    <div className='mx-[100px] my-[150px]'>
      <p className='text-[110px] font-[500] text-center'>404 Not Found</p>
      <p className='text-[20px] font-[400] text-center'>Your visited page not found. You may go home page.</p>
      <button className='block mx-auto rounded-[5px] my-[20px] bg-[#DB4444] px-[30px] py-[15px] text-[white]'>Back to home page</button>
    </div>
  )
}

export default NotFound
