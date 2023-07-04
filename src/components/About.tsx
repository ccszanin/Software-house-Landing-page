import React from "react";
import Image from "next/image";
import ImgSec2 from "../assets/img-bg.svg";

export function About() {
  return(
    <>
  <section
          id="section-2"
          className="h-full flex flex-col md:flex-row justify-between items-center mx-auto pt-24"
        >
          <Image className="ml-[-2rem] w-[100%]" src={ImgSec2} alt="Image" />
          <div className="max-w-[40%]">
            <h1 className="font-extrabold uppercase text-[2.813rem] leading-[130%] mb-10 ">
              Sobre Nós
            </h1>
            <p className="font-normal leading-[150%] text-xl md:text-lg mb-10">
              Buscamos a solução mais eficiente para o seu projeto, ajudamos
              empresas a iniciar o seu negócio, ou revolucionar ele através de
              sites e sistemas personalizados e de altíssima qualidade. Não
              negociamos a estética e a elegância e esse é o
              <span className="whitespace-nowrap">
                {" "}
                nosso principal diferencial.
              </span>
            </p>
            <strong className="leading-[150%]  text-xl">
              Acreditamos no equilíbrio entre forma,<br></br>
              <span className="whitespace-nowrap"> função e tecnologia.</span>
            </strong>
          </div>
        </section>
            </>
  );
};