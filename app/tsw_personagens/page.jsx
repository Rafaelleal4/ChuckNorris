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
        <div className={styles.main}>
            <h1>Frases do Chuck Norris</h1>
            {
                dadosApi ? (
                    <div>
                        {
                         <div key={dadosApi.id}>
                                <h2>{dadosApi.value}</h2>
                            </div>
                        }
                    </div>
                ) : (
                    <p>Carregando dados da API...</p>
                )
            }
        </div>
    )
}

export default star