import React from "react";
import Image from "next/image";
import ZionLogo from "../assets/logoDesktop.svg";


export function Header() {
  return(
    <header className="w-screen max-w-screen-2xl px-20  py-14  hidden md:flex gap-16  justify-between absolute top-0 z-10 left-1/2 transform -translate-x-1/2">
    <Image src={ZionLogo} alt="Logo" />
    <nav className="flex justify-between  flex-1 ">
      <a
        href="./"
        className="text-base  text-white-500 leading-[130%] px-[1.25rem] uppercase flex items-center whitespace-nowrap  hover:bg-purple-500 py-2  transition duration-300 "
      >
        Home
      </a>
      <a
        href="./"
        className="text-base leading-[130%]  px-[1.25rem] uppercase flex items-center whitespace-nowrap  hover:bg-purple-500 py-2  transition duration-300"
      >
        Sobre Nós
      </a>
      <a
        href="./"
        className="text-base leading-[130%] px-[1.25rem] uppercase flex items-center whitespace-nowrap   hover:bg-purple-500 py-2  transition duration-300"
      >
        Soluções
      </a>
      <a
        href="./"
        className="text-base leading-[130%] px-[1.25rem] uppercase flex items-center whitespace-nowrap   hover:bg-purple-500 py-2  transition duration-300"
      >
        Ferramentas
      </a>
      <a
        href="./"
        className="text-base leading-[130%] px-[1.25rem] uppercase flex items-center whitespace-nowrap   hover:bg-purple-500 py-2  transition duration-300"
      >
        Portfólio
      </a>
      <a
        href="./"
        className="text-base leading-[130%] px-[1.25rem] uppercase flex items-center whitespace-nowrap   hover:bg-purple-500 py-2  transition duration-300"
      >
        Depoimentos
      </a>
      <a
        href="./"
        className="text-base leading-[130%] px-[1.25rem]  uppercase flex text-center items-center whitespace-nowrap   hover:bg-purple-500 py-2  transition duration-300 "
      >
        Contato
      </a>
    </nav>
  </header>
  
  )
}
