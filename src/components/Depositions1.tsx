import React from "react";
import Image from "next/image";
import { Depositions } from "@/components/Depositions";
import Perfil from "../assets/perfil.svg";
import Star from "../assets/star.svg";

export function Depositions1 () {
  return(
    <>
<section
          id="section-6"
          className="h-full w-full flex flex-col justify-center pb-60 "
        >
          <h1 className="font-extrabold uppercase text-[2.813rem]  leading-[130%] mt-[12.5rem] mb-[12.5rem]">
            Depoimentos
          </h1>
          <div className=" grid grid-cols-3 grid-rows-1 gap-[4rem] ">
            <Depositions
              img1={Perfil}
              title="Danilo"
              text1="Cliente"
              img2={Star}
              text2="Super satisfeito com o trabalho de branding da Zion! A equipe conseguiu captar detalhes importantes da mensagem que queríamos entregar e apresentaram um resultado final assertivo, com criatividade e bom gosto! "
            />
            <Depositions
              img1={Perfil}
              title="Carlos"
              text1="Cliente"
              img2={Star}
              text2="O trabalho da Zion foi fantástico, pegaram nossa ideia de uma despretensiosa landing page e nos entregaram um belo material, muito além do que esperávamos!"
            />
            <Depositions
              img1={Perfil}
              title="DM Assessoria"
              text1="Cliente"
              img2={Star}
              text2="Super obrigado pelo trabalho que vocês fizeram com a minha empresa.
O site eu amei, e vocês são incríveis. Obrigado pela paciência e pelo atendimento. Em meu nome, e no nome da DM Assessoria.     
Sucesso!"
            />
          </div>
        </section>
        </>
  )
}