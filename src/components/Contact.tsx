import React from "react";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import ImgForms  from "../assets/imgForms.svg";

export function  Contact () {
  return(
<section 
        id="section-7" 
        className="h-full flex justify-between mx-auto pt-32"
        >
          <div className="">
          <h1 className="font-extrabold uppercase text-[2.813rem] leading-[130%] mb-10">
            Entre em contato
          </h1>
          <div>
            <ContactForm />
          </div>
          </div>
          <div className="">
          <Image className=" ml-[3.125rem] mt-24" src={ImgForms} alt="Image" />
          </div>
          
        </section>


  )}