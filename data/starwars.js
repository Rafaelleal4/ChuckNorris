import axios from 'axios';

const URL_API = 'https://api.chucknorris.io/jokes/random'

const personagens = async () => {
    try {
        const resposta = await axios.get(URL_API);
        return resposta.data 
    } catch (error) {
        throw error;
    }
}

export default personagens