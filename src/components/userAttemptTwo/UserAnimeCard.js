//The difference between this one and the regular one is that this one will have the CRUD function of "delete",
// in the form of a button. 

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



function UserAnimeCard(props) {
    const navigate = useNavigate
    const [updated, setUpdated] = useState(false);

    const [user, setUser] = useState({
        // username: "",
        // email: "",
        // listArray: [],
    });
    //Our user info should be in object form. 

    //I'm fairly certain it's a string...
    const animeID = props.anime.mal_id;
    const malLink = props.anime.url;
    // const picLink = props.anime.image_url;
    const { id } = useParams(); 
    //We need the id to access our user. 

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios(`http://localhost:3001/api/users/${id}`)
                console.log("Our user: ", response);
                setUser(response.data);
                console.log('This is our props anime: ', props.anime)
                console.log("our user array: ", user.listArray)
            } catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const removeFromList = () => {
        //We don't quite need to target anything. There is no data that we need from the button. 
        //We're not yet updating our data in the database ---,
        //right now, we take our ListArray, and filter out the number. 
        const userArray = user.listArray;
        console.log("This is the user array: ", JSON.stringify(userArray))
        const filterIt = (item) => {
            return item != animeID;
        }
        
        const filteredArray = userArray.filter( (item) => {
            return filterIt(item);
            console.log('lol its not filtering + typeofArray ' + typeof item)
            // console.log('this is the anime id for filtering: ', anime_id)
        })

        
        const updatedList = { "listArray" : filteredArray }
        console.log("This is our updatedList: " + JSON.stringify(updatedList) + "This is our original array :" + userArray)
        const editedArray = Object.assign(user, updatedList);

        //So now, hopefully we've assigned what we had to assign...
        //This is going to be slow, I bet.
        
        // console.log("This is the filterd array: ", user.listArray)
    }

    const handleRemoveClick = () => {
        //The page should refresh after this, actually. 
        removeFromList();
        axios({
            url: `http://localhost:3001/api/users/${id}`,
            method: "PUT",
            data: user
        })
        .then(() => setUpdated(true))
        .catch(console.error);

        window.location.reload(true); 
        
    }

    const findMoreInfo = () => {
        console.log(`it's been clicked: `, malLink)
        window.open(malLink)
    }

    useEffect( () => {
        if (updated) {
            return navigate(`/userList/${id}`)
        }
    })

    return (
        <div className="col-sm-4">
            <div className="anime-info">
            <h3>{props.anime.title}</h3>
            {console.log(props.imageURL)}
            <img src={props.imageURL} />
            
            <div className='anime-info-button'>
            <button type="button" className="btn btn-info" onClick={findMoreInfo}>More Info (MyMAL Redirect)</button>
            {/* <p>{props.anime.synopsis}</p> */}
            </div>
            
            </div>
          
            {/* <img src={props.anime.images.jpg.image_url}/> */}
            <div className="anime-remove-button">
            <button tupe="button" className="btn btn-danger" onClick={handleRemoveClick}>Remove from List</button>
            </div>
           
        </div>
    )
}

export default UserAnimeCard;