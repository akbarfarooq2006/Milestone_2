import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Front = () => {
  return (
<div>
    <div className='container grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 gap-4 py-12' >
        {/* side 1 */}
        <div className="side1 flex flex-col justify-center ">
             <p className='title'>Hello and Welcome</p>
            <h1 className='text-[2.5rem] text-wht leading-[50px] font-bold font-urbanist mt-2 mb-8'>Hi There, <br />I am  <span className='text-brown_primary'>Akbar Farooq</span>
            </h1>
            <p className='ptype leading-8'>
            This website is all about Website Development, Technical, Tips and Tricks, Designs Principle, Source Code and Programming techniques are developed. 
            </p>
            <div className=' flex items-center flex-col mt-9  md:flex-row md:gap-x-4 gap-y-4'>
                <button className='py-2 md:inline-block w-full md:w-auto block px-6 text-lg text-wht bg-brown_secondary rounded-lg  hover:bg-brown_secondary_hover down'>Get My CV</button>
                <button className='py-2 md:inline-block w-full md:w-auto block px-6 text-lg text-wht hover:bg-brown_secondary   rounded-lg down'>See My Works</button>
                <button ></button>
            </div>
        </div>
        {/* siides */}
        <div className="side2 ">
            <div className=' h-full grid place-items-center '>
               
                     <Image
                        src={'/images/my_pic2.jpg'}
                        alt="my pic"
                        width={300}
                        height={500}
                        className='rounded-full border-[1px] border-brown_primary p-2'    
                        />
                
            </div>
        </div>
    </div>
    {/* links of fronts*/}
    <div className='container flex flex-col md:flex-row gap-y-4 items-center justify-between lg:py-16 py-12 pt-12
    '>
        <p className='text-wht text-lg font-light capitalize tracking-wider'>keep scrolling</p>
        <ul className='text-brown_primary capitalize  font-normal tracking-wider text-lg flex md:gap-6 
        w-full md:w-auto justify-around flex-wrap md:justify-between
        '>
            <li><Link target='_blank' href="https://www.instagram.com/akbarfarooq2006/">instagram</Link></li>
            <li><Link target='_blank' href="https://www.facebook.com/profile.php?id=61559873665576">facebook</Link></li>
            <li><Link target='_blank' href="https://linkedin.com/in/akbar-farooq-134a07308/">linkedin</Link></li>
            <li><Link target='_blank' href="https://discord.com/channels/1240379908539027497/1240379909143003148">discord</Link></li>
        </ul>
    </div>
</div>
)
}

export default Front