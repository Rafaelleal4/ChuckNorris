import styles from './cardsFrases.module.css'
import { Registro ,ListaRegistro } from "@/models/Register";
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa6'


const CardFrases = ({list, exclude}) => {
    const registro = new Registro(); 
    const [heart, setHeart] = useState(registro.heart)
    const [color, setColor] = useState('#000')

    const addHeart = (id) => {
        if(heart == 0) {
            setHeart(1)
            setColor('#d21f3c')
        } else {
            setHeart(0)
            setColor('#000')
        }
    }

    return (
        <div className={styles.list}>
            {
                list.map((comment) => (
                    <div key={comment.id} className={styles.card}>
                        <p><strong>" {comment.frase} "</strong></p>
                        <p><i>{`- ${comment.author}`}</i></p>
                        <div>
                            <button onClick={addHeart} className={styles.heart}><FaHeart style={{color: color, transition:'ease-in'}}/> {heart}</button>
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