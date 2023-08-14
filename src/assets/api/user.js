import axios from "axios";
import {API_URL} from "./config";
import {userLoaded, userLoading, userLogin, userLogout, userMessages} from "../../redux/slices/authSlice";

export const auth = () => {
    return async dispatch => {
        try {
            dispatch(userLoading())
            const response = await axios.get(`${API_URL}api/user/auth`, {headers:{Authorization: `Token ${localStorage.getItem('token')}`}})
            dispatch(userLoaded(response.data))
        }catch (e) {
            dispatch(userMessages(e.response.data))
        }
    }
}

export const login = (username, password) =>{
    return async dispatch => {
        try {
            dispatch(userLoading())
            const response = await axios.post(`${API_URL}api/auth/login`, {username, password})
            dispatch(userLogin(response.data))
            localStorage.setItem('token', response.data.token)
        }catch (e) {
            dispatch(userMessages(e.message))
        }
    }
}

export const registration = (username, email, password) =>{
    return async dispatch => {
        try {
            dispatch(userLoading())
            const response = await axios.post(`${API_URL}api/auth/register`, {
                username,
                email,
                password
            })
            dispatch(userLoaded(response.data.user))
            localStorage.setItem('token', response.data.token)
        }catch (e) {
            dispatch(userMessages(e.message))
        }
    }
}

export const logout = () => {
    return async dispatch => {
        try {
            dispatch(userLoading())
            await axios.post(`${API_URL}api/auth/logout`, '', {headers:{Authorization: `Token ${localStorage.getItem('token')}`}})
            dispatch(userLogout())
            localStorage.removeItem('token')
        }catch (e) {
            dispatch(userMessages(e.message))
        }
    }
}
