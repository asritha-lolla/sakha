import { Route, Routes } from 'react-router-dom'
import HomePage from '@pages/HomePage'
import { SignIn, SignUp } from '../auth'
import { AppLayout, AuthLayout } from '../layout'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
