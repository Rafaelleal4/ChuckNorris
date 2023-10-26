"use client"
import { useState } from "react"
import { Registro, ListaRegistro } from "@/models/Register";
import Cadastro from "../components/Cadastro/Cadastro";
import styles from "../cadastro/cadastro.module.css"
import CardFrases from "../components/CardsFrases/CardsFrases";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
const listaRegistro = new ListaRegistro();

const cadastro = () => {

    const [list, setList] = useState(listaRegistro.madeComments)
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

    const deleteCard = (id) => {
        const comment = listaRegistro.getAllComments()

        if(comment) {
            listaRegistro.excludeComment(id)
        }
    }

    return (
        <>
        <Header />
        <div className={styles.all}>
            <Cadastro author={author} frase={frase} setAuthor={setAuthor} setFrase={setFrase} textFrase={'Digite uma frase'} textAuthor={'Autor da frase'} onClick={add} buttonText={'Enviar'} list={listaRegistro.madeComments}/>
            <CardFrases list={listaRegistro.madeComments} exclude={deleteCard}/>
        </div>
        <Footer />
        </>
    )
}

export default cadastro