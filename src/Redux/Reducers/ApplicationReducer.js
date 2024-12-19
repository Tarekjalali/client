import { GETALLAPPLICATIONS, GETMYAPPLICATIONS, GETPARTICIPANTSLIST } from "../ActionTypes/ApplicationTypes"



const initialState = {
    apps : [],
    myApps : [],
    participantsList : []
    
}

const applicationReducer =(state = initialState, action)=>{

    switch (action.type) {

        case GETALLAPPLICATIONS : return {...state , apps : action.payload}
        case GETMYAPPLICATIONS : return {...state, myApps : action.payload}
        case GETPARTICIPANTSLIST : return {...state, participantsList : action.payload}
        
        default: return state
    }

}

export default applicationReducer