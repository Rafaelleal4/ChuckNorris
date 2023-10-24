"use client"
import Link from "next/link";
import Cadastro from "./components/Cadastro/Cadastro";


export default function Home() {
  return (
 <div>
  <Cadastro textFrase={"Digite uma frase"} textAuthor={"Nome do Autor"} buttonText={"Enviar"} buttonText2={"Frases Cadastradas"}/>
 </div>
  )
}
