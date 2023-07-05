'use client'
import Image from "next/image";
import ZionLogo from "../assets/logoMobile.svg";
import WhiteZionLogo from "../assets/whiteLogo.svg";
import BurguerMenu from '../assets/burgerIcon.svg'
import Close from '../assets/close.svg'
import { useState } from "react";
import Link from "next/link";

export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex m w-full lg:hidden py-10  sm:px-16 justify-between">
      <Image alt="logo image" src={ZionLogo} width={64} height={20}/>

      <button onClick={() => setIsOpen(!isOpen)}>
        <Image alt="menu options" src={BurguerMenu} />
      </button>

      {
        isOpen && (
          <>
          <div className="absolute top-0 left-0 w-screen h-screen z-0cursor-pointer" onClick={() => setIsOpen(!isOpen)}></div>
          <div className="absolute z-10 top-0 left-0 w-screen bg-purple-500 py-10 px-10 sm:px-16">
            <div className="flex justify-between w-full">
            <Image alt="logo image" src={WhiteZionLogo} width={64}/>

            <button onClick={() => setIsOpen(!isOpen)}>
              <Image alt="menu options" src={Close}/>
            </button>
            </div>
            <div className="w-full flex flex-col justify-center items-center pt-12 gap-4">
              <Link href="#about" className="text-white text-sm leading-normal uppercase font-medium">Contato</Link>
              <Link href="#about" className="text-white text-sm leading-normal uppercase font-medium">Sobre Nós</Link>
              <Link href="#about" className="text-white text-sm leading-normal uppercase font-medium">Soluções</Link>
              <Link href="#about" className="text-white text-sm leading-normal uppercase font-medium">Ferramentas</Link>
              <Link href="#about" className="text-white text-sm leading-normal uppercase font-medium">Portifólio</Link>
              <Link href="#about" className="text-white text-sm leading-normal uppercase font-medium">Depoimentos</Link>
              <Link href="#about" className="text-white text-sm leading-normal uppercase font-medium">Contato</Link>
            </div>
          </div>
          </>
        )
      }
    </div>
  )
}