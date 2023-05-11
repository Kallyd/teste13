import Axios from 'axios';

import { toastr } from 'react-redux-toastr';
import { reset as formReset, initialize } from 'redux-form'; // Action creator to reset the form
import { showTabs, selectTab } from '../common/tab/tabActions';

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export function getList() {
    const request = Axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request // Request as a attribute [.data] that is their result
    }
}

// after submit function is created
export function create(values) {
    return submit(values, 'post');
}
// my method to delete (delete from list)
export function exclude(values) {
    return submit(values, 'delete');
}

export function update(values) {
    return submit(values, 'put');
}

// function used only in this module
// values = form values && method = method called when backend is requested
function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : '';
        Axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(() => {
                toastr.success("Sucess", "Successful Operation");
                // the array only can be passed because of the mdd = redux-multi
                dispatch(init())
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
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

// professor method to delete (shows the delete tab)
export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function remove(values) {
    return submit(values, 'delete');
}

// inicialize and cancel action creator
export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}








// After middleware redux-thunk and redux-multi
// export function create(values) {
//     return dispatch => {
//         Axios.post(`${BASE_URL}/billingCycles`, values)
//             .then(() => {
//                 toastr.success("Sucess", "Successful Operation");
//                 // the array only can be passed because of the mdd = redux-multi
//                 dispatch(init())
//                 // dispatch([
//                 //     formReset('billingCycleForm'),
//                 //     getList(),
//                 //     selectTab('tabList'),
//                 //     showTabs('tabList', 'tabCreate')
//                 // ])
//             })
//             .catch(e => {
//                 // data.errors comes from backend
//                 e.response.data.errors.forEach(error => toastr.error("Error", error))
//                 dispatch([
//                     formReset('billingCycleForm')
//                 ])
//             })
//     }
// }
















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