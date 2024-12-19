import axios from 'axios'
import { GETALLAPPLICATIONS, GETMYAPPLICATIONS, GETPARTICIPANTSLIST } from '../ActionTypes/ApplicationTypes'



export const getAllApplications =()=>async(dispatch)=>{

    try {
        const res = await axios.get('/api/applications/getAllApplications')

        dispatch(
            {
                type : GETALLAPPLICATIONS,
                payload : res.data.applications
            }
        )
    } catch (error) {
        console.log(error)
    }

}

export const getMyApplications=(id)=>async(dispatch)=>{

    try {
        const res = await axios.get(`/api/applications/getMyApplications/${id}`)

        dispatch(
            {
                type : GETMYAPPLICATIONS,
                payload: res.data
            }
        )
    } catch (error) {
        console.log(error)
    }
}



export const applyToEvent=(application)=>async(dispatch)=>{

    try {

        const res = await axios.post('/api/applications/applyToEvent',application)
        dispatch(getAllApplications())
    } catch (error) {
        console.log(error)
    }

}

export const cancelApplication=(id, idParticipant)=>async(dispatch)=>{
    try {

       await axios.delete(`/api/applications/deleteApplication/${id}`)

        dispatch(getMyApplications(idParticipant))

    
        
    } catch (error) {
        console.log(error)
    }
}

export const getParticipantsList =(id)=>async(dispatch)=>{

    try {
        const res = await axios.get(`/api/applications/getParticpantsList/${id}`)

        dispatch(
            {
                type : GETPARTICIPANTSLIST ,
                payload :res.data
            }
        )
    } catch (error) {
        console.log(error)
    }

}

export const approveOrReject=( eventId ,appId, newStatus)=>async(dispatch)=>{

    try {

        await axios.put(`/api/applications/UpdateApplicationStatus/${appId}`, newStatus)
        dispatch(getParticipantsList(eventId))
        
    } catch (error) {
        console.log(error)
    }

}