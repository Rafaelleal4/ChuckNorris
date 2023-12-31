"use client"
import { Registro, ListaRegistro } from "@/models/Register";
import Cadastro from "../components/Cadastro/Cadastro";
import styles from "../cadastro/cadastro.module.css"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import personagens from '@/data/chuckNorris';
import { useState, useEffect, useContext } from 'react';
import { FaHeart, FaTrashCan, FaPencil, FaMoon, FaSun } from 'react-icons/fa6'
import SearchBar from "../components/SearchBar/SearchBar";
const listaRegistro = new ListaRegistro();

const cadastro = () => {
    const [listaTotal, setListaTotal] = useState([])
    const [editButton, setEditButton] = useState(false)

    const [list, setList] = useState(listaRegistro.madeComments)
    const [frase, setFrase] = useState('');
    const [author, setAuthor] = useState('');
    const registro = new Registro();
    // const [heart, setHeart] = useState(registro.heart)
    // const [color, setColor] = useState('#000')
    const [dadosApi, setDadosApi] = useState('')
    const [flag, setFlag] = useState(0)
    //Input
    const [text, setText] = useState('')
    //Array completo com API
    const [pegarTodos, setPegarTodos] = useState(listaRegistro.getAllComments())

    const add = () => {
        const registro = new Registro(frase, `- ${author}`);
        verifyInputs(registro)
        const updatedRegistro = [...listaTotal, registro];
        setListaTotal(listaRegistro.getAllComments(updatedRegistro));
    }

    const verifyInputs = (registro) => {
        listaRegistro.emptyInputs(frase, author) ? (
            clean()
        ) : (
            listaRegistro.add(registro),
            setPegarTodos(listaRegistro.getAllComments()),
            clean()
        )
    }

    const clean = () => {
        setFrase('')
        setAuthor('')
    }

    const removeComment = (chuck) => {
        listaRegistro.removeComment(chuck)
        setPegarTodos(listaRegistro.getAllComments())
    }

    const addHeart = (comment) => {
        comment.heart = !comment.heart;
    
        // Modify the color of the heart icon based on the comment.heart value
        const updatedList = pegarTodos.map(item => {
            if (item.id === comment.id) {
                return {
                    ...item,
                    heart: comment.heart
                };
            }
            return item;
        });
        setPegarTodos(updatedList);
    }

    const edit = (id) => {
        const comment = listaRegistro.getCommentsById(id)

        if (comment) {
            setFrase(comment.frase)
            setAuthor(comment.author)

            setFlag(id)
            setEditButton(true)
        }
    }

    const updateValues = () => {
        listaRegistro.editComment(flag, frase, author);

        setFrase('');
        setAuthor('');

        setEditButton(false)
        setFlag(0)
    }


    useEffect(() => {
        let ignore = false;

        const persoFet = async () => {
            try {
                const dados = await personagens()
                setDadosApi(dados)
                if (!ignore) {
                    const bonitinho = new Registro(dados.value, "- Chuck Norries")
                    listaRegistro.add(bonitinho)
                    setPegarTodos(listaRegistro.getAllComments())
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

    return (
        <>
            <Header />
            <div className={styles.all}>
                <Cadastro author={author} frase={frase} setAuthor={setAuthor} setFrase={setFrase} textFrase={'Digite uma frase'} textAuthor={'Autor da frase'} onClick={add} buttonText={'Enviar'} list={listaRegistro.madeComments} editButton={editButton} update={updateValues} add={add} />
                <div className={styles.container}>
                    <input type="text" placeholder='🔍 Pesquisar' value={text} onChange={e => setText(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.list}>
                    <div className={styles.api}>
                        <div>
                            {
                                dadosApi ? (
                                    <div className={styles.cards}>
                                        {
                                            pegarTodos.filter((comment) => {
                                                if (text == "") {
                                                    return comment
                                                } else if (comment.author.toLowerCase().includes(text.toLocaleLowerCase())) {
                                                    return comment
                                                }
                                            }).map((dadosApi) =>
                                                <div key={dadosApi.id} className={styles.cardAPI} >
                                                    <div className={styles.text}>
                                                        <p><strong>{dadosApi.frase}</strong></p>
                                                        <p><i>{dadosApi.author}</i></p>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            <button onClick={() => addHeart(dadosApi)} className={styles.heart}><FaHeart color={dadosApi.heart ? 'red' : 'black'}/></button>
                                                        </div>
                                                        <div>
                                                            <button className={styles.actions} onClick={() => removeComment(dadosApi.id)}><FaTrashCan /></button>
                                                            <button className={styles.actions} onClick={() => edit(dadosApi.id)}><FaPencil /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                ) : (
                                    <img src="/tumbleweed_idle.webp" alt="tuble weeds" className={styles.load} />
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )

}

export default cadastro
