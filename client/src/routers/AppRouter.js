import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
import routes from '../helpers/routes'

export default function AppRouter() {
  return (
    <Routes>
      <Route
        exact
        path={routes.home}
        element={
          <PublicRoute>
            <HomePage />
          </PublicRoute>
        }
      />
      <Route
        exact
        path={routes.login}
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        exact
        path={routes.register}
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        exact
        path={routes.account}
        element={
          <PrivateRoute>
            <AccountPage />
          </PrivateRoute>
        }
      ></Route>
      <Route
        exact
        path={routes.projects}
        element={
          <PrivateRoute>
            <ProjectsPage />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path={routes.project()}
        element={
          <PrivateRoute>
            <ProjectPage />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path={routes.admin.users}
        element={
          <PrivateRoute hasRole={roles.admin}>
            <UsersPage />
          </PrivateRoute>
        }
      />

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
