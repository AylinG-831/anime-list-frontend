
import axios from 'axios';
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

function ActiveUserSelect() {
    const [currentUser, setCurrentUser] = useState('');
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
               type="radio"
               name ="userSelect"
               value={user.username}
               onChange={() => {
                   setCurrentUser(user._id) 
                   console.log(currentUser);
                   return (
                       <p>Current User: {user.username}</p>
                   )
               }}/>
               {user.username}
               </label>
            )
        })
    
        return (
            <div className='userSelect-form'>
                
                <h1>Select Current User</h1>
                {userData}
                <NavLink to="/user-create">
                    <h3>Create a New User?</h3>
                </NavLink>
                
            
            </div>
        )


    }
    

export default ActiveUserSelect;