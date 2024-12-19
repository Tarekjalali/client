import axios from 'axios'
import { CURRENTUSER, FAIL, GETUSERS, LOGIN, LOGOUT, REGISTER, } from '../ActionTypes/AuthTypes'


export const register=(user,navigate)=>async(dispatch)=>{

    try {

        const res = await axios.post('/api/users/Register',user)

        dispatch(
            {
                type : REGISTER,
                payload:res.data
            }
        )

        navigate('/Profil')
        


        
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }

}

export const login=(user, navigate)=>async(dispatch)=>{

    try {

        const res = await axios.post('/api/users/SignIn',user)

        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )
        navigate('/Profil')
        
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }

}

export const logout=()=>{
   return(
    {
        type : LOGOUT
    }
   )
}

export const currentuser =()=>async(dispatch)=>{

    try {

        const config = {headers : { authorized : localStorage.getItem('token')}}

        const res = await axios.get('/api/users/currentUser',config)

        dispatch(
            {
                type : CURRENTUSER,
                payload : res.data
            }
        )
        
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }


}

export const deleteAccount=(id,navigate)=>async(dispatch)=>{

    try {

        await axios.delete(`/api/users/deleteProfile/${id}`)
        dispatch(
            {
                type : LOGOUT
            }
        )
        navigate('/')
        
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }

}

export const updateuser=(id,changes,navigate)=>async(dispatch)=>{

    try {
        
        const formData = new FormData()
        formData.append('image' , changes.profilePic)
        const res = await axios.post('https://api.imgbb.com/1/upload?key=22970270ad4334a985e23993195591f8', formData)
        
        const profilePic = res.data.data.url
        await axios.put(`/api/users/UpdateProfil/${id}`,{...changes, profilePic})
        dispatch(currentuser())
        navigate('/Profil')


    } catch (error) {

        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
        
    }

}

export const getusers = ()=>async(dispatch)=>{

    try {
        const res = await axios.get('/api/users/getAllUsers')
        dispatch(
            {
                type : GETUSERS,
                payload : res.data.users
            }
        )
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }

}

export const deleteUsers=(id)=>async(dispatch)=>{

    try {
        await axios.delete(`/api/users/deleteProfile/${id}`)
        dispatch(            
                getusers()            
        )
        
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }

}