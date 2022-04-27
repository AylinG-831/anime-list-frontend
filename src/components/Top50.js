import axios from 'axios';
import { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard';
import AnimeCardV3 from './AnimeCardV3';
import { NavLink } from 'react-router-dom';

function Top50() {
    const [popAni, setPopAni] = useState([])
    const [goForIt, setGoForIt] = useState(false)

        //--------------Activate User Select Section -----------------
        const [currentUser, setCurrentUser] = useState({});
        const [userObj, setUserObj] = useState('');
        const [allUsers, setAllUsers] = useState([])

        const [remove, setRemove] = useState(false);
        //Let's try to conditionally render the selection...

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
               className='radio-select'
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
    
        //---------------End of Activate User Select Section ---------------

    const getPopAnime = async () => {
        //REMINDER: Find the v4 version ASAP. This will be depreciated in September. 
        // This is the API call for general popular anime. 
        const response = await axios.get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        setPopAni(response.data.top)
        console.log(popAni[0]);
    }

    useEffect(() => {
        getPopAnime();
    }, [])

  

    const showAnime = (currentUser) => {
       setGoForIt(!goForIt); 
    }

    return(
        <div className="home-main-div">
            <h3>Select a User, then press the button below.</h3>
{/*             
            <h4>Take a look at some popular anime...</h4> */}

            <div className="top-anime-main">
                  <div className='userSelect-form'>
                
                <h3>Select Current User</h3>
                <NavLink to="/user-create">
                    <h4>Create a New User?</h4>
                </NavLink>
                {userData}
                {(currentUser !== undefined) ? <h5>Current User: {currentUser.username}</h5> : <h5>Current User:</h5>}
            
        </div>

            <h3>The Top 50</h3>
            <button onClick={showAnime}>Show Top 50 Anime</button>
            <div className='row'>
            {goForIt === true ? popAni.map( (anime) => {
              return(  <AnimeCardV3 anime={anime} currentUser={currentUser}/>
              )
            }) : 'Click for the Top 50.'}
            </div>
        </div>
        </div>
    )
}

export default Top50;

//Who knows what was here????
