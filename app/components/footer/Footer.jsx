import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
function Footer() {
  return (
    <div className={styles.content}>
        <div className={styles.gif}>
       <Image 
       className={styles.kick}
       src={chuck-norris-kick-action (1).gif}
       width={50}
       height={50}
       alt="gif do Chuck Norris chutando"
       />
        </div>
    </div>
  )
}

export default Footer