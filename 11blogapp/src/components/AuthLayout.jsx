import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children, authenication=true}) {
  
  const authStatus = useSelector((state)=>state.auth.status)

  const navigate= useNavigate()

  const [loader,setloader]=useState(true)

  useEffect(()=>{
    if(authenication && authStatus !== authenication){
      navigate("/login")
    }else if(!authenication && authStatus !== authenication){
      navigate("/")
    }
    setloader(false)
  },[authStatus,authenication,navigate])
  return loader ? null:<>{children}</>
}

export default Protected