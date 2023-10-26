"use client"
import { useState } from "react"
import { Registro, ListaRegistro } from "@/models/Register";
import Cadastro from "../components/Cadastro/Cadastro";
import styles from "../cadastro/cadastro.module.css"
const listaRegistro = new ListaRegistro();

const cadastro = () => {

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
        <div className={styles.all}>
            <Cadastro author={author} frase={frase} setAuthor={setAuthor} setFrase={setFrase} textFrase={'Digite uma frase'} textAuthor={'Autor da frase'} onClick={add} buttonText={'Enviar'} list={listaRegistro.madeComments}/>
        </div>
    )
}

export default cadastro