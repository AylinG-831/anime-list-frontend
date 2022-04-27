import { useEffect, useState } from 'react';
import searchCall from '../services/searchCall';
import AnimeCardV3 from './AnimeCardV3';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

//THE SEARCH FEATURE IS BUGGED --- RandomAnime works as intended, as we re-render the anime card with each click
//...and as long as we remember to switch the user BEFORE clicking. 

//Ugh. There's not enough time left to fix anything. 
function SearchAnime() {
    //Here, we'll insert another state. 
    //For now, it will be the single state

    //--------------Activate User Select Section -----------------
    const [currentUser, setCurrentUser] = useState({});
    const [userObj, setUserObj] = useState('');
    const [allUsers, setAllUsers] = useState([])
  
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


    useEffect( () => {
        //Let's hope this re-renders everthing based on current user...
    }, [currentUser])
    //---------------Start of Search Input Functionality---------------
    const [animeResults, setAnimeResults] = useState([])    
    const [input, setInput] = useState('');

      const handleOnChange = (event) => {
          event.preventDefault();
          let value = event.target.value;
          console.log('Our value is: ' + value);
          setInput(value);
      }

     async function handleSubmit(event) {
         event.preventDefault();
         const response = await searchCall(input);
         setAnimeResults(response);
         console.log(animeResults);
        //  setAnimeResults(response)
         //We have to look at this data before setting it to our listState. 
  

}
    return (
        <div className="search-main-div">
               
        <div className="search-anime-main">
                  <div className='userSelect-form'>
                
                <h1>Select Current User</h1>
                <NavLink to="/user-create">
                    <h3>Create a New User?</h3>
                </NavLink>
                {userData}
                {(currentUser !== undefined) ? <h5>Current User: {currentUser.username}</h5> : <h5>Current User:</h5>}
            
            
        </div>
            
            <h1>Search for Anime</h1>
            <input onChange={handleOnChange} type="text"></input>
            <button onClick={handleSubmit}>Search</button>

 
            <div className='row'>
            {(animeResults != null) ? animeResults.map( (anime) => {
              return (  <AnimeCardV3 anime={anime} currentUser={currentUser} />
              )
            }) : 'There are no anime that match your search.' }

            </div>

        </div>

        </div>
    )
}

export default SearchAnime