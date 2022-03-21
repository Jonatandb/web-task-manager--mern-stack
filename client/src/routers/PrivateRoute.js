import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'

export default function PrivateRoute({ hasRole: role, children }) {
  const { hasRole, isLogged } = useAuth()

  const location = useLocation()

  if (role && !hasRole(role)) return <Navigate to={routes.home} />

  return isLogged() ? children : <Navigate to={routes.login} state={{ from: location }} />
}
