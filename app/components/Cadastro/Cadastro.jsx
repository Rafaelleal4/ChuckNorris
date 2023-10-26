import styles from './cadastro.module.css'
import CardFrases from '../CardsFrases/CardsFrases'

const Cadastro = ({ buttonText, onClick, textFrase, textAuthor, author, frase, setFrase, setAuthor, list }) => {
    return (
        <div className={styles.all}>
            <h2 className={styles.h2}>Escreva sua frase digna de Chuck Norris</h2>
            <section className={styles.register}>
                <input className={styles.inp} placeholder={textAuthor} value={author} onChange={e => setAuthor(e.target.value)} />
                <input className={styles.inp} placeholder={textFrase} value={frase} onChange={e => setFrase(e.target.value)} />
                <button className={styles.button} onClick={onClick}>{buttonText}</button>
            </section>
            <CardFrases list={list} />
        </div>
    )
}

export default Cadastro