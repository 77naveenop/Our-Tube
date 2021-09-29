import { createStore,applyMiddleware,combineReducers} from "redux";
import {composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
import { HomeVideoReducer } from "./reducers/video.reducer";





const rootReducer=combineReducers({
    auth:authReducer,
    homeVideos:HomeVideoReducer,
})

const Store = createStore(
    rootReducer,{},composeWithDevTools(applyMiddleware(thunk))
)


export default Store;