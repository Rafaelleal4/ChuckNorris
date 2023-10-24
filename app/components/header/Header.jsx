import Link from 'next/link';
import styles from './header.module.css'

const Header = () => {
    return(
        <div className={styles.header}>

            <div className={styles.img}>
            <img src='chuck-norris-write.png' height={60} width={240}></img>
            </div>

            <div className={styles.categorias}>
            
            <nav>
            <ul className={styles.links}>

            <li>
            <Link href='./'>Link1</Link>
            </li>
            
            <li>
            <Link href='./'>Link2</Link>
            </li>

            <li>
            <Link href='./'>Link3</Link>
            </li>

            </ul>
            </nav>
            </div>

        </div>
    );
}

export default Header;