import * as types from "./actionType";
import axios from "axios";
import { AppDispatch } from "./Store/store";
interface EditValue {
    date_stolen?: string,
    description?: string,
    location_found?: number,
    title?: string,
    url?: URL,
    id?: number,
}
const getUsers = (users: EditValue) => ({
    type: types.GET_USERS,
    payload: users,

})



export const loadUsers = () => {
    return function (dispatch: AppDispatch) {
        axios.get("https://bikeindex.org/api/v3/search")
            .then((resp) => {
                console.log("response:", resp);
                dispatch(getUsers(resp.data))
            })
            .catch((error) => console.log(error))
    }
}



