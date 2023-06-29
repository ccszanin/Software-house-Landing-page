"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type Inputs = {
  name: string
  email: string
  phone:number
  enterprise: string
  checkbox1: boolean
  checkbox2: boolean
}



export function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  console.log(watch("name")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      {/* register your input into the hook by invoking the "register" function */}
      <label className="text-xl font-semibold mb-[1.375rem] w-[31.25rem]">Nome completo</label>
      <input className="text-black-500 text-base px-2 mb-[1.375rem] w-[31.25rem] h-10 border-solid border-[1.5px] rounded-[9px] border-orange-500  focus:outline-orange-500" {...register("name", { required: true })} />
      {errors.name && <span>Campo obrigatório</span>}
       
      {/* include validation with required or other standard HTML validation rules */}
      <label className="text-xl font-semibold mb-[1.375rem] w-[31.25rem]">E-mail</label>
      <input className="text-black-500 text-base px-2 mb-[1.375rem] w-[31.25rem] h-10 border-solid border-[1.5px] rounded-[9px] border-orange-500  focus:outline-orange-500"  {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>Campo obrigatório</span>}
     
      <label className="text-xl font-semibold mb-[1.375rem] w-[31.25rem]">Telefone</label>
      <input className="text-black-500 text-base px-2 mb-[1.375rem] w-[31.25rem] h-10 border-solid border-[1.5px] rounded-[9px] border-orange-500  focus:outline-orange-500" {...register("phone", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.phone && <span>Campo obrigatório</span>}

      <label className="text-xl font-semibold mb-[1.375rem] w-[31.25rem]">Empresa</label>
      <input className="text-black-500 text-base px-2 w-[31.25rem] h-10 border-solid border-[1.5px] rounded-[9px] border-orange-500  focus:outline-orange-500" {...register("enterprise", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.enterprise && <span>Campo obrigatório</span>}
     

     <div className="flex justify-start items-start mt-[1.625rem]">
     <label htmlFor="check-box-1" className="cursor-pointer relative">
     <input className="appearance-none w-[1.148rem] h-[1.148rem] border-2 border-orange-500 " type="checkbox" id="check-box-1" {...register("checkbox1")} />
      <FontAwesomeIcon icon={faCheck}
      className="text-lg  w-[1rem] h-[1rem] text-orange-500 absolute left-0 top-0 text-opacity-0 check-1 transition"
      />
      {/* errors will return when field validation fails  */}
      {errors.checkbox1 && <span>Campo obrigatório</span>}
      </label>
      <p className="text-[1.188rem] ml-[0.938rem]">Aceita receber comunicação da Zion?</p>
      </div>

      <div className="flex justify-start items-start mt-[1.625rem]">
        <label htmlFor="check-box-2" className="cursor-pointer relative">
      <input className="appearance-none w-[1.148rem] h-[1.148rem] border-2 border-orange-500 " type="checkbox" id="check-box-2" {...register("checkbox2", { required: true })} />
      <FontAwesomeIcon icon={faCheck}
      className="text-lg  w-[1rem] h-[1rem] text-orange-500 absolute left-0 top-0 text-opacity-0 check-1 transition"
      />
      
      {/* errors will return when field validation fails  */}
      {errors.checkbox2 && <span>Campo obrigatório</span>}
      </label>
      <p className="w-[31.25rem] ml-[0.938rem] text-base ">Solicitamos permissão para usar seus dados pessoais internamente, visando melhorar nossos serviços. Garantimos a confidencialidade e proteção adequada dos seus dados. Por favor, confirme se concorda com o uso.</p>
      
      </div>

      <button type="submit">Enviar</button>
    </form>
  )
}