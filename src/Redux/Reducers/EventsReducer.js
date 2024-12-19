import { GETEVENTS, GETMYEVENTS, GETONEEVENT } from "../ActionTypes/EventTypes"

const initialState = {
    events : [],
    oneEvent : {},
    myEvents : [],
    
    
}

const eventsReducer=(state=initialState,action)=>{

    switch (action.type) {
        case GETEVENTS : return {...state , events : action.payload}

        case GETONEEVENT : return {...state , oneEvent : action.payload}

        case GETMYEVENTS : return {...state, myEvents : action.payload}
        default: return state
    }

}


export default  eventsReducer