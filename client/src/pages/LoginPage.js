import React from 'react'
import { useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'

const userCredentials = {}

export default function LoginPage() {
  const { login } = useAuth()
  const location = useLocation()
  return (
    <>
      <h1>LoginPage</h1>
      <button onClick={() => login(userCredentials, location.state?.from)}>Iniciar sesión</button>
    </>
  )
}
