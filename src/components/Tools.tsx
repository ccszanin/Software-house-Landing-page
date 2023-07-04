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
            <h1 className="font-extrabold uppercase md:text-[2.813rem] text-[1.563rem] leading-[130%] md:pt-10 md:pb-16 items-center justify-center">
              Ferramentas
            </h1>
            <p className="md:text-xl text-xs max-w-[49rem] md:pb-20 text-center ">
              Utilizamos e indicamos as melhores ferramentas do mercado para
              potencializar o seu negócio e garantir resultados operacionais.
              Você não precisará pesquisar inúmeras ferramentas, cuidamos disso
              pra você!
            </p>

            <div className=" flex flex-col md:flex-row gap-32 pt-items-center justify-center">
              <Image className="" src={Vtex} alt="Image" />
              <Image className="" src={Shopify} alt="Image" />
              <Image className="" src={Bling} alt="Image" />
              <Image className="" src={MercadoPago} alt="Image" />
            </div>
          </div>
        </section>
</>



  )}