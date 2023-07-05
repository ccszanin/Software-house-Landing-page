import React from "react";
import Image from "next/image";
import Cases from "../assets/cases.png";

export function Portfolio() {
  return(
<>
<section id="section-5" className="h-full  mx-auto lg:mt-[8rem] mt-[8.25rem]">
          <h1 className="font-extrabold uppercase lg:text-[2.813rem] md:text-3xl  text-[1.563rem] leading-[130%]  lg:pb-[8rem] pb-[3.875rem] flex lg:justify-normal justify-center ">
            Portfólio
          </h1>

          <div className="flex flex-col lg:flex-row mx-auto  items-center">
            <div className=" mx-auto flex-1 ">
              <h1 className=" flex font-bold uppercase  lg:text-[2.813rem] lg:justify-normal  md:text-2xl justify-center  text-xl  items-center leading-[130%]  lg:mb-10  mb-[1.375rem]">
              cases
               de sucesso
              </h1>
              <p className="  font-normal leading-[150%] lg:text-[1.563rem] md:text-base text-xs  lg:mb-10 lg:max-w-[27rem]  lg:text-start lg:m-0  flex  mx-auto text-center  items-center max-w-[90%]">
                Desenvolvemos projetos intuitivos e impactantes que elevam sua
                presença online. Transformamos sua visão em realidade com
                designs modernos e funcionais.
              </p>
            </div>
            <Image className=" lg:relative   lg:mr-[-3rem] lg:w-[70%] lg:h-[27.5rem] lg:mt-[-50px] md:w-auto md:h-auto h-[12rem] w-[24rem] mt-[4.813rem] " src={Cases} alt="Image" /> 
          </div>
        </section>
</>
  )}