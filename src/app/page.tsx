import Image from "next/image";
import ZionLogo from "../assets/logo.svg";
import Whats from "../assets/buttonwhats.svg";
import Arrow from "../assets/arrow.svg";
import ImgSec2 from "../assets/img-bg.svg";
import { ServiceCard } from "@/components/ServiceCard";
import Service from "../assets/website.svg";
import LandinPage from "../assets/landingpage.svg";
import Ecommerce from "../assets/ecommerce.svg";
import App from "../assets/app.svg";
import Manutencao from "../assets/manutencao.svg";
import Integracao from "../assets/integracao.svg";
import Vtex from "../assets/vtex.svg";
import Shopify from "../assets/shopify.svg"
import Bling from "../assets/bling.svg";
import MercadoPago from "../assets/mercadopago.svg";
import Cases from"../assets/cases.svg";

export default function Home() {
  return (
    <body className="">
      <header className="w-screen max-w-screen-2xl px-12  pt-20 pb-20 flex items-center justify-between absolute top-0 z-10 left-1/2 transform -translate-x-1/2">
        <Image  src={ZionLogo} alt="Logo" />
        <nav className=" pl-20 flex start justify-center gap-5">
          <a
            href="./"
            className="text-xl  text-white-500 leading-[130%] px-[1.25rem] uppercase flex items-center whitespace-nowrap  hover:bg-purple-500 py-2  transition duration-300 "
          >
            Home
          </a>
          <a
            href="./"
            className="text-xl leading-[130%]  px-[1.25rem] uppercase flex items-center whitespace-nowrap  hover:bg-purple-500 py-2  transition duration-300"
          >
            Sobre Nós
          </a>
          <a
            href="./"
            className="text-xl leading-[130%] px-[1.25rem] uppercase flex items-center whitespace-nowrap   hover:bg-purple-500 py-2  transition duration-300"
          >
            Soluções
          </a>
          <a
            href="./"
            className="text-xl leading-[130%] px-[1.25rem] uppercase flex items-center whitespace-nowrap   hover:bg-purple-500 py-2  transition duration-300"
          >
            Ferramentas
          </a>
          <a
            href="./"
            className="text-xl leading-[130%] px-[1.25rem] uppercase flex items-center whitespace-nowrap   hover:bg-purple-500 py-2  transition duration-300"
          >
            Portfólio
          </a>
          <a
            href="./"
            className="text-xl leading-[130%] px-[1.25rem] uppercase flex items-center whitespace-nowrap   hover:bg-purple-500 py-2  transition duration-300"
          >
            Depoimentos
          </a>
          <a
            href="./"
            className="text-xl leading-[130%] px-[1.25rem]  uppercase flex text-center items-center whitespace-nowrap   hover:bg-purple-500 py-2  transition duration-300 "
          >
            Contato
          </a>
        </nav>
      </header>
      <main className=" w-full max-w-screen-2xl px-12  flex flex-col justify-center items-center">
        <section
          id="section-1"
          className=" h-screen relative  flex items-center"
        > 
          <h1 className="text-[5.625rem]  max-w-[92rem] leading-[150%] uppercase">
            <strong className="font-extrabold">Acelere o seu negócio</strong> com {" "}
            <span className="whitespace-nowrap">um e-commerce profissional</span>
          </h1>
        </section>
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
        <div className="flex items-center justify-center flex-col absolute bottom-2">
          <p className="text-[1.563rem] leading-[150%] flex items-center justify-center ">
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
        <section id="section-2" className="h-screen  flex justify-between items-center mx-auto ">
        <Image
              className="ml-[-6.5rem]"
              src={ImgSec2}
              alt="Image"
            />
          <div className="">
            <h1 className="font-extrabold uppercase text-6xl leading-[130%] mb-10 ">Sobre Nós</h1>
            <p className="font-normal leading-[150%] text-[1.563rem] mb-10">
              Buscamos a solução mais eficiente para o seu projeto, ajudamos
              empresas a iniciar o seu negócio, ou revolucionar ele através de
              sites e sistemas personalizados e de altíssima qualidade. Não
              negociamos a estética e a elegância e esse é o 
              <span className="whitespace-nowrap"> nosso principal diferencial.</span>
             
   
            </p>
            <strong className="leading-[150%]  text-[1.563rem]">
              Acreditamos no equilíbrio entre forma, 
              <span className="whitespace-nowrap"> função e tecnologia.</span>
             
            </strong>
          </div>
        </section>
    <section id="section-3" className="w-full max-w-screen-2xl  flex flex-col justify-center">
    <h1 className="font-extrabold uppercase text-6xl leading-[130%]  pt-20  ">Soluções</h1>
    <div className="w-full grid grid-cols-3 grid-rows-2 gap-16 pb-[7.5rem] pt-[7.5rem]">
    <ServiceCard img={Service} title="Website"text="Criação, codificação e programação de sites e seus respectivos elementos e linguagens." /> 
    <ServiceCard img={LandinPage} title="Landing Page" text="Uma página que conta com todos os elementos voltados à conversão, do visitante ao Lead ou da oportunidade ao cliente. " />
    <ServiceCard img={Ecommerce} title="E-commerce" text="Desde a escolha do produto pelo cliente, até a finalização do pedido, com o pagamento e integração com a transportadora." />
    <ServiceCard img={App} title="Aplicativo" text="Software desenvolvido para ser instalado em um dispositivo eletrônico móvel, como um telefone celular, smartphone, smart tv e tablets." />
    <ServiceCard img={Manutencao} title="Manutenção" text="Precisa alterar ou atualizar o seu site? Conte com a nossa manutenção. " />
    <ServiceCard img={Integracao} title="Integração" text="Integramos com os principais CRMs, ERPs, sistemas e plataformas de pagamentos digitais, para automatizar seus processos e economizar tempo no fluxo de trabalho. " />
    </div>
   </section>

   
      <section id="section-4" className="h-screen  flex justify-between items-center mx-auto">
     <div className="flex flex-col items-center">
      <h1 className="font-extrabold uppercase text-6xl leading-[130%] pt-10 pb-16 items-center justify-center">Ferramentas</h1>
        <p className="text-[1.563rem] max-w-[58rem] pb-20 text-center ">Utilizamos e indicamos as melhores ferramentas do mercado para potencializar o seu negócio e garantir resultados operacionais. Você não precisará pesquisar inúmeras ferramentas, cuidamos disso pra você!</p>
       
      <div className="w-full flex gap-32 pt-items-center justify-center">
      <Image
              className=""
              src={ Vtex}
              alt="Image"
            />
             <Image
              className=""
              src={ Shopify}
              alt="Image"
            />
             <Image
              className=""
              src={ Bling}
              alt="Image"
            />
             <Image
              className=""
              src={ MercadoPago}
              alt="Image"
            />
      </div>
      </div>
      </section>
      <section id="section-5" className="h-screen justify-between items-center mx-auto bg-pink-300">
      <h1 className="font-extrabold uppercase text-6xl leading-[130%] mb-10 ">Portfólio</h1>
      
        <div className="h-screen flex  mx-auto">
        
          <div className="h-screen  mx-auto w-1/2">
            <h1 className="font-extrabold uppercase text-6xl leading-[130%] mb-10  ">cases de sucesso</h1>
            <p className="font-normal leading-[150%] text-[1.563rem] mb-10">
            Desenvolvemos projetos intuitivos e impactantes que elevam sua presença online. Transformamos sua visão em realidade com designs modernos e funcionais.
             
   
            </p>
          </div>
          <Image
              className="w-1/2 mr-[-12rem]"
              src={Cases}
              alt="Image"
            />
          </div>
        </section>
      </main>
    </body>
  );
}
