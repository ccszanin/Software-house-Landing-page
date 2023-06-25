import Image from "next/image";



interface ServiceCardProps {
  img: string;
  title: string;
  text: string;
}

export function ServiceCard(data:ServiceCardProps ) {
  return(
    <div className="pt-14 pb-20 pl-16 pr-1 bg-black-600  border-solid border-[0.063rem] rounded-[36px] border-green-500  hover:bg-green-500 py-2  transition duration-300  hover:text-black-600 group">
     
     <Image
              className="mb-[1.875rem]"
              src={data.img}
              alt="Icon-1"
            />
      <h1 className="text-3xl font-bold leading-[130%] mb-[1.875rem] ">{data.title}</h1>
      <p className="text-xl leading-[150%] max-w-[17rem]">{data.text}</p>
    </div>

  )

}