import React from "react";
import Image from "next/image";
import Vtex from "../assets/vtex.svg";
import Shopify from "../assets/shopify.svg";
import Bling from "../assets/bling.svg";
import MercadoPago from "../assets/mercadopago.svg";

export function Tools() {
  return(
<>

<section
          id="section-4"
          className="md:h-screen w-full mx-auto "
        >
          <div className="flex h-full flex-col items-center justify-center">
            <h1 className="font-extrabold uppercase md:text-[2.813rem] text-[1.563rem] leading-[130%] md:mt-10 md:pb-16 mb-[2.625rem] mt-[8.75rem] items-center justify-center">
              Ferramentas
            </h1>
            <p className="md:text-xl text-xs max-w-[49rem] md:pb-20  pb-[2.25rem] text-center ">
              Utilizamos e indicamos as melhores ferramentas do mercado para
              potencializar o seu negócio e garantir resultados operacionais.
              Você não precisará pesquisar inúmeras ferramentas, cuidamos disso
              pra você!
            </p>

            <div className=" flex flex-row md:gap-32 gap-5 pt-items-center justify-center">
              <Image className="w-[3.5rem] h-[1.563rem] md:w-[10.25rem] md:h-[3.813rem]" src={Vtex} alt="Image" />
              <Image className="w-[4.5rem] h-[1.563rem] md:w-[13.438rem] md:h-[3.813rem]" src={Shopify} alt="Image" />
              <Image className="w-[3.5rem] h-[1.563rem] md:w-[10rem] md:h-[3.813rem]" src={Bling} alt="Image" />
              <Image className="w-[5.5rem] h-[1.563rem] md:w-[14.688rem] md:h-[3.813rem]" src={MercadoPago} alt="Image" />
            </div>
          </div>
        </section>
</>



  )}