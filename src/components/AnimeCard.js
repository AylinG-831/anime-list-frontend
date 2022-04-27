import { useState } from 'react';
import axios from 'axios';

function AnimeCard(props) {
    const [list, setList] = useState()
    const [updatedUser, setUpdatedUser] = useState({
    
    })

    const userID = props.currentUser._id;
    const userArray = props.currentUser.listArray;

    const handleSubmit = (event) => {
        // event.preventDefault()
        axios({
            // url: `${apiUrl}/users`
            url: `http://localhost:3001/api/users/${userID}`,
            method: 'PUT',
            data: updatedUser
        }).catch(console.error)
        // .then(res => setUpdatedUser(res.data.user)).catch(console.error)
    }

    const addToUserList = (event) => {
        let updatedList = [];
        console.log()
        setList(props.anime.mal_id);
       {userArray != null && userArray != undefined ? updatedList = [...userArray, list] : updatedList = [list]} 
        console.log(typeof props.anime.mal_id)
        console.log('Sample Updated List: ', updatedList)
        console.log(`User ID is: `, userID)
        setUpdatedUser({ "listArray": updatedList})
        // alert(`This is what we want---${props.anime.mal_id}, and this is what the user wants - "Added anime to list."`)
        console.log(`This is what we want---${props.anime.mal_id}, and this is what the user wants - "Added anime to list.`)
        handleSubmit(event)
        // console.log(`This is what we want---${props.anime.mal_id}, and this is what the user wants - "Added anime to list.`)
    }

    return (
        <div className="col-sm-4">
            <div className="anime-info">
            <h3>{props.anime.title}</h3>
            <img src={props.anime.images.jpg.image_url} />
            <blockquote>
            
                <p>{props.anime.synopsis}</p>
                <footer>From MyAnimeList</footer>
            </blockquote>
            </div>
          
            {/* <img src={props.anime.images.jpg.image_url}/> */}
            <div className="anime-button">
            <button onClick={addToUserList}>Add to List</button>
            </div>
           
        </div>
    )
}

export default AnimeCard;