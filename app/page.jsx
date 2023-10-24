"use client"
import Link from "next/link";
import Header from "./components/header/Header";
import Cadastro from "./components/Cadastro/Cadastro";


export default function Home() {
  return (
 <div>
  <Header />
  <Cadastro textFrase={"Digite uma frase"} textAuthor={"Nome do Autor"} buttonText={"Enviar"} buttonText2={"Frases Cadastradas"}/>
 </div>
  )
}
