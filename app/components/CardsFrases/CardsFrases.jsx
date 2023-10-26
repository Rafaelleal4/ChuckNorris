import styles from './cardsFrases.module.css';
import { Registro, ListaRegistro } from "@/models/Register";
import personagens from '@/data/chuckNorris';
import Randomizer from '../randomizer/Randomizer';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa6'


const CardFrases = ({ list, exclude }) => {
    const registro = new Registro();
    const [heart, setHeart] = useState(registro.heart)
    const [color, setColor] = useState('#000')
    const [dadosApi, setDadosApi] = useState('')

    const addHeart = (id) => {
        if (heart == 0) {
            setHeart(1)
            setColor('#d21f3c')
        } else {
            setHeart(0)
            setColor('#000')
        }
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
                                            <button onClick={addHeart} className={styles.heart}><FaHeart style={{ color: color, transition: 'ease-in' }} /> {heart}</button>
                                            <div>
                                                <button onClick={exclude(() => comment.id)}>Lixeira</button>
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
                            <button onClick={addHeart} className={styles.heart}><FaHeart style={{ color: color, transition: 'ease-in' }} /> {heart}</button>
                            <div>
                                <button onClick={exclude(() => comment.id)}>Lixeira</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CardFrases