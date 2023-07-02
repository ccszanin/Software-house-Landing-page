import Image from "next/image";



interface ServiceCardProps {
  img1: string;
  title: string;
  text: string;
}

export function ServiceCard(data: ServiceCardProps) {
  return (
    <>
   <div className="p-10 w-[367.23px] h-[409.10px] bg-black-600 min-h-[30vh]  border-solid border-[0.063rem] rounded-[36px] border-green-500  hover:bg-green-500 transition duration-300  hover:text-black-600  ">
    
    
     <Image
        className="mb-6 "
        src={data.img1}
        alt="Icon-1"
      />
    
  
       
      <h1 className="text-3xl font-bold leading-[130%] mb-6 ">{data.title}</h1>
      <p className="text-xl leading-[150%] max-w-[17rem]">{data.text}</p>
    </div>
    </>
  )

}