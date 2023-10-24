'use client'
import React, { useState, useEffect } from 'react'
import Styles from './randomizer.module.css'
import memes from 'data/imagem'

function Randomizer({height, width}) {
    const [image, setImage] = useState('');
    useEffect(() => {
        const Random = async () => {
            try {
                let num = Math.floor(Math.random() * 20)
                memes.filter(meme => {
                    if (num == meme.id) {
                        setImage(meme.foto)
                    }
                })
            } catch (error) {
                throw error
            }
        }
        Random();
    }, []);

    return (

        <div>
            <img src={image} alt="meme do Chucky Norris" width={width} height={height}  className={Styles.imgs}/>
        </div>
    )
}

export default Randomizer