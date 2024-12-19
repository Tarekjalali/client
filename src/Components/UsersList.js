import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getusers } from '../Redux/Actions/AuthActions'
import CardUser from './CardUser'

const UsersList = () => {


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getusers())
    },[])

    const users = useSelector(state=>state.AuthReducer.users)

   


  return (
    <div>
      {users.map((el)=><CardUser key={el._id} el={el}></CardUser>)}
    </div>
  )
}

export default UsersList
