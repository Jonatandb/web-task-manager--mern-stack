import React, { useState } from 'react'
import { createContext } from 'react'
import roles from '../helpers/roles'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = (userCredentials, fromLocation) => {
    setUser({ id: 1, role: roles.admin, name: 'Jonatandb', email: 'jonatandb@gmail.com' })
    if (fromLocation) navigate(fromLocation, { replace: true })
  }

  const logout = () => setUser(null)

  const isLogged = () => !!user

  const updateUser = data => {
    setUser({ ...user, ...data })
  }
  const hasRole = role => {
    return role && user?.role === role
  }

  const contextValue = {
    user,
    isLogged,
    hasRole,
    login,
    logout,
    updateUser,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
