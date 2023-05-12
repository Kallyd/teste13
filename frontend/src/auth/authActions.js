import { toastr } from 'react-redux-toastr'; // messages
import Axios from 'axios'; // backend calls
import consts from '../consts';


export function login(values) {
    return submit(values, `${consts.OAPI_URL}/login`); // opens endpoints
}

export function signup(values) {
    return submit(values, `${consts.OAPI_URL}/signup`); // opens endpoints
}

// method used to submit the form of auth(login and signup)
function submit(values, url) {
    return dispatch => {
        Axios.post(url, values)
            .then(resp => {
                dispatch([{
                    type: 'USER_FETCHED',
                    payload: resp.data
                }])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}

export function logout() {
    return {
        type: 'TOKEN_VALIDATED',
        payload: false
    }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            Axios.post(`${consts.OAPI_URL}/validateToken`, { token })
                .then(resp => {
                    dispatch({
                        type: 'TOKEN_VALIDATED',
                        payload: resp.data.valid
                    })
                })
                .catch(e => dispatch({
                    type: 'TOKEN_VALIDATED',
                    payload: false
                }))
        } else {
            dispatch({
                type: 'TOKEN_VALIDATED',
                payload: false
            })
        }
    }
}