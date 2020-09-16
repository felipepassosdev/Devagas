import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/repos/frontendbr',
})

export default api