import {combineReducers} from "redux"
import AuthReducer from "./AuthReducer"
import eventsReducer from "./EventsReducer"
import applicationReducer from "./ApplicationReducer"
import NewsReducer from "./NewsReducer"

const rootReducer = combineReducers({AuthReducer, eventsReducer, applicationReducer, NewsReducer})


export default rootReducer