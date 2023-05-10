import Axios from 'axios';

const BASE_URL = "http:localhost:3003/api";

export function GeolocationPosition() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request // request as a att [.data] that is their result
    }
}