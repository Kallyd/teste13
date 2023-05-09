import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    dashboard: () => ({
        // reducer com estado fixo
        summary: {
            credit: 100,
            debt: 50
        }
    })
})

export default rootReducer;