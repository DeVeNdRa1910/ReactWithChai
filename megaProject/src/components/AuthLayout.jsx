import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication=true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
// if you want no need to take authentication from user bcz we chack mannually
    useEffect(()=>{
        if(authentication && (authStatus !== authentication) ){
            navigate('/login')
        } else if(!authentication && (authStatus !== authentication)) {
            navigate('/')
        }
        setLoader(false)
    } , [authStatus, navigate, authentication])

  return loader ? <h1>Laoding...</h1> : <>{children}</>
}
