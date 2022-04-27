import axios from 'axios';

async function randomCall() {
    try {
        const response = await axios.get(`https://api.jikan.moe/v4/random/anime`)
        console.log(response.data);
        return response.data.data;
    } catch (e) {
        console.log(e);
    }
} 

export default randomCall;