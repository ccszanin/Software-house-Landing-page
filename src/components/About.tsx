import React from "react";
import Image from "next/image";
import ImgSec2 from "../assets/img-bg.svg";

export function About() {
  return(
    <>
  <section
          id="section-2"
          className="h-full flex   flex-col-reverse  lg:flex-row justify-between items-center mx-auto mt-24"
        >
          <Image className="lg:ml-[-2rem] lg:w-[100%] lg:h-[43.938rem] h-[21.875rem] w-[28.75rem]" src={ImgSec2} alt="Image" />
          <div className="lg:max-w-[36%] md:max-w-[80%]">
            <h1 className="font-extrabold uppercase text-[1.563rem] lg:text-[2.813rem] md:text-3xl leading-[130%] mb-[1.875rem]  lg:mb-10 ">
              Sobre Nós
            </h1>
            <p className="font-normal leading-[150%] lg:text-xl md:text-base  text-xs mb-[1.875rem]  lg:mb-10">
              Buscamos a solução mais eficiente para o seu projeto, ajudamos
              empresas a iniciar o seu negócio, ou revolucionar ele através de
              sites e sistemas personalizados e de altíssima qualidade. Não
              negociamos a estética e a elegância e esse é o {" "}
              <span className="lg:whitespace-nowrap">
                {" "}
                nosso principal diferencial.
              </span>
            </p>
            <strong className="leading-[150%]  lg:text-xl md:text-base text-xs ">
              Acreditamos no equilíbrio entre forma,{" "}
              <span className="lg:whitespace-nowrap"> função e tecnologia.</span>
            </strong>
          </div>
        </section>
            </>
  );
};