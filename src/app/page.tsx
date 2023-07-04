import Image from "next/image";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { About } from "@/components/About";
import { Solutions } from "@/components/ Solutions";
import { Tools } from "@/components/Tools";
import { Portfolio } from "@/components/Portfolio";
import { Depositions1 } from "@/components/Depositions1";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { HeaderMolie } from "@/components/HeaderMobile";


export default function Home() {
  return (
    <body className="">
     
      <Header />
      <HeaderMolie />
      <main className="w-screen max-w-[92rem] my-0 mx-auto md:px-0 px-6">
        {/* <Section />
        <About />
        <Solutions />
        <Tools />
        <Portfolio />
        <Depositions1 />
        <Contact />
        <Footer /> */}
      </main>
     
    </body>
  );
}
