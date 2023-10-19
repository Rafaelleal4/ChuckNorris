"use client"
import { useState } from "react";
import { Registro, ListaRegistro } from "@/models/Register";
import Cadastro from "../components/Cadastro/Cadastro";

const teste = () => {
    const [frase, setFrase] = useState('');
    const [author, setAuthor] = useState('');

    const listaRegistro = new ListaRegistro();
    
    const add = () => {
        const registro = new Registro(frase, author);
        listaRegistro.add(registro);
        clean()
        console.log(listaRegistro.madeComments);
    }

    const clean = () => {
        setFrase('')
        setAuthor('')
    }

    return (
        <div>
            <Cadastro textFrase={'Registrar frase'} textAuthor={'Autor da frase'} frase={frase} author={author} setFrase={setFrase} setAuthor={setAuthor} buttonText={'Registrar'} onClick={add}/>

            <div>
                {
                    listaRegistro.madeComments.map((frase) => (
                        <div key={frase.id}>
                            <p>{frase.frase}</p>
                            <p>{frase.author}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default teste;