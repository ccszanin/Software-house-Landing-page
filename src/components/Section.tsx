import React from "react";
import Image from "next/image";
import Arrow from "../assets/arrow.svg";
import Whats from "../assets/buttonwhats.svg";

export function Section() {
  return (
    <>
      <section
        id="section-1"
        className="  flex flex-col md:justify-center pt-[3.125rem] md:items-center md:h-screen items-center "
      >
        <div className="max-w-[306px]  md:max-w-full ">
        <h1 className=" text-[2.188rem] md:text-[4.25rem] md:leading-[150%] leading-[150%] uppercase md:text-left  ">
          <strong className="font-extrabold f">Acelere o seu negócio</strong>{" "}
          com{" "}
          <span className="md:whitespace-nowrap ">
            um e-commerce profissional
          </span>
        </h1>
        </div>
        < div className="flex items-center md:justify-center flex-col  bottom-2 pt-16 position md:absolute">
        <p className="md:text-xl md:leading-[150%] text-[0.625rem] leading-[150%] flex items-center justify-center md:items-center md:justify-center">
          Maximize o Potencial do seu Negócio Online
        </p>
        <a href="./" className="Arrow">
          <Image
            className=" md:h-3 md:w-14 h-2 w-6 md:m-[2.375rem]  m-4 hover:scale-110 transition duration-300"
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
          className="h-[4.25] md:fixed hidden bottom-[7rem]  right-[6rem] z-[2] hover:scale-110 transition duration-300"
          src={Whats}
          alt="buttom-whatsApp"
        />
      </a>
      </section>

      

    </>
  );
};