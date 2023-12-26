import React from 'react'

const Footer = () => {
  return (
    <>
    <div id='footer' className='bg-black text-white text-xs sm:text-base py-5 flex justify-between md:px-20 px-5'>
        <div className=''>
            <p>@2023 Anuj sahu <span className='md:ml-5 ml-1'> All Rights Reserved</span></p>
        </div>
        <div className='space-x-5'> 
            <a href="">Privacy Policy</a>
        </div>
    </div>
    </>
  )
}

export default Footer