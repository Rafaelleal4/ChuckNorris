import styles from './cardsFrases.module.css'

const CardFrases = ({list}) => {
    return (
        <div className={styles.list}>
        {
            list.map((comment) => (
                <div key={comment.id} className={styles.card}>
                    <p><strong>{comment.frase}</strong></p>
                    <p><i>{`- ${comment.author}`}</i></p>
                </div>
            ))
        }
    </div>
    )
}

export default CardFrases