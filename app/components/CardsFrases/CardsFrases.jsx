import styles from './cardsFrases.module.css';
import { Registro, ListaRegistro } from "@/models/Register";
import personagens from '@/data/chuckNorris';
import Randomizer from '../randomizer/Randomizer';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa6'
const listaRegistro = new ListaRegistro();


const CardFrases = ({list}) => {
    const registro = new Registro();
    const [color, setColor] = useState('#000')
    const [listRegister, setListRegister] = useState(listaRegistro.getAllComments())
    const [dadosApi, setDadosApi] = useState('')

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

    const removeComment = (id) => {
        const comments = listaRegistro.getAllComments();
        
        if(comments) {
            listaRegistro.removeComment(id)
            setListRegister(listRegister.getAllComments)
        }
    }

    return (
        <div className={styles.list}>
            <div className={styles.api}>
                <div>
                    {
                        dadosApi ? (
                            <div>
                                {
                                    <div className={styles.cardAPI}>
                                        <div key={dadosApi.id} className={styles.text}>
                                            <p><strong>" {dadosApi.value} "</strong></p>
                                            <p><i>- Chuck Norris</i></p>
                                        </div>
                                        <div>
                                            <button onClick={() => {
                                                if(color == '#000') {
                                                    setColor('#de0a26')
                                                } else {
                                                    setColor('#000')
                                                }
                                            }} className={styles.heart}><FaHeart style={{ color: color, transition: 'ease-in' }} /></button>
                                            <div>
                                                <button>Lixeira</button>
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
                list.map((comment) => (
                    <div key={comment.id} className={styles.card}>
                        <p><strong>" {comment.frase} "</strong></p>
                        <p><i>{`- ${comment.author}`}</i></p>
                        <div>
                            <button className={styles.heart}><FaHeart style={{ color: '#000', transition: 'ease-in' }} /></button>
                            <div>
                                <button onClick={() => removeComment(comment.id)}>Lixeira</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CardFrases