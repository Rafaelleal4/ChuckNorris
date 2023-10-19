"use client"
import React, { useEffect, useState } from 'react'
import personagens from '@/data/chuckNorris'
import styles from './page.module.css'


function star() {
    const [dadosApi, setDadosApi] = useState('')
    
    useEffect(() => {
        const persoFet = async () => {
            try {
                const dados = await personagens()
                setDadosApi(dados)
                console.log(dados)

            } catch (e) {
                throw e
            }
        };
        persoFet();
    }, [])
    return (
        <div>
            <div className={styles.header}>
                <img src='chuckicon.png' className={styles.imgh}/>
            </div>
        <div className={styles.main}>
            {
                dadosApi ? (
                    <div>
                        {
                            <div>
<h1>Frases do Chuck Norris</h1>
                         <div key={dadosApi.id} className={styles.text}>
                           
                                <h2>{dadosApi.value}</h2>
                            </div>
                            </div>
                        }
                    </div>
                ) : (
                    <p>Carregando dados da API...</p>
                )
            }
        </div>
        </div>
    )
}

export default star