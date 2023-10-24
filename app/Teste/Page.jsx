"use client"
import { useState, useEffect } from "react";
import { Registro, ListaRegistro } from "@/models/Register";
import personagens from "@/data/chuckNorris";
import Cadastro from "../components/Cadastro/Cadastro";
const listaRegistro = new ListaRegistro();

const teste = () => {
    const [frase, setFrase] = useState('');
    const [author, setAuthor] = useState('');

    const add = () => {
        const registro = new Registro(frase, author);
        verifyInputs(registro)
        console.log(listaRegistro.madeComments);
    }

    const verifyInputs = (registro) => {
        listaRegistro.emptyInputs(frase, author) ? (
            alert("Erro"),
            clean()
        ) : (
            alert("Deu bom!!!"),
            listaRegistro.add(registro),
            clean()
        )
    }

    const clean = () => {
        setFrase('')
        setAuthor('')
    }

    return (
        <div>
            <Cadastro textFrase={'Registrar frase'} textAuthor={'Autor da frase'} frase={frase} author={author} setFrase={setFrase} setAuthor={setAuthor} buttonText={'Registrar'} onClick={add} />
            <div>
                {
                    listaRegistro.madeComments.map((comment) => (
                        <div key={comment.id}>
                            <p>{comment.frase}</p>
                            <p><strong>{comment.author}</strong></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default teste;