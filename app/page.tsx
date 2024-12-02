"use client"
import About1 from "@/components/about/About1";
import Front from "@/components/home/Front";
import Servicecounter from "@/components/about/Servicecounter";
import What_they_Said_blog from "@/components/blogs/What_they_Said_blog";
import Image from "next/image";
import Contact from "@/components/contact/Contact";

 

export default function Home() {
  return (

    <>
    {/* front components */}
    <Front/>
    {/* About 1 */}
    <About1/>
    {/* services counter */}
    <Servicecounter/>
    <What_they_Said_blog/>
    {/* contact */}
    <Contact/>
    {/* <div className={`text-4xl h-screen text-wht`}>
      
   </div>
    <div className={`text-4xl h-screen  text-wht`}>
      this is amazing
   </div>
     */}
  
    </>

   );
}
