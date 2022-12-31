import React from 'react'
import {Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


function LoggedInUser() {
  const {user}= useSelector((state)=>({...state}))
  return user ? <Outlet /> : <Navigate to='/login' />
}

export default LoggedInUser