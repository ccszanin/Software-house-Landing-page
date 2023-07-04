import React from "react";
import Image from "next/image";
import Cases from "../assets/cases.png";

export function Portfolio() {
  return(
<>
<section id="section-5" className="h-full  mx-auto ">
          <h1 className="font-extrabold uppercase text-[2.813rem] leading-[130%] pt-[8rem] pb-[8rem]  flex items-center jus">
            Portfólio
          </h1>

          <div className="flex flex-col md:flex-row mx-auto">
            <div className=" mx-auto flex-1 ">
              <h1 className="font-bold uppercase  text-[2.813rem] leading-[130%]  mb-10">
                cases <br></br>de sucesso
              </h1>
              <p className="font-normal leading-[150%] text-[1.563rem] mb-10 max-w-[27rem]">
                Desenvolvemos projetos intuitivos e impactantes que elevam sua
                presença online. Transformamos sua visão em realidade com
                designs modernos e funcionais.
              </p>
            </div>
            <Image className=" relative mr-[-3rem] w-[70%] mt-[-50px]" src={Cases} alt="Image" />
          </div>
        </section>
</>
  )}