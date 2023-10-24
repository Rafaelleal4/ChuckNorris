import React from 'react'
import styles from './footer.module.css'
import {FaSquareInstagram, FaEnvelope, FaSquareWhatsapp  } from "react-icons/fa6";
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
                <FaSquareInstagram className={styles.icon}/>
                <FaEnvelope className={styles.icon}/>
            </div>
              <FaSquareWhatsapp className={styles.icon2}/>
          </div>
          <div id={styles.texto}>
            <p id={styles.txt}>todos os direitos reservado</p>
          </div>

        </div>
    </div>
  )
}

export default Footer