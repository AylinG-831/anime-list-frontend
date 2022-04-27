import AnimeCard from "./AnimeCard";
//what was i even doing last night? 
// Let the user click a button...
import { useState, useEffect } from 'react';
import randomCall from "../services/randomCall";
import ActiveUserSelect from "./userAttemptTwo/userCompontents/ActiveUserSelect";
import axios from "axios";
import { NavLink } from 'react-router-dom'

function RandomAnime() {
    //You know what? Let's do this the dirty way...
    // Every component, we load a user. Redux is better, but I don't know if I have time to make sense of it. 
    // ....Redux would be *significanly* better. How do we tell the parent component to re-load based off what 
    // happens in the child component? It's not happening. With a global state, this would be a non-issue. 
    const [currentUser, setCurrentUser] = useState({});
    const [userObj, setUserObj] = useState('');
    const [allUsers, setAllUsers] = useState([])
    //It will come in an array. 
    
        const fetchData = async () => {
            try {
                const response = await axios(`http://localhost:3001/api/users`)
                console.log("our api call response for users: ", response)
                setAllUsers(response.data.users);
            } catch (error) {
                console.log(error);
            }
        }

    
        useEffect( () => {
            fetchData();
        }, [])

    
        const userData = allUsers.map( (user, index) => {
            return (
                
                <label>
               <input 
               className="radio-select"
               type="radio"
               name ="userSelect"
               value={user.username}
               onChange={() => {
                   setCurrentUser(user) 
                   console.log(currentUser);
                   return (
                       <p>Current User: {user.username}</p>
                   )
               }}/>
               {user.username}
               </label>
            )
        })

    
    
    const [randomAni, setRandomAni] = useState()

    const handleOnClick = async () => {
       try {
           const animeData = await randomCall();
           setRandomAni(animeData);
       } catch (e) {
           console.log(e)
       }
    }

  

    return (
        
        <div className="random-anime-main">
                  <div className='userSelect-form'>
                
                <h1>Select Current User</h1>
                <NavLink to="/user-create">
                    <h3>Create a New User?</h3>
                </NavLink>
            <div className="user-radio-div">
                {userData}
            </div>
                {(currentUser !== undefined) ? <h5>Current User: {currentUser.username}</h5> : <h5>Current User:</h5>}
            
            </div>

            <button onClick={handleOnClick}>Show a Random Anime</button>

            <div className="row">
            {randomAni ? <AnimeCard anime={randomAni} currentUser={currentUser}/>  : `There is no random anime to display.`}
            </div>
        </div>
    )
}

export default RandomAnime;