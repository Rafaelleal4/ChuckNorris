import Link from "next/link"
import Input from "../Input/Input"
import styles from './cadastro.module.css'

const Cadastro = ({buttonText, buttonText2, onClick, textFrase, textAuthor, author, frase, setFrase, setAuthor}) => {
    return (
        <div className={styles.all}>
            <h2 className={styles.h2}>Escreva sua frase mita</h2>
            <section>
            <Input className={styles.inp} text={textAuthor} value={author} setValue={setAuthor} />
            <button className={styles.button1} onClick={onClick}>{buttonText}</button>
           <Input className={styles.inp} text={textFrase} value={frase} setValue={setFrase} />
            </section>
            <Link href={"tsw_personagens"}> <button className={styles.button2}>{buttonText2}</button></Link>
        </div>
    )
}

export default Cadastro