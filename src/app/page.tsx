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
import { HeaderMobile } from "@/components/HeaderMobile";
import { FooterMobile } from "@/components/FooterMobile";


export default function Home() {
  return (
    <>
    <body className="overflow-x-hidden">
     
      <Header />
      <HeaderMobile />
      <main className=" lg:max-w-screen-2xl lg:px-20 my-0 mx-auto  md:max-w-screen-lg md:px-10 px-[1.5rem] ">
          <Section />   
       <About />    
       {/* <Solutions />  */}
         <Tools /> 
         <Portfolio />  
        {/* <Depositions1 /> 
        <Contact />  */}
         <Footer />     
        
      </main>
      {/* <FooterMobile />  */}
    </body>
   
    </>
  );
}
