import { combineReducers } from 'redux';
import dashboardReducer from '../dashboard/dashboardReducer';
import tabReducer from '../common/tab/tabReducer';

const rootReducer = combineReducers({
    // dashboard: () => ({
    //     // reducer com estado fixo
    //     summary: {
    //         credit: 100,
    //         debt: 50
    //     }
    // })
    dashboard: dashboardReducer,
    tab: tabReducer
})

export default rootReducer;