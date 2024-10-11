import { Outlet } from 'react-router-dom'
import Badge from '../../components/Design/Badge'
import Avatar from './components/Avatar'

const AppLayout = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen">
      <div className="flex justify-between p-4">
        <div>
          <Badge icon={'fas fa-bars'} />
        </div>

        <div className="flex gap-2">
          <Badge icon={'far fa-bell'} />
          <Avatar />
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default AppLayout
