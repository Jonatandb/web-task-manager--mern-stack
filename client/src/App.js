import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from './auth/AuthProvider'
import Layout from './components/layouts/Layout'
import AppRouter from './routers/AppRouter'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
