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


export default function Home() {
  return (
    <body className="">
     
      <Header />
      <main className=" w-full max-w-screen-2xl px-20  flex flex-col   justify-center items-center">
        <Section />
        <About />
        <Solutions />
        <Tools />
        <Portfolio />
        <Depositions1 />
        <Contact />
        <Footer />
      </main>
     
    </body>
  );
}
