import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { applyToEvent, getAllApplications } from '../Redux/Actions/ApplicationActions'

import CardApplication from './CardApplications'
import Button from 'react-bootstrap/esm/Button'

const Applications = () => {

 
  
  const dispatch = useDispatch()


  useEffect(()=>{
  dispatch(getAllApplications())
  },[])
  
  const Apps = useSelector(state => state.applicationReducer.apps);

  
  return (
    <div>
      
      
      {
       Apps && Apps.map((el,i,t)=><>{<CardApplication el = {el} key={i} ></CardApplication>}</>)
      }
      
    </div>
  )
}

export default Applications