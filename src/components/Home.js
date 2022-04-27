import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div id="intro" class="bg-image shadow-2-strong">
            <div className="mask">
            <div className="container d-flex align-items-center justify-content-center text-center h-100">

            <div className="text-white">
                <h1 className="mb-4">Yokoso.</h1>
                <h3 className="mb-3">Welcome to the worst anime website in existence.</h3>
                
                <NavLink to="/about">
                <button type='button' class="btn btn-outline-light">How to Use this Site</button>
                </NavLink>
            </div>

            </div>
            </div>

            </div>
        
    )
}

export default Home;