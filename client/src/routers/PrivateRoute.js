import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth'

export default function PrivateRoute({ hasRole: role, children }) {
  const { user } = useAuth()
  if (role && user?.role !== role) return <Navigate to='/' />
  return user ? children : <Navigate to='/login' />
}
