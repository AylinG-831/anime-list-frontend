import { useEffect, useState } from 'react';
import axios from 'axios'; 
import Button from 'react-bootstrap';

function AnimeCardV3(props) {
    const [list, setList] = useState()
    const [updatedUser, setUpdatedUser] = useState({
    
    })
    const [refreshedUser, setRefreshedUser] = useState([]);
    const userID = props.currentUser._id;
    //THIS IS THE SOURCE OF THE GLITCH -- We CAN'T pass down the updated value...once it's down, it's down.
    // Even if we update the value above, it's done. This is what's stuck here. 
    // There's no time left to figure out redux, unfortunately. 
    // Should've studied more....

    const [userArray, setUserArray] = useState(props.currentUser.listArray)

    // const fetchRefresh = async () => {
    //         try {
    //             const response = await axios(`http://localhost:3001/api/users/${userID}`)
    //             console.log("This is our users response: ", response)
    //             setUserArray(response.data.listArray);
    //             console.log("This is our response data in individual user", response)
    //         } catch(error) {
    //             console.log(error)
    //         }
    // }

    const handleSubmit = (event) => {
        // event.preventDefault()
        axios({
            // url: `${apiUrl}/users`
            url: `http://localhost:3001/api/users/${userID}`,
            method: 'PUT',
            data: updatedUser
        }).catch(console.error)
        // .then(res => setUpdatedUser(res.data.user)).catch(console.error)
        //HUGE GLITCH AT THE MOMENT -- If we switch users w/ this logic, then their entire list will be 
        // overwritten by the previous user. Easiest fix is to simply refresh the page....
        
        
    }

    const addToUserList = () => {
        setList(props.anime.mal_id)
        console.log(list);
        updateIt();
    }

    const updateIt = () => {
        let updatedList = [];
        {userArray != null && userArray != undefined && list != null & list != undefined? updatedList = [...userArray, list] : updatedList = [list]} 
        console.log(typeof props.anime.mal_id)
        console.log('Sample Updated List: ', updatedList)
        console.log(`User ID is: `, userID)
        setUpdatedUser({ "listArray": updatedList})
        console.log(`This is what we want---${props.anime.mal_id}, and this is what the user wants - "Added anime to list.`)
        // alert(`This is what we want---${props.anime.mal_id}, and this is what the user wants - "Added anime to list."`)
        handleSubmit();


        //...Another stark reminder of Redux's importance. OF COURSE NONE OF THIS WORKS.
        // WHY WOULD IT? 
    }



    return (
        <div className="col-sm-4">
            <h3>{props.anime.title}</h3>
            <img src={props.anime.image_url}/>
            <p>{props.anime.sypnosis}</p>
            <button type="button" className="btn btn-info"onClick={addToUserList}>Add to List</button>
        </div>
    )
}

export default AnimeCardV3;