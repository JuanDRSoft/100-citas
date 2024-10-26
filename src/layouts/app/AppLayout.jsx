import { Outlet } from 'react-router-dom'
import Badge from '../../components/Design/Badge'
import Avatar from './components/Avatar'
import Menu from './components/Menu'

const AppLayout = () => {
  return (
    <div className="bg-gray-100 w-screen">
      <div className="flex justify-between p-4">
        <div>
          <Menu />
        </div>

        <div className="flex gap-2">
          <Badge icon={'far fa-bell'} />
          <Avatar />
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  )
}

export default AppLayout
