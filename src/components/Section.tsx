import React from "react";
import Image from "next/image";
import Arrow from "../assets/arrow.svg";
import Whats from "../assets/buttonwhats.svg";

export function Section() {
  return (
    <>
      <section
        id="section-1"
        className="  flex flex-col  lg:justify-center pt-[3.125rem] lg:items-center lg:h-screen items-center md:items-center  "
      >
        <div className="max-w-[306px]  lg:max-w-full md:max-w-[80%] md:flex md:text-center ">
        <h1 className=" text-[2.188rem] lg:text-[4.25rem] md:text-5xl md:leading-[150%]  lg:leading-[150%] leading-[150%] uppercase lg:text-left  ">
          <strong className="font-extrabold ">Acelere o seu negócio</strong>{" "}
          com{" "}
          <span className="lg:whitespace-nowrap ">
            um e-commerce profissional
          </span>
        </h1>
        </div>
        < div className="flex items-center lg:justify-center flex-col  bottom-2 pt-16 position lg:absolute">
        <p className="lg:text-xl lg:leading-[150%] md:text-base md:leading-[150%] text-[0.625rem] leading-[150%] flex items-center justify-center md:items-center md:justify-center lg:items-center lg:justify-center">
          Maximize o Potencial do seu Negócio Online
        </p>
        <a href="./" className="Arrow">
          <Image
            className=" lg:h-3 lg:w-14  lg:m-[2.375rem] md:h-[10px] md:w-8 h-2 w-6 m-4 hover:scale-110 transition duration-300"
            src={Arrow}
            alt="Arrow"
          />
        </a>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=1299999999999"
        target="_blank"
        className=""
      >
        <Image
          className="lg:h-auto  md:h-20 md:w-20  h-11 w-11 bottom-8 right-5 fixed lg:fixed md:fixed  lg:bottom-[7rem] md:bottom-20  lg:right-[6rem] md:right-10 z-[2] hover:scale-110 transition duration-300"
          src={Whats}
          alt="buttom-whatsApp"
        />
      </a>
      </section>

      

    </>
  );
};