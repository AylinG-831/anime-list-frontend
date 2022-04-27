import { Link } from 'react-router-dom';

const UserForm = ({user, handleSubmit, handleChange, cancelPath}) => {
    return (
        <div>
            <h1>User Create/Edit</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Create/Edit a User</label>
            <input 
            placeholder="username"
            name="username"
            onChange={(e) => handleChange(e)}/>

            <input
            placeholder="email"
            name="email"
            onChange={(e) => handleChange(e)}/>

            <button type="submit">Submit</button>

            <Link to ={cancelPath}>
                <button>Cancel</button>
            </Link>

        </form>
               
        </div>
    )
}

export default UserForm;