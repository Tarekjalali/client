import { CURRENTUSER, FAIL, GETUSERS, LOGIN, LOGOUT, REGISTER, UPDATEUSER } from "../ActionTypes/AuthTypes"

const initialState={

    user : {},

    users:[],
    
    errors : []

}

const AuthReducer=(state=initialState, action)=>{

    switch (action.type) {
        case REGISTER : 
        localStorage.setItem('token',action.payload.token)
        return {...state, user : action.payload.userData , errors : []}
        case LOGIN : 
        localStorage.setItem('token',action.payload.token)
        return {...state, user : action.payload.userData, errors : []}
        case LOGOUT : 
        localStorage.removeItem('token')
        return {...state, user : {}, errors :[], current : {}}
        case CURRENTUSER:
        return {...state, user : action.payload}
        case GETUSERS : 
       return {...state, users : action.payload}        



        case FAIL : return {...state, errors : action.payload}
        default: return state
    }

}


export default AuthReducer