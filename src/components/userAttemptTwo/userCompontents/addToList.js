import axios from 'axios';

async function addToList(props) {
    //props.currentUser;
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



}