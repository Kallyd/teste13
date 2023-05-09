import { combineReducers } from 'redux';
import dashboardReducer from '../dashboard/dashboardReducer';

const rootReducer = combineReducers({
    // dashboard: () => ({
    //     // reducer com estado fixo
    //     summary: {
    //         credit: 100,
    //         debt: 50
    //     }
    // })
    dashboard: dashboardReducer
})

export default rootReducer;