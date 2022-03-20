import React from 'react'
import useAuth from '../auth/useAuth'

const userCredentials = {}

export default function LoginPage() {
  const { login } = useAuth()

  return (
    <>
      <h1>LoginPage</h1>
      <button onClick={() => login(userCredentials)}>Iniciar sesión</button>
    </>
  )
}
