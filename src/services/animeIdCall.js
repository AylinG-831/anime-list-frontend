import axios from 'axios'

async function animeIdCall(number) {
    //Im an idiot. I'm an idiot. I'm and idiot. 

  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${number}`)
    console.log(response)
    return response.data;
  } catch (e) {
      console.log(e)
  }
}

export default animeIdCall;

