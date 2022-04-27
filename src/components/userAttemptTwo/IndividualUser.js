import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import DisplayAllAnime from './DisplayAllAnime';


function IndividualUser() {
    const[user, setUser] = useState([]);
    const [list, setList] = useState([]);
    const [deleted, setDeleted] = useState(false);
    // const [sure, setSure] = useState(false);
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios(`http://localhost:3001/api/users/${id}`)
                console.log("This is our users response: ", response)
                setUser(response.data);
                setList(response.data.listArray);
                console.log("This is our response data in individual user", response)
            } catch(error) {
                console.log(error)
            }
    
        }

        fetchData();
    }, [])

    useEffect( () => {
        if (!user) {
            return <p>Loading...</p>
        } else {
            console.log( "this is our user: ", user)
        }
    }, [user])

    const destroy = () => {
        axios({
            url: `http://localhost:3001/api/users/${id}`,
            method: "DELETE",
        })
        .then( () => setDeleted(true))
        .catch(console.error);
    }

    useEffect( () => {
        if (deleted) {
            return navigate("/users")
        }
    }, [deleted, navigate])

    // const areYouSure = (user) => {
    // //     let sure = confirm(`Are you sure you want to delete user ${user.username}?`) 
    // //    ( sure ? destroy() : alert(`User ${user.username} remains.`))
    //     setSure(!sure);

    // }

    return (
        <div className='individual-user-page'>
        <h2>{user.username}'s Anime List</h2>
        <button type="button" className="btn btn-danger"onClick={() => destroy() }>Delete user?</button>
        {/* { sure ? 
        <div className='delete-warning'>
            <h5>Are you sure? There is no way to retrieve user data once deleted.</h5>
        <button type="button" className='btn btn-danger' onClick={() => destroy()}>Delete User</button>
        </div> : null} */}
        <NavLink to={`/users/${id}/edit`}>
            <button type="button" className='btn btn-primary'>Edit User Details</button>
        </NavLink>

        <NavLink to="/users">
            <button type="button" className='btn btn-info'>Back to All Users</button>
        </NavLink>
         {/* Here we'll have the anime printed out.  */}

{console.log("This is the list: " + list + "This is the type of list: " + typeof user.listArray)}
    <div className="row">

    {list.map( (anime_id, index) => {      
             return (
             <DisplayAllAnime anime_id={anime_id} />
             )

        }) }
         
         </div> 
    
        </div>
    )
}

export default IndividualUser;
