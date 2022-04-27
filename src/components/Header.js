import randomCall from "../services/randomCall";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import AnimeCard from "./AnimeCard";

function Header() {

    const [randomAni, setRandomAni] = useState()
    const [userSelected, setUserSelected] = useState([])
    //Our users API call is in an array, right? 
    //But just because it's in our header, it doesn't meant that it'll be accessible by the prop components. 
   // Trouble still stands.

    const handleOnClick = async () => {
        alert('click confirmed.')
       try {
           const animeData = await randomCall();
           setRandomAni(animeData);
       } catch (e) {
           console.log(e)
       }
    }
    
    // useEffect( () => {
    //     handleOnClick();
    // }, [setRandomAni, randomAni])

    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Anime List</a>
            {/* Such a clever title, right? */}
            {/* <p>You're going to have to replace this, anyway. </p> */}
            <nav className="navbar brand">
                <ul className="navbar-nav">
                <NavLink to="/">
                    <li className="nav-item">Home</li>
                </NavLink>

                    <NavLink to="/top-50">
                        <li className="nav-item">Top 50 Anime</li>
                    </NavLink>

                    <NavLink to="/search">
                    <li className="nav-item">Search</li>
                    </NavLink>
                    
                    <NavLink to="/random">
                    <li className="nav-item">Random Anime</li>
                    </NavLink>

                    <NavLink to="/users">
                        <li className="nav-item">Users</li>
                    </NavLink>

                    <NavLink to="/about">
                    <li className="nav-item">Website Instructions</li>
                    </NavLink>

                </ul>
            </nav>

            <div className="user-icon">
                {/* Here's where a clickable image goes. */}
                {/* <img onClick={handleOnClick} src="*"/> */}
                {/* Api call for a user picture... */}
                {/* Huh, will that work? */}
               
            </div>

            {/* {randomAni ? <AnimeCard anime={randomAni} />  : `There is no random anime to display.`} */}
            {/* This above was used for testing purposes. No longer needed. */}
        </div>
    )
}

export default Header; 