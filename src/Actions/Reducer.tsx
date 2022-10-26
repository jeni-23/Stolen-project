import * as types from './actionType'
import { combineReducers } from "redux";
const initialState = {
    users: [],
    user: {},
    loading: false
}

 export const usersReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
       
        }

};
const rootReducer = combineReducers({
    users: usersReducers,
});
export default rootReducer