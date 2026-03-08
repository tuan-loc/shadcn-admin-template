import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from '@/components/loader'

const Dashboard = lazy(() => import('@/pages/dashboard'))
const SignIn = lazy(() => import('@/pages/auth/sign-in'))
const SignIn2 = lazy(() => import('@/pages/auth/sign-in-2'))
const ForgotPassword = lazy(() => import('@/pages/auth/forgot-password'))
const SignUp = lazy(() => import('@/pages/auth/sign-up'))

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-in-2' element={<SignIn2 />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </Suspense>
  )
}
