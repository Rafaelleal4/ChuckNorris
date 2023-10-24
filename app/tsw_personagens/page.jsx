"use client"
import React, { useEffect, useState } from 'react'
import personagens from '@/data/chuckNorris'
import styles from './page.module.css'
import Header from '../components/header/Header'


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
            <Header />
            <div className={styles.main}>
                {
                    dadosApi ? (
                        <div>
                            {
                                <div className={styles.hero}>
                                    <h1>Frases do Chuck Norris</h1>
                                    <div key={dadosApi.id} className={styles.text}>
                                        <div>
                                            
                                        </div>
                                        <h2 className={styles.textRanom}>{dadosApi.value}</h2>
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