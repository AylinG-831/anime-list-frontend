import axios from 'axios';

async function searchCall(input) {

    //The link needs to be replaced w/ the v4 version of the API. This will not work by the time 
    // September comes. For the sake of time, I will leave this here as is. 
    try {
        const response = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${input}&order_by=title&sort=asc&limit=10`)
        return response.data.results;
    } catch(e) {
        console.log(e);
    }
}

export default searchCall;