import { Outlet } from 'react-router-dom'
import CopyrightItem from '../utils/CopyrightItem'

const AuthLayout = () => {
  return (
    <div className="w-full h-screen fondo">
      <div className="bg-white w-2/5 shadow-xl h-full relative">
        <Outlet />

        <div className="absolute bottom-1 flex justify-center w-full">
          <CopyrightItem />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
