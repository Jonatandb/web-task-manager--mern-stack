import React, { useState } from 'react'
import { createContext } from 'react'
import roles from '../helpers/roles'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  //const [user, setUser] = useState(0)
  const [user, setUser] = useState({ id: 1, role: roles.admin })

  const isLogged = () => !!user

  const hasRole = role => {
    return role && user?.role === role
  }

  const contextValue = {
    user,
    isLogged,
    hasRole,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
