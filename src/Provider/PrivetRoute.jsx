import React, { use } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate, useLocation } from 'react-router'
import { Loading } from '../pages/Loading'

export const PrivetRoute = ({ children }) => {
    const { user, loading, setLoading } = use(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return <Loading></Loading>
    }
    if (user && user.email) {
        return  children 
    }

    else{
      return  <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
    }
}
