import Axios from 'axios';

import { toastr } from 'react-redux-toastr';
import { reset as formReset } from 'redux-form'; // Action creator to reset the form
import { showTabs, selectTab } from '../common/tab/tabActions';

const BASE_URL = "http://localhost:3003/api";

export function getList() {
    const request = Axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request // Request as a attribute [.data] that is their result
    }
}

// After middleware redux-thunk
export function create(values) {
    return dispatch => {
        Axios.post(`${BASE_URL}/billingCycles`, values)
            .then(() => {
                toastr.success("Sucess", "Successful Operation");
                // the array only can be passed because of the mdd = redux-multi
                dispatch([
                    formReset('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e => {
                // data.errors comes from backend
                e.response.data.errors.forEach(error => toastr.error("Error", error))
                dispatch([
                    formReset('billingCycleForm')
                ])
            })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate')
    ]
}
























// before middlewares
// export function create(values) {
//     // console.log(values)
//     Axios.post(`${BASE_URL}/billingCycles`, values)
//         .then(() => {
//             toastr.success("Sucess", "Successful Operation")
//         })
//         .catch(e => {
//             // data.errors comes from backend
//             e.response.data.errors.forEach(error => toastr.error("Error", error))
//         })
//     return {
//         type: 'TEMP',
//     }
// }