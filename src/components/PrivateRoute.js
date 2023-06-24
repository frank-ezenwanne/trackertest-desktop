import React from 'react'
import { useSelector } from 'react-redux'
import {Outlet,useNavigate} from 'react-router-dom'

const PrivateRoute = ()=> {
    const navigate = useNavigate()
    const {token} = useSelector(state=>state.auth)
        if(token !== null){
            return <Outlet/>
        }else{
            return navigate('/')
        }
       }


export default PrivateRoute