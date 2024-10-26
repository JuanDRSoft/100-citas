import { useNavigate } from 'react-router-dom'
import { menuItems } from '../../../utils/data'
import Badge from '../../../components/Design/Badge'
import { useState } from 'react'

const Menu = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const onLink = (url) => {
    navigate(url)
    setOpen(false)
  }

  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <Badge icon={'fas fa-bars'} />
      </div>

      <div
        className={`absolute top-0 ${
          open ? 'w-screen' : 'w-0'
        } duration-200 h-[100vh] bg-black/40 left-0 ${open ? 'z-50' : '-z-10'}`}
      >
        <div
          className={`${
            open ? 'w-1/2' : 'w-0'
          } h-full bg-black rounded-r-3xl flex flex-col justify-between relative duration-200`}
        >
          <div className="p-2">
            <h1 className="text-white text-3xl font-bold">Menu</h1>

            <div className="mt-10 grid">
              {menuItems.map((item, index) => (
                <div
                  onClick={() => onLink(item.url)}
                  key={index}
                  className="text-white p-2 text-xl font-semibold uppercase flex items-center gap-3"
                >
                  <i className={item.icon}></i>
                  {item.title}
                </div>
              ))}
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 bg-blue-500 absolute -right-5 top-5 rounded-full"
            >
              <i className="fas fa-arrow-left text-xl text-white"></i>
            </button>
          </div>

          <button className="text-white text-center w-full font-bold flex gap-2 justify-center items-center p-2">
            <i className="fas fa-sign-out-alt"></i>CERRAR SESIÓN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Menu
