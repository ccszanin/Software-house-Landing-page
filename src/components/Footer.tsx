import React from "react";
import Image from "next/image";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Linkedin from "../assets/linkedin.svg";
import Telefone from "../assets/telefone.svg";
import Email from "../assets/email.svg";


export function Footer() {
  return(
    <footer className="w-full flex h-[450px] mb-24  gap-24 pt-24 ">
    <div className=" w-[300px]  relative ">
      <div className=" absolute bottom-0">
        <p className="text-xl mb-5 font-bold leading-9 ">
          Nas redes sociais
        </p>
        <div className="flex gap-8 mb-12">
          <Image
            width={24}
            height={24}
            className=""
            src={Instagram}
            alt="Instagram"
          />
          <Image
            width={14}
            height={14}
            className=""
            src={Facebook}
            alt="Facebook"
          />
          <Image
            width={24}
            height={24}
            className=""
            src={Linkedin}
            alt="Linkedin"
          />
        </div>
        <button className="mb-12 bg-pink-500 rounded-md px-4 uppercase text-lg py-2">
          Entre em contato
        </button>
        <p className="text-[0.938rem] font-normal leading-3 mb-5">
          ©2023 Zion
        </p>
        <p className="text-[0.938rem] font-normal leading-3">
          Todos os direitos reservados
        </p>
      </div>
    </div>

    <div className="  h-[320px]  flex bg-pink-500 py-9 pl-20 absolute z-1 ml-[18.75rem]">
      <div>
        <span className=" text-white text-xl font-medium uppercase leading-10">
          entre em{" "}
        </span>
        <span className="text-white text-xl font-black uppercase leading-10">
          contato
        </span>
        <br />
        <span className="text-white text-xl font-medium uppercase leading-10">
          {" "}
          com a gente
        </span>

        <div className="flex items-center  gap-5 pt-10 ">
          <Image
            width={24}
            height={24}
            className=""
            src={Telefone}
            alt="Telefone"
          />
          <a href="#" className="cursor-pointer">
            <p className=" text-xl font-bold ">Ligue pra gente</p>
            <p className="text-white text-xl font-light leading-6">
              (00) 99999-9999
            </p>
          </a>
        </div>
        <div className="flex items-center mt-6 gap-5">
          <Image
            width={24}
            height={24}
            className=""
            src={Email}
            alt="Email"
          />
          <a href="mailto:zion@contato.com" className="cursor-pointer">
            <p className="text-xl font-bold">Nosso E-mail</p>
            <p className="text-white text-xl font-light leading-6">
              zion@contato.com
            </p>
          </a>
        </div>
      </div>
    </div>
  </footer>

  )}