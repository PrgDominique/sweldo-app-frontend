import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

// Layouts
import Layout from './components/layouts/Layout'
import AuthLayout from './components/layouts/AuthLayout'
import UserLayout from './components/layouts/UserLayout'
import AdminLayout from './components/layouts/AdminLayout'

// Main
import Home from './pages/home'

// Auth
import LoginPage from './pages/auth/login'
import Register from './pages/auth/register'
import ForgotPassword from './pages/auth/forgot_password'
import ResetPasswordPage from './pages/auth/reset_password'

// Verify
import VerifyAccountPage from './pages/verify/verify_account'

// User portal
import Dashboard from './pages/portal/user/dashboard'
import CalendarPage from './pages/portal/user/calendar'
import Profile from './pages/portal/user/profile'

// Admin portal
import AdminDashboardPage from './pages/portal/admin/admin_dashboard'
import EmployeePage from './pages/portal/admin/employee'

// Not found
import PageNotFound from './pages/404'

const router = createBrowserRouter([
  // Main
  {
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  // Auth
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'reset-password',
        element: <ResetPasswordPage />,
      },
    ],
  },
  // Verify
  {
    path: '/verify/account',
    element: <VerifyAccountPage />,
  },
  // User Portal
  {
    element: <UserLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'calendar',
        element: <CalendarPage />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ],
  },
  // Admin Portal
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',
        element: <AdminDashboardPage />,
      },
      {
        path: 'employee',
        element: <EmployeePage />
      }
    ]
  },
  // 404
  {
    path: '*',
    element: <PageNotFound />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
