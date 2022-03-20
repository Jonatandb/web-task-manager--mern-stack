import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
  const user = { id: 1, role: 'regular' }
  return user ? children : <Navigate to='/' />
}
