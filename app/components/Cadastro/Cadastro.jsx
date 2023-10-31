import DashButton from '../DashButton/DashButton'
import styles from './cadastro.module.css'

const Cadastro = ({ textFrase, textAuthor, author, frase, setFrase, setAuthor, editButton, update, add }) => {
    return (
        <div className={styles.all}>
            <h2 className={styles.h2}>Escreva sua frase digna de Chuck Norris</h2>
            <section className={styles.register}>
                <input className={styles.inp} placeholder={textAuthor} value={author} onChange={e => setAuthor(e.target.value)} />
                <input className={styles.inp} placeholder={textFrase} value={frase} onChange={e => setFrase(e.target.value)} />
                {
                    editButton ? (
                        <DashButton title={'Atualizar'} func={update}/>
                    ) : (
                        <DashButton title={'Registrar'} func={add}/>
                    )
                }
            </section>
        </div>
    )
}

export default Cadastro