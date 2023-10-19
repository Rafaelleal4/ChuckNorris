import { useState } from "react";
import Cadastro from "../components/Cadastro/Cadastro";

const teste = () => {
    const [frase, setFrase] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <div>
            <Cadastro textFrase={'Registrar frase'} textAuthor={'Autor da frase'} frase={frase} author={author} setFrase={setFrase} setAuthor={setAuthor}/>
        </div>
    )
}

export default teste;