import Image from "next/image";
import ZionLogo from "../assets/logo.svg";
import Whats from "../assets/buttonwhats.svg";
import Arrow from "../assets/arrow.svg";

export default function Home() {
  return (
    <body className="flex flex-1 flex-col justify-center">
      {/*Header*/}
      <header className="w-screen mx-auto max-w-[97.5rem] pt-20 pb-20 flex items-center justify-between absolute left-1/2 transform -translate-x-1/2">
        <Image src={ZionLogo} alt="Logo" />
        <nav className=" flex items-center justify-center gap-5">
          <a
            href="/"
            className="text-xl leading-[130%] px-[1.875rem] uppercase flex items-center whitespace-nowrap hover:bg-purple-500"
          >
            Home
          </a>
          <a
            href="/"
            className="text-xl leading-[130%] px-[1.875rem] uppercase flex items-center whitespace-nowrap"
          >
            Sobre Nós
          </a>
          <a
            href="/"
            className="text-xl leading-[130%] px-[1.875rem] uppercase flex items-center whitespace-nowrap"
          >
            Soluções
          </a>
          <a
            href="/"
            className="text-xl leading-[130%] px-[1.875rem] uppercase flex items-center whitespace-nowrap"
          >
            Ferramentas
          </a>
          <a
            href="/"
            className="text-xl leading-[130%] px-[1.875rem] uppercase flex items-center"
          >
            Portfólio
          </a>
          <a
            href="/"
            className="text-xl leading-[130%] px-[1.875rem] uppercase flex items-center whitespace-nowrap"
          >
            Depoimentos
          </a>
          <a
            href="/"
            className="text-xl leading-[130%] pl-[1.875rem] uppercase flex items-center"
          >
            Contato
          </a>
        </nav>
      </header>
      <main className=" flex flex-col justify-center items-center">
        <div className=" h-screen relative max-w-[97.5rem] flex items-center justify-center">
          <h1 className="text-[5.625rem] max-w-[92rem] leading-[150%] uppercase">
            <strong className="font-extrabold ">Acelere o seu negócio</strong>{" "}
            com um e-commerce profissional
          </h1>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=1299999999999"
          target="_blank"
          className=""
        >
          <Image
            className="h-[4.25] fixed bottom-[7rem]  right-[6rem] z-[2]"
            src={Whats}
            alt="buttom-whatsApp"
          />
        </a>
        <div className="flex items-center justify-center flex-col absolute bottom-2">
          <p className="text-[1.563rem] leading-[150%] flex items-center justify-center ">
            Maximize o Potencial do seu Negócio Online
          </p>
          <a href="./" className="Arrow">
            <Image className=" h-3 w-14 m-[2.375rem]" src={Arrow} alt="Arrow" />
          </a>
        </div>
      </main>
    </body>
  );
}
