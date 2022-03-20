import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AccountPage from '../pages/AccountPage'
import UsersPage from '../pages/admin/UsersPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProjectPage from '../pages/ProjectPage'
import ProjectsPage from '../pages/ProjectsPage'
import RegisterPage from '../pages/RegisterPage'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/register' element={<RegisterPage />} />
        <Route exact path='/account' element={<AccountPage />} />
        <Route exact path='/projects' element={<ProjectsPage />} />
        <Route exact path='/project/:projectId' element={<ProjectPage />} />
        <Route exact path='/admin/users' element={<UsersPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}
