import Input from "../Input/Input"
import styles from './cadastro.module.css'

const Cadastro = ({buttonText, onClick, textFrase, textAuthor, author, frase, setFrase, setAuthor}) => {
    return (
        <div className={styles.all}>
            <section>
            <Input className={styles} text={textFrase} value={frase} setValue={setFrase} />
            <Input className={styles} text={textAuthor} value={author} setValue={setAuthor} />
            </section>
            <section>
            <button onClick={onClick}>{buttonText}</button>
            </section>
        </div>
    )
}

export default Cadastro