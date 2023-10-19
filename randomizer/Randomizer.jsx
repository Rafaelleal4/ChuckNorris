import React from 'react'
import memes from 'data/imagem'

function randomizer() {
    const Random = () => {
        let num = Math.floor(Math.random * 20)

        memes.filter(meme =>{
            if(num == meme.id){
                return meme.foto
            }
        })
            
    }
  return (
    <div>
        <img src={Random} alt="meme do Chucky Norris" />
    </div>
  )
}

export default randomizer