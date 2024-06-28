import axios from "axios";

 export const registerUser = async(values) => {
    try {
        // axios.post('api-back-postUser', values)
        console.log(values)
    }
    catch(error) {
        throw new Error(`error trying to register: ${error}`)
    }
}

export const loginUser = async(values) => {
    try {
        axios.post('http://localhost:3017/auth-own/login', values)
    }
    catch(error) {
        throw new Error(`error trying to login: ${error}`)
    }
}

export const loginUserWithProvider = async(provider) => {
    try {
       //axios.post('api-back-loginUserWithSM', values)
        console.log(`login with ${provider}`)
    }
    catch(error) {
        throw new Error(`error trying to login with SM: ${error}`)
    }
}