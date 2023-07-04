import React from "react";
import Image from "next/image";
import ImgSec2 from "../assets/img-bg.svg";

export function About() {
  return(
    <>
  <section
          id="section-2"
          className="h-full flex   flex-col-reverse  md:flex-row justify-between items-center mx-auto pt-24"
        >
          <Image className="md:ml-[-2rem] md:w-[100%] md:h-[43.938rem] h-[21.875rem] w-[28.75rem]" src={ImgSec2} alt="Image" />
          <div className="md:max-w-[36%] ">
            <h1 className="font-extrabold uppercase text-[1.563rem] md:text-[2.813rem] leading-[130%] mb-[1.875rem]  md:mb-10 ">
              Sobre Nós
            </h1>
            <p className="font-normal leading-[150%] md:text-xl  text-xs mb-[1.875rem]  md:mb-10">
              Buscamos a solução mais eficiente para o seu projeto, ajudamos
              empresas a iniciar o seu negócio, ou revolucionar ele através de
              sites e sistemas personalizados e de altíssima qualidade. Não
              negociamos a estética e a elegância e esse é o {" "}
              <span className="md:whitespace-nowrap">
                {" "}
                nosso principal diferencial.
              </span>
            </p>
            <strong className="leading-[150%]  md:text-xl text-xs ">
              Acreditamos no equilíbrio entre forma,{" "}
              <span className="md:whitespace-nowrap"> função e tecnologia.</span>
            </strong>
          </div>
        </section>
            </>
  );
};