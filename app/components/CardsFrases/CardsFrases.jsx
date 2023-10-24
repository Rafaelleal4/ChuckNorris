import styles from './cardsFrases.module.css'

const CardFrases = ({list, frase, author}) => {
    return (
        <div className={styles.list}>
        {
            list.map((comment) => (
                <div key={comment.id} className={styles.card}>
                    <p><strong>{frase}</strong></p>
                    <p><i>{`- ${author}`}</i></p>
                </div>
            ))
        }
    </div>
    )
}

export default CardFrases