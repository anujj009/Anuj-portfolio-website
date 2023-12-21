import React from 'react'

const Footer = () => {
  return (
    <>
    <div id='footer' className='bg-black text-white py-5 flex justify-between px-20'>
        <div className=''>
            <p>@2023 Anuj sahu <span>All Rights Reserved</span></p>
        </div>
        <div className='space-x-5'>
            <a href="">About</a>
            <a href="">Privacy Policy</a>
        </div>
    </div>
    </>
  )
}

export default Footer