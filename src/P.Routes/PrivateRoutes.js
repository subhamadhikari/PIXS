import React from 'react'
import { isAuthenticated } from './helper'
import {Outlet,Navigate} from "react-router-dom"

const PrivateRoutes = () => {
    const auth = isAuthenticated()
  return (
    auth ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoutes