import { useState } from "react"

const cadastro = () => {
    const [frase, setFrase] = useState('');

    return (
        <div>
            <input type="text" placeholder="Registre uma frase" value={frase}  onChange={e => setFrase(e.target.value)}/>
            <p>{frase}</p>
        </div>
    )
}

export default cadastro