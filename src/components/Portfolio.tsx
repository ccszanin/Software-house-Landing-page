import React from "react";
import Image from "next/image";
import Cases from "../assets/cases.png";

export function Portfolio() {
  return(
<>
<section id="section-5" className="h-full  mx-auto md:mt-[8rem] mt-[8.25rem]">
          <h1 className="font-extrabold uppercase md:text-[2.813rem]  text-[1.563rem] leading-[130%]  md:pb-[8rem] pb-[3.875rem] flex md:justify-normal justify-center ">
            Portfólio
          </h1>

          <div className="flex flex-col md:flex-row mx-auto  items-center">
            <div className=" mx-auto flex-1 ">
              <h1 className=" flex font-bold uppercase  md:text-[2.813rem] md:justify-normal justify-center  text-xl  items-center leading-[130%]  md:mb-10  mb-[1.375rem]">
              cases
               de sucesso
              </h1>
              <p className="  font-normal leading-[150%] md:text-[1.563rem] text-xs  md:mb-10 md:max-w-[27rem]  md:text-start md:m-0     flex  mx-auto text-center  items-center max-w-[90%]">
                Desenvolvemos projetos intuitivos e impactantes que elevam sua
                presença online. Transformamos sua visão em realidade com
                designs modernos e funcionais.
              </p>
            </div>
            <Image className=" md:relative   md:mr-[-3rem] md:w-[70%] md:h-[27.5rem] md:mt-[-50px] h-[12rem] w-[24rem] mt-[4.813rem] " src={Cases} alt="Image" /> 
          </div>
        </section>
</>
  )}