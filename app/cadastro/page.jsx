"use client"
import { useState } from "react"
import Cadastro from "../components/Cadastro/Cadastro";
import styles from "../cadastro/cadastro.module.css"

const cadastro = () => {
    const [frase, setFrase] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <div className={styles.all}>
            <Cadastro buttonText={'Registrar'} textFrase={'Registrar frase'} textAuthor={'Autor da frase'} frase={frase} author={author} setFrase={setFrase} setAuthor={setAuthor}/>
        </div>
    )
}

export default cadastro