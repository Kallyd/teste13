import Axios from 'axios';

import { toastr } from 'react-redux-toastr';

const BASE_URL = "http://localhost:3003/api";

export function getList() {
    const request = Axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request // request as a att [.data] that is their result
    }
}

export function create(values) {
    // console.log(values)
    Axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            toastr.success("Sucess", "Successful Operation")
        })
        .catch(e => {
            // data.errors comes from backend
            e.response.data.errors.forEach(error => toastr.error("Error", error))
        })
    return {
        type: 'TEMP',
    }
}