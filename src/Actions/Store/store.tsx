import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
import rootReducer from "../Reducer";

// const middlewares = [reduxThunk];


const store = createStore(rootReducer);

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;