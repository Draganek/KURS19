import axios from 'axios'

const instance = axios.create({
    baseURL: "https://react-19-web-default-rtdb.europe-west1.firebasedatabase.app"
})

export default instance