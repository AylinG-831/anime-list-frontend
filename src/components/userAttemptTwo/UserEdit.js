import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import UserForm from './userCompontents/UserForm';

function UserEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    
    const [user, setUser] = useState({
        username: '',
        email: '',
        LinkArray: [],
    })

    const [createdUser, setCreatedUser] = useState(null)

    const handleChange = (event) => {
        const changedField = { [event.target.name] : event.target.value}
        const editedUser = Object.assign(user, changedField)
        setUser(editedUser)
        //We will have to do an Object assign to update w/
        // the anime click...figure out that API call, ASAP.
        // Or I'll have to add that data to our back end. 
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios({
            // url: `${apiUrl}/users`
            url: `http://localhost:3001/api/users/${id}`,
            method: 'PUT',
            data: user
        }).then(res => setCreatedUser(res.data.user)).catch(console.error)
    }


useEffect( () => {
    if(createdUser) {
        return navigate(`/users/${id}`)
    }
}, [createdUser, navigate])


    return (
        <UserForm
        user={user}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath={`/users/${id}`} />

    )



}

export default UserEdit;