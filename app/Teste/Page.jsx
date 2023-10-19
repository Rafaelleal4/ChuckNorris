"use client"
import { useState, useEffect } from "react";
import { Registro, ListaRegistro } from "@/models/Register";
import personagens from "@/data/chuckNorris";
import Cadastro from "../components/Cadastro/Cadastro";

const teste = () => {
    const [frase, setFrase] = useState('');
    const [author, setAuthor] = useState('');
    const [dadosApi, setDadosApi] = useState('');

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

    useEffect(() => {
        const persoFet = async () => {
            try {
                const dados = await personagens()
                setDadosApi(dados)
                console.log(dados)

            } catch (e) {
                throw e
            }
        };
        persoFet();
    }, [])

    return (
        <div>
            <Cadastro textFrase={'Registrar frase'} textAuthor={'Autor da frase'} frase={frase} author={author} setFrase={setFrase} setAuthor={setAuthor} buttonText={'Registrar'} onClick={add}/>

            <div>
                {
                    dadosApi ? (
                        <div>
                            {
                                <div key={dadosApi.id}>
                                    <p>{dadosApi.value}</p>
                                </div>
                            }
                        </div>
                    ) : (
                        <p>carregando API...</p>
                    )
                }
            </div>
        </div>
    )
}

export default teste;