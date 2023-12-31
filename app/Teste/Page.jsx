"use client"
import { useState, useEffect } from "react";
import { Registro, ListaRegistro } from "@/models/Register";
import Cadastro from "../components/Cadastro/Cadastro";
import styles from './teste.module.css'
import CardFrases from "../components/CardsFrases/CardsFrases";

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
        <div className={styles.global}>
            <Cadastro textFrase={'Registrar frase'} textAuthor={'Autor da frase'} frase={frase} author={author} setFrase={setFrase} setAuthor={setAuthor} buttonText={'Registrar'} onClick={add} />
            <CardFrases list={listaRegistro.madeComments}/>
        </div>
    )
}

export default teste;