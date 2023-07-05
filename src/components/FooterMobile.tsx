import React from "react";
import Image from "next/image";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Linkedin from "../assets/linkedin.svg";
import Telefone from "../assets/telefone.svg";
import Email from "../assets/email.svg";


export function FooterMobile() {
  return(
    <footer className=" h-full flex-col  md:hidden flex  bg-pink-500 mt-[2.5rem]">
      <div className=" ml-[2rem] mt-[2rem]">
      
        <span className=" text-white text-xl font-medium uppercase  leading-[130%]">
          entre em{" "}
        </span>
        <span className="text-white text-xl font-black uppercase leading-[130%]">
          contato
        </span>
        <br />
        <span className="text-white text-xl font-medium uppercase  leading-[130%]">
          {" "}
          com a gente
        </span>

        <div className=" flex flex-col mt-[3.563rem]">
          <Image
            width={16}
            height={16}
            className=""
            src={Email}
            alt="Email"
          />
          <a href="mailto:zion@contato.com" className="cursor-pointer">
            <p className="text-[0.813rem] font-bold mt-[0.9rem] mb-[0.2rem]">Nosso E-mail</p>
            <p className="text-white text-[0.813rem] font-light leading-6">
              zion@contato.com
            </p>
          </a>
        </div>
        <div className="flex  flex-col  mt-[2rem] ">
          <Image
            width={16}
            height={16}
            className=""
            src={Telefone}
            alt="Telefone"
          />
          <a href="#" className="cursor-pointer">
            <p className=" text-[0.813rem] font-bold mt-[0.9rem] mb-[0.2rem] ">Ligue pra gente</p>
            <p className="text-white text-[0.813rem] font-light leading-6">
              (00) 99999-9999
            </p>
          </a>
        </div>
        
         <div className="flex flex-row gap-5 mt-[2.5rem] mb-[2.5rem]">
          <Image
            width={16}
            height={16}
            className=""
            src={Instagram}
            alt="Instagram"
          />
          <Image
            width={8}
            height={16}
            className=""
            src={Facebook}
            alt="Facebook"
          />
          <Image
            width={16}
            height={16}
            className=""
            src={Linkedin}
            alt="Linkedin"
          />
          </div>

    </div>
    <div className=" flex flex-row gap-20 mb-[2.5rem] ml-[2rem]">
        <p className="text-[0.813rem] font-normal leading-3 ">
          ©2023 Zion
        </p>
        <p className="text-[0.813rem] font-normal leading-3">
          Todos os direitos reservados
        </p>

        </div>
  </footer>
 
  )}