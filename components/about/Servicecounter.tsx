import React from "react";

const Servicecounter = () => {
  return (
    <>
      <div className="container">
        <div className="bg-secondary rounded-2xl my-16 md:px-16 md:py-16 py-9 px-6 box_shadow hover:scale-105 down">
          <div className="flex flex-col gap-y-4">
            <p className="title">service counter</p>
            <h2 className="md:text-[2.5rem] text-2xl leading-8 md:leading-[50px] max-w-[35ch] text-wht font-urbanist font-semibold mb-8">
              I have a 4 month of learning experiences and done lots of
              projects, and designing works.
            </h2>
            <div className="flex md:items-center md:flex-row flex-col md:justify-between mt-4 
            justify-center items-start gap-y-6 md:gap-y-0
            uppercase">
                <div>
                    <h3 className="md:text-7xl text-5xl text-wht opacity-10 md:-mb-4 
                    -m-2
                    font-bold">07+</h3>
                    <h3 className="text-lg font-bold text-wht  font-urbanist">projects</h3>
                </div>
                <div className="">
                    <h3 className="md:text-7xl text-5xl text-wht opacity-10 md:-mb-4 
                    -m-2
                    font-bold">02+</h3>
                    <h3 className="text-lg font-bold text-wht  font-urbanist">clients</h3>
                </div>
                <div>
                    <h3 className="md:text-7xl text-5xl text-wht opacity-10 md:-mb-4 
                    -m-2
                    font-bold">01+</h3>
                    <h3 className="text-lg font-bold text-wht  font-urbanist">collabration</h3>
                </div>
               
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicecounter;
