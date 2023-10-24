import Input from "../Input/Input"
import styles from './cadastro.module.css'

const Cadastro = ({buttonText, onClick, textFrase, textAuthor, author, frase, setFrase, setAuthor}) => {
    return (
        <div className={styles.all}>
            <h2 >Escreva sua frase mita</h2>
            <section>
            <Input className={styles.inp} text={textFrase} value={frase} setValue={setFrase} />
            <section>
            <Input className={styles.inp} text={textAuthor} value={author} setValue={setAuthor} />
            </section>
            </section>
            <section>
            <button className={styles.button} onClick={onClick}>{buttonText}</button>
            </section>
        </div>
    )
}

export default Cadastro