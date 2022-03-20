import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AccountPage from '../pages/AccountPage'
import ProjectPage from '../pages/ProjectPage'
import ProjectsPage from '../pages/ProjectsPage'
import UsersPage from '../pages/admin/UsersPage'
import NotFoundPage from '../pages/NotFoundPage'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import roles from '../helpers/roles'

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            exact
            path='/login'
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            exact
            path='/register'
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            exact
            path='/account'
            element={
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path='/projects'
            element={
              <PrivateRoute>
                <ProjectsPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path='/project/:projectId'
            element={
              <PrivateRoute>
                <ProjectPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path='/admin/users'
            element={
              <PrivateRoute hasRole={roles.admin}>
                <UsersPage />
              </PrivateRoute>
            }
          />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}
