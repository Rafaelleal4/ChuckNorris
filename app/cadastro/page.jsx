"use client"
import { useState, useEffect } from "react"
import { Registro, ListaRegistro } from "@/models/Register";
import Cadastro from "../components/Cadastro/Cadastro";
import personagens from '@/data/chuckNorris';
import { FaHeart } from 'react-icons/fa6'
import styles from "../cadastro/cadastro.module.css"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
const listaRegistro = new ListaRegistro();

const cadastro = () => {
    const [frase, setFrase] = useState('');
    const [author, setAuthor] = useState('');
    const [color, setColor] = useState('#000')
    const [show, setShow] = useState('flex')
    const [cardsColor, setCardsColor] = useState('')
    const [dadosApi, setDadosApi] = useState('')
    const [listComments, setListComments] = useState([]);

    useEffect(() => {
        let ignore = false;

        const persoFet = async () => {
            try {
                const dados = await personagens()
                if (!ignore) {
                    setDadosApi(dados)
                    console.log(dados)
                }
            } catch (e) {
                throw e
            }
        };
        persoFet();

        return () => {
            ignore = true;
        };

    }, [])

    const add = () => {
        const registro = new Registro(frase, author);
        verifyInputs(registro)
        console.log(listaRegistro.madeComments);
    }

    const removeComment = (chuck) => {
        listaRegistro.removeComment(chuck)
        setListComments(listaRegistro.getAllComments())
    }

    const addHeart = (comment) => {
        listaRegistro.addHeart(comment)
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
        <>
            <Header />
            <div className={styles.all}>
                <Cadastro author={author} frase={frase} setAuthor={setAuthor} setFrase={setFrase} textFrase={'Digite uma frase'} textAuthor={'Autor da frase'} onClick={add} buttonText={'Enviar'} list={listaRegistro.madeComments} />
                <div className={styles.list}>
                    <div className={styles.api}>
                        <div>
                            {
                                dadosApi ? (
                                    <div>
                                        {
                                            <div className={styles.cardAPI} style={{display: show }}>
                                                <div key={dadosApi.id} className={styles.text}>
                                                    <p><strong>" {dadosApi.value} "</strong></p>
                                                    <p><i>- Chuck Norris</i></p>
                                                </div>
                                                <div>
                                                    <button onClick={() => {
                                                        if (color == '#000') {
                                                            setColor('#de0a26')
                                                        } else {
                                                            setColor('#000')
                                                        }
                                                    }} className={styles.heart}><FaHeart style={{ color: color, transition: 'ease-in' }} /></button>
                                                    <div>
                                                        <button onClick={() => {
                                                            if (show == 'flex') {
                                                                setShow('none')
                                                            } else {
                                                                setShow('flex')
                                                            }
                                                        }}>Lixeira</button>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ) : (
                                    <img src="/tumbleweed_idle.webp" alt="tuble weeds" className={styles.load} />
                                )
                            }
                        </div>
                    </div>
                    {
                        listaRegistro.madeComments.map((comment) => (
                            <div key={comment.id} className={styles.card}>
                                <p><strong>" {comment.frase} "</strong></p>
                                <p><i>{`- ${comment.author}`}</i></p>
                                <div>
                                    <button onClick={() => {
                                        addHeart(comment)
                                        if (comment.heart == false) {
                                            setCardsColor('#000')
                                        } else {
                                            setCardsColor('#de0a26')
                                        }
                                    }} className={styles.heart}><FaHeart style={{ color: cardsColor, transition: 'ease-in' }} /></button>
                                    <div>
                                        <button onClick={() => removeComment(comment)}>Lixeira</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default cadastro