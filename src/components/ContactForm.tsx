"use client"
import axios from 'axios'
import { useForm, SubmitHandler } from "react-hook-form"
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type ContactFormProps = {
  name: string
  email: string
  phone: number
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
  } = useForm<ContactFormProps>()
  const onSubmit: SubmitHandler<ContactFormProps> = async ({ name, email, phone, enterprise, checkbox1, checkbox2 }) => {
    const subject = 'Novo Contato Landing Page Zion'
    const text = `Olá pessoal! Temos um novo contato através da landingpage da Zion!` +  `NOME: ${name}` + `EMAIL: ${email}`
                  + `TELEFONE: ${phone}` + `EMPRESA: ${enterprise}` + `ACEITA COMUNICAÇÃO: ${true ? 'sim' : 'não'}`
    const html = `<h1>Olá pessoal! Temos um novo contato através da landingpage da Zion!<h1>
                  <br />
                  <br />
                  <span style="display: InlineBlock, color: "red">NOME:</span> <p>${name}<p>
                  <br />
                  <span style="display: InlineBlock, color: "red">EMAIL:</span> <p>${email}<p>
                  <br />
                  <span style="display: InlineBlock, color: "red">TELEFONE:</span> <p>${phone}<p>
                  <br />
                  <span style="display: InlineBlock, color: "red">EMPRESA:</span> <p>${enterprise} <p>
                  <br />
                  <span style="display: InlineBlock, color: "red">ACEITA COMUNICAÇÃO:</span> <p>${true ? 'sim' : 'não'}<p>`

    try {
      const response = await 
      axios
      .post('/api/mail', {
        subject,
        text,
        html
      } )

      console.log(response)
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      {/* register your input into the hook by invoking the "register" function */}

      <label className="text-xl font-semibold mb-[1.375rem] mt-[1.375rem] w-[31.25rem] ">Nome completo  <span className="text-[0.813rem] font-bold  text-orange-500">*</span></label>
      <input className="text-black-500 text-base px-2  w-[31.25rem] h-10 border-solid border-[1.5px] rounded-[9px] border-orange-500  focus:outline-orange-500" {...register("name", { required: true })} />


      {/* include validation with required or other standard HTML validation rules */}

      <label className="text-xl font-semibold mb-[1.375rem] mt-[1.375rem] w-[31.25rem]">E-mail <span className="text-[0.813rem] font-bold  text-orange-500">*</span></label>
      <input className="text-black-500 text-base px-2  w-[31.25rem] h-10 border-solid border-[1.5px] rounded-[9px] border-orange-500  focus:outline-orange-500"  {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}




      <label className="text-xl font-semibold mb-[1.375rem] mt-[1.375rem] w-[31.25rem]">Telefone <span className="text-[0.813rem] font-bold  text-orange-500">*</span></label>
      <input className="text-black-500 text-base px-2  w-[31.25rem] h-10 border-solid border-[1.5px] rounded-[9px] border-orange-500  focus:outline-orange-500" {...register("phone", { required: true })} />
      {/* errors will return when field validation fails  */}





      <label className="text-xl font-semibold mb-[1.375rem] mt-[1.375rem] w-[31.25rem]">Empresa</label>
      <input className="text-black-500 text-base px-2 w-[31.25rem] h-10 border-solid border-[1.5px] rounded-[9px] border-orange-500  focus:outline-orange-500" {...register("enterprise", { required: true })} />
      {/* errors will return when field validation fails  */}

      <div className="flex justify-start items-start mt-[1.625rem] ">
        <label htmlFor="check-box-1" className="cursor-pointer relative">
          <input className="appearance-none w-[1.148rem] h-[1.148rem] border-[1px] border-orange-500 " type="checkbox" id="check-box-1" {...register("checkbox1")} />
          <FontAwesomeIcon icon={faCheck}
            className="text-lg  w-[1rem] h-[1rem] text-orange-500 absolute left-0 top-0 text-opacity-0 check-1 transition"
          />
          {/* errors will return when field validation fails  */}

        </label>
        <p className="text-[1.188rem] ml-[0.938rem]">Aceita receber comunicação da Zion?</p>
      </div>

      <div className="flex justify-start items-start mt-[1.375rem] ">
        <label htmlFor="check-box-2" className="cursor-pointer relative">
          <input className="appearance-none w-[1.148rem] h-[1.148rem] border-[1px] border-orange-500 " type="checkbox" id="check-box-2" {...register("checkbox2", { required: true })} />
          <FontAwesomeIcon icon={faCheck}
            className="text-lg  w-[1rem] h-[1rem] text-orange-500 absolute left-0 top-0 text-opacity-0 check-1 transition"
          />

          {/* errors will return when field validation fails  */}
        </label>
        <p className="w-[29rem] ml-[0.938rem] text-base ">Solicitamos permissão para usar seus dados pessoais internamente, visando melhorar nossos serviços. Garantimos a confidencialidade e proteção adequada dos seus dados. Por favor, confirme se concorda com o uso. <span className="text-[0.813rem] font-bold  text-orange-500 mt-3  ">* </span></p>
      </div>
      {(errors.name || errors.email || errors.phone || errors.checkbox2) && <span className="text-[0.813rem] font-bold mt-[10px] text-orange-500">* Campo Obrigatório </span>}

      <button className=" mt-[3.125rem] text-lg font-bold uppercase flex items-center justify-center w-[31.438rem] h-[2.5rem] bg-orange-500 rounded-[9px]" type="submit">Enviar</button>
    </form>
  )
}