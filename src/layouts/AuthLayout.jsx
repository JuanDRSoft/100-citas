import { Outlet } from 'react-router-dom'
import CopyrightItem from '../utils/CopyrightItem'

const AuthLayout = () => {
  return (
    <div className="w-full h-screen">
      <Outlet />

      <div className="fixed bottom-0 flex justify-center w-full bg-white border-t pt-1">
        <CopyrightItem />
      </div>
    </div>
  )
}

export default AuthLayout
