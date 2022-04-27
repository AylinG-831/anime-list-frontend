import { useState, useEffect } from 'react';
import { useNavigation, useParams } from 'react-router-dom';
import axios from 'axios';

import UserAnimeCard from './UserAnimeCard';
import animeIdCall from '../../services/animeIdCall';

function DisplayAllAnime(props) {
    //The props will be the listItem....

    //What do we have to do here? 
    // We have to get a user, and all their associated
    // anime mal_ids.
    // Ideally, it would be in an array. 
    // We map through the array and do an api call and 
    //...display the result each time.

    //We'd need a use state, and this time it can be a basic one, I believe. All the data will be in the backend server. 
    const { id } = useParams();
    
    const animeID = props.anime_id;
    const [anime, setAnime] = useState({});
    const [imageURL, setImageURL] = useState('')
    // const fetchData = async () => {
    //     try {
    //         const response = await axios(`http://localhost:3001/api/users/${id}`)
    //         console.log("our api call response for *a* user: ", response)
    //         setUser(response.data.users);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect( () => {
    //     fetchData();
    // }, [])

    //Don't do the above. It's a waste. Pass it down as a prop instead. 
    // We need to do an API call for anime, however. 

    const fetchAnimeData = async () => {
        try {
            const response = await animeIdCall(animeID);
            console.log('This is the anime found: ', response)
            setAnime(response.data); 
            setImageURL(response.data.images.jpg.image_url)
        } catch(e) {
            console.log(e);
        }
    }

    useEffect( () => {
        fetchAnimeData();
    }, [])
    
    return (
    
            <UserAnimeCard anime={anime} imageURL={imageURL}/>
      
     
    // <div>
    //     <p>An anime should be here.</p>
    //     {console.log('This is displayAllAnimes anime: ' , anime)}
    // </div>
    )


}

export default DisplayAllAnime;