import React from "react";
import Link from "next/link";
import Image from "next/image";

const About1 = () => {
  return (
    <>
        {/* section--1 */}
      <section className="sec1   bg-secondary  ">
        <div className="container relative  py-12 lg:py-16">
          {/** side1 all texr */}
          <div className="flex  relative flex-col">
            <p className="title">about me</p>
            <h2 className="font-urbanist md:text-[25px] text-[23px]  leading-10 text-wht font-semibold max-w-[40ch]">
              This is Akbar Farooq is a web developing learner and learn from
              Youtube.I want to help others by providing free knowledge on Web
              Development and Schools/University important topics.
            </h2>
            <div className="text-[17px] text-wht flex flex-col mt-9">
              <p className="md:leading-10 leading-7 font-light tracking-wider">
                Follow me on : Facebook, Instagram, Linkedin
              </p>
              <p className="leading-10 font-light tracking-wider">
                Visit on my: Linkedin
              </p>
              <p className="leading-10 font-light tracking-wider">
                Join : Discord
              </p>
            </div>
          </div>
          {/* profile picture in about */}
          <div className="absolute right-0 -bottom-36 md:inline-block hidden">
            <div
              className="relative 
            before:content-[url('/images/arrow1.png')]  before:absolute before:right-0 
            before:bottom-[53%] before:scale-[0.46] before:opacity-100
            "
            >
              <Image
                src={"/images/about_profile.jpg"}
                alt="about_profile"
                width={250}
                height={400}
                className="rounded-[3.3rem]"
              />
            </div>
          </div>
        </div>
      </section>

                {/* section--2 */}
      <section className="sec2  py-7 md:py-[140px] relative
      after:content-[''] after:-z-10 after:absolute after:bg-second_secondary after:inset-0
      ">
        {/* sec2 part-1 */}
        <div className="container py-12 px-1.5 grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1 gap-5 ">
          {/* siide1 */}
          <div className="side1 flex-col flex ">
            <p className=" title">SERVICES</p>
            <h2 className="text-4xl mb-5 mt-1  tracking-wide text-wht font-bold font-urbanist">
              What I Do
            </h2>
            <p className="text-[17px] leading-8 text-wht tracking-wider font-light ">
              We offer comprehensive digital services including web design,
              UI/UX design, app development, and web development. Our expertise
              spans visually captivating websites, intuitive user interfaces,
              feature-rich mobile apps, and tailored web solutions.
            </p>
          </div>
          {/* side 2 */}
          <div className="side2 h-full w-full ">
            <ul className="h-full w-full flex flex-col  gap-y-8 md:items-end items-start md:mt-0 mt-2  text-wht ">
              <li className="text-3xl font-medium uppercase leading-9 ">Web design</li>
              <li className="text-3xl font-medium uppercase leading-9 ">ui/ux design</li>
              <li className="text-3xl font-medium uppercase leading-9 ">app Development</li>
              <li className="text-3xl font-medium uppercase leading-9 ">web development</li>
            </ul>
          </div>
        </div>
        {/* section 2 part-2 */}
        <div className="container py-5 md:py-12">
            <div className="w-full  ">
                <ul className="flex gap-x-9 gap-y-4
                flex-wrap  items-start 
                text-brown_primary uppercase text-xl font-normal ">
                    <li>html</li>
                    <li>css</li>
                    <li>typescript</li>
                    <li>javascript</li>
                    <li>next.js</li>
                    <li>react.js</li>
                    <li>figma</li>
                    <li>git</li>
                </ul>
            </div>
        </div>
      </section>
    </>
  );
};

export default About1;
