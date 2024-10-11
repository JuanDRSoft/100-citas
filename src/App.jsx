import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import Home from './app/Landing/Home/Home.page'
import AuthLayout from './layouts/AuthLayout'
import Login from './app/Auth/Login/Login.page'
import Register from './app/Auth/Register/Register.page'
import ForgotPass from './app/Auth/Forgot-Password/ForgotPass.page'
import Dashboard from './app/App/Home/Dashboard.page'
import AppLayout from './layouts/app/AppLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Navigate to="/auth" />} />

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPass />} />
        </Route>

        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
