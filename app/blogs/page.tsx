import BLog_main from '@/components/blogs/BLog_main';
import What_they_Said_blog from '@/components/blogs/What_they_Said_blog';
import React from 'react'

const blogs = () => {
  return (
<>
<div>

  <div className='container '>
      {/* head */}
      <div className='grid grid-cols-2 md:grid-cols-[2fr_1fr]'>
        {/* headin */}
        <div>
          <p className='title !text-xs !leading-6'>popular</p>
          <h3 className='text-4xl text-wht font-bold leading-[43px]'>Blogs</h3>
        </div>
        {/* search */}
        <div className='w-full flex items-center '>
          <input type="search" name="search" id="search" placeholder='Search here...'
          className='outline-none w-full py-2 px-3 md:p-4 bg-third_secondary rounded-lg text-wht md:text-base text-sm'
          />
        </div>
      </div>
      {/* blog_outer */}
      <div className='mt-16 grid md:grid-cols-3 md:grid-rows-1 gap-4
      sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-3
      '>
        <BLog_main
        link={"/images/blog/hostinger.png"}
        p="Host a MERN Stack App on a VPS"
        h='200'
        w='500'
        web=''
        />
        <BLog_main
        link={"/images/blog/react.jpg"}
        p="How to create a Blog app using React.js?"
        h='500'
        w='3040'
        web=""
        />
        <BLog_main
        link={"/images/blog/system.png"}
        p="What is Good Web Design? 8 Principles to Follow"
        h='200'
        w='500'
        web=""
        />
      </div>
  </div>

  <What_they_Said_blog/>

</div>


</>


  )
}

export default blogs;