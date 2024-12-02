import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
   <>
    <div>
        <Image
        src={'https://thapatechnical.shop/footer-decoration.svg'}
        alt='/'
        width={1000000}
        height={200}
        />
        <div className='container py-12 flex flex-col md:gap-5 gap-8'>
            <div className='flex md:justify-between md:items-center md:flex-row flex-col items-center '>
                <h2 className='text-xl text-wht font-bold capitalize font-urbanist'>akbar <span className='text-brown_primary'>farooq</span></h2>
                <ul className='text-[17px] leading-6 text-light_black capitalize flex md:gap-x-10 gap-y-2 items-center md:flex-row flex-col'>
                    <li><Link href={''}>home</Link></li>
                    <li><Link href={''}>about</Link></li>
                    <li><Link href={''}>blog</Link></li>
                    <li><Link href={''}>contact</Link></li>
                </ul>
            </div>
            <div className='flex md:justify-between md:items-center md:flex-row flex-col items-center'>
                <p className='text-[17px] leading-7 text-light_black font-semibold'> © Copyright 2024, All rights reserved!</p>           
                <ul className='text-[17px] leading-7 text-light_black flex md:gap-x-8 md:flex-row  flex-col items-center gap-y-1'>
                    <li>Disclaimer</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Refund Policies</li>
                </ul>     
            </div>


        </div>
    </div>
   </>
  )
}

export default Footer