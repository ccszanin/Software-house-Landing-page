import Image from 'next/image'
import ZionLogo from "../assets/logo.svg"

export default function Home() {
  return (
   <main>
   {/*Header*/}
   <div className='max-w-screen-[97.5rem] mx-auto-flex px-[11.25rem] pt-20 pb-20 flex items-center justify-between'>
   <Image src={ZionLogo} alt="Logo" />  
   <nav className='flex items-center justify-center gap-5'>
   <a 
    href="/" 
    className="text-xl px-[1.875rem] uppercase flex items-center whitespace-nowrap"
   >
    Home
   </a>
   <a 
    href="/" 
    className="text-xl px-[1.875rem] uppercase flex items-center whitespace-nowrap"
   >
    Sobre Nós
    </a>
   <a 
    href="/" 
    className="text-xl px-[1.875rem] uppercase flex items-center whitespace-nowrap"
   >
    Soluções
    </a>
   <a 
    href="/" 
    className="text-xl px-[1.875rem] uppercase flex items-center whitespace-nowrap"
   >
    Ferramentas
    </a>
   <a 
    href="/" 
    className="text-xl  px-[1.875rem] uppercase flex items-center"
   >
    Portfólio
    </a>
   <a 
    href="/" 
    className="text-xl px-[1.875rem] uppercase flex items-center whitespace-nowrap"
   >
    Depoimentos
    </a>
   <a 
    href="/" 
    className="text-xl  pl-[1.875rem] uppercase flex items-center"
   >
    Contato
    </a>
   </nav>
   </div>


   </main>
  )
}
