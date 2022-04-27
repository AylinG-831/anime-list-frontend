let apiUrl
const apiUrls = {
    production: 'https://anime-list-27.herokuapp.com/api/users',
    development: 'https://anime-list-27.herokuapp.com/api/users'
    //http:localhost:3000/api/users
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl