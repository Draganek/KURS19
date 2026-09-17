import axios from 'axios'

const instance = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1",
    params: {
        key: 'AIzaSyD7ybX2rCp8osjQowvkJX47mYqDSjbBJ7g'
    }
})

export default instance