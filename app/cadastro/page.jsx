"use client"
import { useState } from "react"
import Input from "../components/Input/Input";

const cadastro = () => {
    const [frase, setFrase] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <div>
            <Input text={'Registrar frase'} value={frase} setValue={setFrase}/>
            <Input text={'Autor da frase'} value={author} setValue={setAuthor}/>
        </div>
    )
}

export default cadastro