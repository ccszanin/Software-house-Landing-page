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
import { HeaderMolie } from "@/components/HeaderMobile";


export default function Home() {
  return (
    <body className="overflow-x-hidden">
     
      <Header />
      <HeaderMolie />
      
      <main className=" md:max-w-screen-2xl md:px-20 my-0 mx-auto max-w-screen-sm  ">
      {/* <Section /> 
       <About />  */}
        {/* <Solutions /> */}
        {/* <Tools /> */}
        {/* <Portfolio /> 
        <Depositions1 /> */}
        <Contact />
        {/* <Footer />      */}
      </main>
     
    </body>
  );
}
