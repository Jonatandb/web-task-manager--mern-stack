import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'

export default function PrivateRoute({ hasRole: role, children }) {
  const { hasRole, isLogged } = useAuth()

  if (role && !hasRole(role)) return <Navigate to={routes.home} />

  return isLogged() ? children : <Navigate to={routes.login} />
}
