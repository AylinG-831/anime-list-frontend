import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function DisplayAllUsers() {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios(`http://localhost:3001/api/users`)
            console.log("our api call response for users: ", response)
            setUsers(response.data.users);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchData();
    }, [])

    const userData = users.map( (user, index) => {
        return (
            <li key={index}>
                <NavLink to={`/users/${user._id}`} >
                {user.username}
                </NavLink>
            </li>
        )
    })

    return (
        <div id='display-user-div' class="bg-image shadow-2-strong">
            <div className='mask'>
            <h1>Users</h1>
            <NavLink to="/user-create">
                <h3>Create a New User?</h3>
            </NavLink>
            <ul>{userData}</ul> 
            </div>
        </div>
    )
}

export default DisplayAllUsers;