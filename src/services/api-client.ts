import axios, {CanceledError} from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key: '9ffa1b795c9f4d75bd23fb17cf77cda2'
    }
})

export {CanceledError}