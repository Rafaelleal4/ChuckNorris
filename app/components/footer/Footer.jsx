import React from 'react'
import styles from './footer.module.css'
import { FaSquareInstagram, FaEnvelope, FaSquareWhatsapp  } from "react-icons/fa6";
import Link from 'next/link';
function Footer() {
  return (
    <div className={styles.content}>
        <div className={styles.gif}>
          <img
            className={styles.kick}
            src="/chuck-norris-kick-action (1).gif"
            width={65}
            height={65}
            alt="gif do Chuck Norris chutando" />
        </div>
        <div className={styles.conteudo}>
          <h3>Contatos:</h3>
          <div className={styles.flex}> 
            <div>
              <Link href={'https://www.instagram.com/'} target='_blank' className={styles.link}>
                <FaSquareInstagram className={styles.icon}/>
              </Link>
              <Link href={'https://www.google.com/intl/pt-BR/gmail/about/'} target='_blank' className={styles.link}>
                <FaEnvelope className={styles.icon}/>
              </Link>
            </div>
              <Link href={'https://www.whatsapp.com/?lang=pt_BR'} target='_blank' className={styles.link}>
                <FaSquareWhatsapp className={styles.icon}  />
              </Link>
          </div>
          <div id={styles.texto}>
            <p id={styles.txt}>Todos Os Direitos Reservados</p>
          </div>

        </div>
    </div>
  )
}

export default Footer