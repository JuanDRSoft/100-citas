import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingLayout from './layouts/LandingLayout'
import Home from './app/Landing/Home/Home.page'
import AuthLayout from './layouts/AuthLayout'
import Login from './app/Auth/Login/Login.page'
import Register from './app/Auth/Register/Register.page'
import ForgotPass from './app/Auth/Forgot-Password/ForgotPass.page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
