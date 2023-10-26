import Link from "next/link"
import Input from "../Input/Input"
import styles from './cadastro.module.css'

const Cadastro = ({ buttonText, onClick, textFrase, textAuthor, author, frase, setFrase, setAuthor }) => {
    return (
        <div className={styles.all}>
            <h2 className={styles.h2}>Escreva sua frase digna de Chuck Norris</h2>
            <section className={styles.register}>
                <Input className={styles.inp} text={textAuthor} value={author} setValue={setAuthor} />
                <Input className={styles.inp} text={textFrase} value={frase} setValue={setFrase} />
                <button className={styles.button} onClick={onClick}>{buttonText}</button>
            </section>
        </div>
    )
}

export default Cadastro