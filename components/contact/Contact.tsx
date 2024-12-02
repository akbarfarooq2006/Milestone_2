import React from 'react'
import Link from 'next/link'
import { ArrowRight}from 'lucide-react';


const Contact = () => {
  return (
    
<>
    <div className='bg-primary contact_after z-0 relative '>
      <div className='container grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 gap-4 grid-rows-2 py-12 mt-12'>
          {/* cols rowa 1 */}
          <section className='coold1 flex flex-col gap-y-5'>
                {/* col1 p--1 */}
                <div className='flex flex-col'>
                  <div className='flex flex-col gap-y-5'>
                    <p className='title'>contact</p>
                    <h3 className='text-[2.5rem] text-wht leading-[50px] font-bold font-urbanist '>Have a <span className='text-brown_primary'>Project</span > or want to <span  className='text-brown_primary'>Collaborate</span>?</h3>
                    <p className='ptype leading-7'>
                      <span className='block'>We would love to hear from you.</span>
                      <span className='block'>Drop a message.</span>
                    </p>
                  </div>
                </div>
                  {/* col1 p--2 */}
                <div className='md:p-6 p-5 rounded-xl bg-third_secondary max-w-max flex flex-col gap-y-7 '>
                    <div className='capitalize'>
                      <p className=' leading-7 !font-medium !text-light_black ptype !tracking-normal '>location</p>
                      <p className='ptype leading-7'>sindh, karachi</p>
                    </div>
                    <div className='capitalize'>
                      <p className=' leading-7 !font-medium !text-light_black ptype !normal-case'>Mail at</p>
                      <p className='ptype leading-7 !lowercase !tracking-wide'>akbarfarooq2006@gmail.com</p>
                    </div>
                    <div className='capitalize'>
                      <p className=' leading-7 !font-medium !text-light_black ptype !normal-case'>Folow on</p>
                      <p className='ptype leading-7 flex gap-x-3'>
                        <Link className='text-brown_primary' href={'https://www.facebook.com/profile.php?id=61559873665576'}>Facebook</Link>
                        <span>-</span>
                        <Link className='text-brown_primary' href={'https://www.instagram.com/akbarfarooq2006/'}>Instagram</Link>
                        <span>-</span>
                        <Link className='text-brown_primary' href={'https://www.linkedin.com/in/akbar-farooq-134a07308/'}>Linkedin</Link>
                        
                      </p>
                    </div>
                </div>
          </section>

          {/* cols rows 2 */}
        <section>
          <form action="" className='py-14 px-7 bg-third_secondary rounded-md'>
            <div className='flex  flex-col gap-y-5'>
                {/* heading */}
              <h3 className='font-urbanist text-[22px] font-bold text-wht'>Send a message</h3>
                {/* All input wrapper */}
              <div className='inputWraper'>
                {/* inpu1 */}
                <div className='flex flex-col gap-y-1  '>
                  <label htmlFor="name" className='text-wht text-[14px] font-normal'>Your Name</label>
                  <input type="text" name="name" id="name" required placeholder='John Smith'
                  className='bg-primary  focus:outline-none border-[1px] border-brown_primary/0  focus:border-brown_primary  
                  p-3  text-wht text-[14px] font-normal placeholder:text-[14px] placeholder:text-light_black
                  rounded-md '/>
                  <small className="text-redii text-xs font-normal hidden ">String must contain at least 3 character(s)</small>
                </div>
                {/* input2 email*/}
                <div className='flex flex-col gap-y-1  '>
                  <label htmlFor="email" className='text-wht text-[14px] font-normal'>Your Email</label>
                  <input type="email"  name="email" id="email" required placeholder='email@address.com'
                  className='bg-primary focus:outline-none border-[1px] border-brown_primary/0  focus:border-brown_primary  
                  p-3  text-wht text-[14px] font-normal placeholder:text-[14px] placeholder:text-light_black
                  rounded-md'/>
                  <small className="text-redii text-xs font-normal hidden ">Invalid email</small>
                </div>
                {/* inputs3  subject*/}
                <div className='flex flex-col gap-y-1  '>
                  <label htmlFor="subject" className='text-wht text-[14px] font-normal'>Subject</label>
                  <input type="text" name="subject" id="subject" required placeholder='I need help!'
                  className='bg-primary fill focus:outline-none border-[1px] border-brown_primary/0  focus:border-brown_primary  
                  p-3  text-wht text-[14px] font-normal placeholder:text-[14px] placeholder:text-light_black
                  rounded-md'/>
                  <small className="text-redii text-xs font-normal hidden ">String must contain at least 5 character(s)</small>
                </div>
                {/* input4 description */}
                <div className='flex flex-col gap-y-1  '>
                  <label htmlFor="description" className='text-wht text-[14px] font-normal'>Description</label>
                  <textarea rows={5} name="description" id="description" required placeholder='Type your message' 
                  className='bg-primary fill yaxis focus:outline-none border-[1px] border-brown_primary/0  focus:border-brown_primary  
                  p-3  text-wht text-[14px] font-normal placeholder:text-[14px] placeholder:text-light_black 
                  rounded-md'/>
                  <small className="text-redii text-xs font-normal hidden ">String must contain at least 5 character(s)</small>
                </div>
              </div>

              <button className='flex items-center gap-x-0.5 max-w-max bg-c_green text-wht py-2 px-7 rounded-md'>
                <span>Send message</span>
                <ArrowRight className="w-9 h-5 text-wht" />
              </button>

            </div>
          </form>
        </section>
      </div>


    </div>

</>

  )
}

export default Contact