import styles from './dashButton.module.css'

const DashButton = ({title, func}) => {
    return (
        <button onClick={func} className={styles.btn}>{title}</button>
    )
}

export default DashButton;