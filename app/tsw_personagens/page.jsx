"use client"
import React, { useEffect, useState } from 'react'
import personagens from '@/data/chuckNorris'
import styles from './page.module.css'
import Header from '../components/header/Header'
import Randomizer from '../components/Randomizer/Randomizer'


function star() {
    const [dadosApi, setDadosApi] = useState(null)

    useEffect(() => {
        let ignore = false;

        const persoFet = async () => {
            try {
                const dados = await personagens()
                if (!ignore) {
                    setDadosApi(dados)
                    console.log(dados)
                }
            } catch (e) {
                throw e
            }
        };
        persoFet();

        return () => {
            ignore = true;
        };

    }, [])

    const refresh = () => {

    }
    return (
        <div>
            <Header />
            <div className={styles.main}>
                {
                    dadosApi ? (
                        <div>
                            {
                                <div className={styles.hero} onClick={refresh}>
                                    <h1>Frases e imagens do Chuck Norris</h1>
                                    <div key={dadosApi.id} className={styles.text}>
                                        <div className={styles.img}>
                                            <Randomizer width={350} height={350} />
                                        </div>
                                        <h2 className={styles.textRanom}>{dadosApi.value}</h2>
                                    </div>
                                </div>
                            }
                        </div>
                    ) : (
                        <img src="/tumbleweed_idle.webp" alt="tuble weeds" className={styles.load} />
                    )
                }
            </div>
            <div className={styles.leafBg}>
                <img src="/tumbleweed.gif" alt="Old west leaf" className={styles.leaf} />
            </div>
        </div>
    )
}

export default star