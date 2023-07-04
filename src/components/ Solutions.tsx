import React from "react";
import Image from "next/image";
import ImgSec2 from "../assets/img-bg.svg";
import { ServiceCard } from "./ServiceCard";
import Service from "../assets/website.svg";
import LandinPage from "../assets/landingpage.svg";
import Ecommerce from "../assets/ecommercewhite.svg";
import App from "../assets/app.svg";
import Manutencao from "../assets/manutencao.svg";
import Integracao from "../assets/integracao.svg";

export function Solutions() {
  return(
<>
<section
          id="section-3"
          className="md:w-full max-w-screen-2xl  flex flex-col justify-center md:pt-40"
        >
          <h1 className="font-extrabold uppercase text-[1.563rem] md:text-[2.813rem] leading-[130%] md:text-left text-center">
            Soluções
          </h1>
          <div className="md:w-full grid  md:grid-cols-3 md:grid-rows-2 grid-cols-6 grid-rows-1 md:gap-[4.938rem] md:pt-[7.5rem] ">
            <ServiceCard
              img1="website"
              title="Website"
              text="Criação, codificação e programação de sites e seus respectivos elementos e linguagens."
            /> 
           <ServiceCard
              img1="landingpage"
              title="Landing Page"
              text="Uma página que conta com todos os elementos voltados à conversão, do visitante ao Lead ou da oportunidade ao cliente. "
            />
            <ServiceCard
              img1="ecommerce"
              title="E-commerce"
              text="Desde a escolha do produto pelo cliente, até a finalização do pedido, com o pagamento e integração com a transportadora."
            />
            <ServiceCard
              img1="app"
              title="Aplicativo"
              text="Software desenvolvido para ser instalado em um dispositivo eletrônico móvel, como um telefone celular, smartphone, smart tv e tablets."
            />
            <ServiceCard
              img1="manutencao"
              title="Manutenção"
              text="Precisa alterar ou atualizar o seu site? Conte com a nossa manutenção. "
            />
            <ServiceCard
              img1="integracao"
              title="Integração"
              text="Integramos com os principais CRMs, ERPs, sistemas e plataformas de pagamentos digitais, para automatizar seus processos e economizar tempo no fluxo de trabalho. "
            />  
          </div>
        </section>

</>

  )}