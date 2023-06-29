import Image from "next/image";



interface DepositionsProps {
  img1: string;
  img2:string;
  title: string;
  text1: string;
  text2: string;
}

export function Depositions(data:DepositionsProps) {
  return(
    <div className="pt-10 pb-20 pl-10 pr-10 bg-black-600  border-solid border-[0.063rem] rounded-[36px] border-purple-500  hover:bg-purple-500 py-2  transition duration-300">
    
   <div className=" gap-8 mb-[2.5rem] flex">
   <Image
              className=""
              src={data.img1}
              alt="Icon-1"
            />
     <div>
      <p className="text-sm font-bold leading-[130%] pb-1 ">{data.title}</p>
      <p className="text-[0.813rem] leading-[150%]  pb-2">{data.text1}</p>
      <Image
              className=""
              src={data.img2}
              alt="Icon-1"
            />
     </div>
     </div>
     
      <p className="text-[1.063rem] leading-[150%] max-w-[30rem]">{data.text2}</p>
    </div>

  )

}
