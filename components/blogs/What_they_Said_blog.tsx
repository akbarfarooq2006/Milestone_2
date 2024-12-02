import React from 'react'
import Link from 'next/link'
import Blog_Box from './Blog_Box'


const What_they_Said_blog = () => {
  return (
<>
<div className='relative after:absolute after:bg-custom-linear   after:inset-0 after:-z-10  bg-wht z-0 mb-0'>
    <div className='container relative px-1 py-20   '>
        <p className='title mb-2'>testimonial</p>
        <div className='flex items-center justify-between'>
            <h3 className='mb-7 text-wht font-semibold text-3xl font-urbanist'>What they said</h3>
            <Link target='_blank' href={'https://web.dev/blog'} className='
            capitalize text-brown_primary hover:text-brown_primary/85 down hover:scale-105
            text-[17px] 
            '>read all</Link>
        </div>
        {/* blog component */}
        <div className='lg:mt-16 md:mt-10 mt-6 grid gap-3 grid-cols-1 grid-rows-3
         md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 '>
             <Blog_Box
             p1="His courses are highly detailed and easy to understand. Highly recommend to anyone who wants to learn web development. His channel is absolutely best for web development related topics. Because of your videos, I got selected in MNC company with a good package. Thank you so much."
             h3="John fray"
             p2="Front-End-Developer"
             />
              <Blog_Box
             p1="I can't thank Thapa Technical enough. Thank you so much for your great content on youtube. I love how you make everything simple and absolutely love your teaching style. I really want to meet you in real life. Once again, thank you so much for all the hardworks that you have done for us."
             h3="Rober dellay"
             p2="React.js Developer"
             />
               <Blog_Box
             p1="I am genuinely grateful to Vinod Sir, and the entire team for this exceptional learning experience. My expectations have been exceeded, and I am empowered with skills and insights that will undoubtedly shape my career. Here's to an education that goes beyond the ordinary, enriching lives in ways beyond measure. 🌟🙏."
             h3="pitter json"
             p2="Web Developer"
             />

        </div>
    </div>
    </div>
</>
  )
}

export default What_they_Said_blog