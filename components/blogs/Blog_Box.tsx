import React from 'react'
import Image from 'next/image'
const Blog_Box = ({p1,h3,p2}:{p1:string,h3:string,p2:string}) => {
  return (
    <>
      <div className='m-0.5 p-4 bg-third_secondary rounded-lg border-[1px] border-brown_primary/0 hover:border-brown_primary/100 hover:scale-[102%] down' >
      <p style={{wordSpacing:"3px"}} className=" text-light_black text-base  tracking-wide leading-7 font-light">{p1}</p>
        {/* SHOW */}
      <div className='flex flex-row items-center justify-start gap-4 mt-6 py-3 '>
        <div className='overflow-hidden rounded-full h-14 w-14 
        bg-cover
        bg-[url("/images/dev.png")]'>
        </div>
        <div className='flex flex-col gap-0
        '>
            <h3 className='capitalize text-wht font-urbanist text-lg font-bold'>{h3}</h3>
            <p  className='capitalize text-wht font-urbanist text-17px font-normal tracking-wider'>{p2}</p>
        </div>
       
      </div>
      </div>
    </>
  )
}

export default Blog_Box