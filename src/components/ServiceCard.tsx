import Image from "next/image";



interface ServiceCardProps {
  img: string;
  title: string;
  text: string;
}

export function ServiceCard(data: ServiceCardProps) {
  return (
    <div className="p-8 bg-black-600 min-h-[30vh]  border-solid border-[0.063rem] rounded-[36px] border-green-500  hover:bg-green-500 transition duration-300  hover:text-black-600 group">
      <Image
        className="mb-[1.875rem] w-6 lg:w-8"
        src={data.img}
        alt="Icon-1"
      />
      <h1 className="text-md font-bold leading-[130%] mb-[1.875rem] ">{data.title}</h1>
      <p className="text-sm leading-[150%] max-w-[17rem]">{data.text}</p>
    </div>

  )

}