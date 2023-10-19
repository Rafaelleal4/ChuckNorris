import Input from "../Input/Input"
import styles from './cadastro.module.css'

const Cadastro = ({buttonText, onClick, textFrase, textAuthor, author, frase, setFrase, setAuthor, className}) => {
    return (
        <div>
            <Input className={styles} text={textFrase} value={frase} setValue={setFrase} />
            <Input className={styles} text={textAuthor} value={author} setValue={setAuthor} />
            <button onClick={onClick}>{buttonText}</button>
        </div>
    )
}

export default Cadastro