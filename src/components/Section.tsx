import React from "react";
import Image from "next/image";
import Arrow from "../assets/arrow.svg";
import Whats from "../assets/buttonwhats.svg";

export function Section() {
  return (
    <>
      <section
        id="section-1"
        className=" h-screen flex items-center"
      >
        <h1 className="text-xl sm:text-3xl md:text-[4.25rem] leading-[150%] uppercase md:text-left text-center">
          <strong className="font-extrabold">Acelere o seu negócio</strong>{" "}
          com{" "}
          <span className="whitespace-nowrap">
            um e-commerce profissional
          </span>
        </h1>
      </section>

      < div className="flex items-center justify-center flex-col absolute bottom-2">
        <p className="text-xl leading-[150%] flex items-center justify-center ">
          Maximize o Potencial do seu Negócio Online
        </p>
        <a href="./" className="Arrow">
          <Image
            className=" h-3 w-14 m-[2.375rem] hover:scale-110 transition duration-300"
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
          className="h-[4.25] fixed bottom-[7rem]  right-[6rem] z-[2] hover:scale-110 transition duration-300"
          src={Whats}
          alt="buttom-whatsApp"
        />
      </a>

    </>
  );
};