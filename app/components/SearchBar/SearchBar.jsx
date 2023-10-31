import styles from './searchBar.module.css'
import { ListaRegistro } from "@/models/Register";
import { useState } from 'react';
const listaRegistro = new ListaRegistro();

const SearchBar = () => {
    const [text, setText] = useState('')

    return(
        <div className={styles.container}>
            <input type="text" placeholder='🔍 Pesquisar' value={text} onChange={e => setText(e.target.value)}/>
            <div>
                {
                    listaRegistro.madeComments.filter((comment) => comment.frase && comment.author == text)
                }
            </div>
        </div>
    )
}

export default SearchBar;