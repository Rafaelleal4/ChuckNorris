'use client'
import React, { useState, useEffect } from 'react'
import memes from 'data/imagem'
import { removeRequestMeta } from 'next/dist/server/request-meta'

function Randomizer() {
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
            <img src={image} alt="meme do Chucky Norris" width={650} height={650} />
        </div>
    )
}

export default Randomizer