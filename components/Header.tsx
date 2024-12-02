'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


function Header() {
  const [click, setclick] = useState(true)
  const [scroll, setscroll] = useState(false)
  const path= usePathname()

  useEffect(() => {
    
    const getScroll= () =>{
      if(window.scrollY > 10 ){
          setscroll(true)
        }else{
          setscroll(false)
      }
    }
    window.addEventListener('scroll',getScroll)
    
    return () => {
      window.removeEventListener('scroll',getScroll)
    }
  }, [])
  
  
  
  // button function
function toggle(){
  setclick(!click)
  
}

const items=[
  {
    name:"Home",
    link:"/"
  },
  {
    name:"about",
    link:"/about"
  },
  {
    name:"blogs",
    link:"/blogs"
  },
  {
    name:"contact",
    link:"/contact"
  },
]

  return (

  <>

  <header className=' sticky top-0  z-40  '>
    <div className={`sm:mt-8 mt-5 mb-7 sm:py-4 py-3  relative down bg-primary ${scroll ? "bg-secondary" : ""} `} >
      <div className={`container flex  items-center justify-between `} >
        {/* nav link logo */}
        <Link href={'/'} className='  z-50 flex gap-2 cursor-pointer '>
        <div className='w-10 rounded-md   h-auto overflow-hidden relative' >
          <Image 
          alt='logo my brand'
          src={'/images/logo3.png'}
          style={{ objectFit: "cover" }} 
          fill
          />
        </div>
        <div className="content flex flex-col font-bold leading-5">
          <span className='sm:text-[23px] text-[20px] text-wht font-Urbanist'>Akbar</span>
          <span className='sm:text-[23px] text-[20px] text-brown_primary'>Farooq</span>
        </div>
        </Link>
        {/* Ham burger */}
        <button className='flex relative flex-col gap-2  md:hidden z-50'
       onClick={toggle}
        >
          <span className={`w-[1.7rem] h-[0.12rem] rounded-md inline-block down bg-wht 
            ${click ? "" : "origin-left rotate-45"}
            `}></span>
          <span className={`w-[1.7rem] h-[0.12rem] rounded-md inline-block down bg-wht 
            ${click ? "inline-block" : "opacity-0"}
            `}></span>
          <span className={`w-[1.7rem] h-[0.12rem] rounded-md inline-block down bg-wht 
            ${click ? "" : "origin-left -rotate-45"}
            `}></span>
        </button>
        {/* nav naigation */}
        <div className='md:flex hidden '>
          <ul className='md:flex text-wht capitalize text-xl gap-x-12 '>
            {
            items.map((e,idx)=>{
              const active=e.link === path
                return(
                  <li key={idx} className={`hover:text-brown_primary down 
                    ${active ? "text-brown_primary" : ""}
                    `}><Link href={`${e.link}`}>{e.name}</Link></li>
                )
              })
              }
          </ul>
        </div>
        {/* slider navigaton */}
        <div className={`w-full block md:hidden  fixed -translate-x-full down inset-0 bg-secondary h-full z-10 
          ${click ? "" : "translate-x-0"}
          `}>
        <ul className='flex flex-col h-full items-center  gap-y-9 mt-32 text-wht capitalize text-xl  '>
            {
            items.map((e)=>{
              const active=e.link === path
                return(
                  <li className={`hover:text-brown_primary down 
                    ${active ? "text-brown_primary" : ""}
                    `}><Link href={`${e.link}`}>{e.name}</Link></li>
                )
              })
              }
          </ul>
        </div>


      </div>
    </div>
  </header>

  </>





  )
}

export default Header