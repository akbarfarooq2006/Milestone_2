import React from "react"
import Link from "next/link";
import Servicecounter from "@/components/about/Servicecounter";
import About1 from "@/components/about/About1";

const about = () => {
  return (
   <>
    <div className="py-10">
        {/* pic section */}
        <div className="about_gradient w-full  py-16
        ">
            {/* pic content */}
            <div className="container flex flex-col gap-y-3">
                {/* back buttin */}
              <div className="flex w-full  justify-start"><p className="title !text-wht opacity-40 hover:opacity-85 down2 cursor-pointer leading-4 !text-[11px] " >go back</p></div>
                {/* content */}
              <div className="w-full flex flex-col gap-y-2 mb-3">
                <div className="flex mb-1.5 justify-start gap-1">
                    <Link className="title !text-[11px] !font-normal" href={"/"}>home</Link>
                    <p className="title !text-[11px] !font-normal">•</p>
                    <Link className="title !text-[11px] !font-normal" href={"/about"}>about</Link>
                </div>
                <h3 className="mb-1.5 sm:text-5xl text-4xl text-wht font-extrabold tracking-wide font-urbanist">Who is Akbar Farooq?</h3>
              </div>
                {/* dates */}
              <p className="text-[rgb(217,217,217)] text-lg leading-7 tracking-wide">September 04 2024 </p>
            </div>
        </div>

        {/* about 1 components */}
        <About1/>
        {/* about paragraph */}
        <div className="container mt-14 ">
          <p className="text-[17px] leading-7 font-light text-wht w-[80%] m-auto tracking-wider">Welcome to my website! I’m Akbar Farooq, a passionate and dedicated student of Computer Science from Karachi, Pakistan. My journey in the field of technology is driven by curiosity, enthusiasm, and a strong desire to learn and grow as a programmer.</p>
          <br /><br />
          <p className="text-[17px] leading-7 font-light text-wht w-[80%] m-auto tracking-wider">I specialize in front-end and back-end web development, working with modern technologies such as HTML, CSS, JavaScript, TypeScript, and frameworks like Next.js and Tailwind CSS. My interests also extend to exploring the potential of Web3, Metaverse, and Artificial Intelligence.</p>
          <br /><br />
          <p className="text-[17px] leading-7 font-light text-wht w-[80%] m-auto tracking-wider">My goal is to become a proficient programmer and contribute to the tech community by creating innovative solutions and sharing my knowledge. Whether it’s building dynamic websites, crafting visually appealing designs, or experimenting with cutting-edge tools, I aim to stay ahead in this ever-evolving field.</p>
          <br /><br />
          <p className="text-[17px] leading-7 font-light text-wht w-[80%] m-auto tracking-wider">I am actively involved in projects like creating resume builders, interactive portfolios, and more. These projects not only enhance my skills but also showcase my dedication to delivering functional and user-friendly designs.</p>
          <br /><br />
          <p className="text-[17px] leading-7 font-light text-wht w-[80%] m-auto tracking-wider">As a proud learner and believer in constant growth, I value the importance of sharing knowledge and building a supportive community for like-minded individuals.
          Thank you for visiting my website! I hope my journey and work inspire you, and I’m always open to feedback, collaboration, or just a friendly chat. Let’s grow together in this incredible world of technology!</p>
          
        </div>
        {/* service counter components */}
        <Servicecounter/>

        {/* get in touch and contact */}
        <div className="container flex flex-col items-center">
            <p className="text-brown_primary text-xl uppercase font-light tracking-widest">get in touch</p>
            <h2 className="text-center md:w-[70%] sm:w-[80%] w-full text-3xl font-bold font-urbanist text-wht mt-7 mb-10">Yes, that"s all about me. There is no better time to connect with me via socials or filling the contact form.</h2>
            <Link  href={"/contact"}>
               <button className="text-base font-normal bg mb-10 py-5 px-10 text-wht rounded-lg tracking-widest active:scale-95 bg-brown_secondary down hover:bg-c_green_hover" >Let"s Talk</button>
            </Link>
        </div>


    </div>
   </>
  )
}

export default about;