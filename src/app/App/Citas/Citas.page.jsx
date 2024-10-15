import { Link } from 'react-router-dom'
import EMPTY from './../../../assets/empty.jpg'

const Citas = () => {
  return (
    <div className="px-4">
      <div>
        <h1 className="text-3xl font-bold pl-2 mb-4">Listado De Citas ❤️‍🔥</h1>
      </div>

      <div className="grid gap-3">
        {['', '', '', '', '', '', ''].map((item, index) => (
          <Link
            to={`/app/cita/${item.id}`}
            key={index}
            className="flex gap-4 bg-white p-2 w-full rounded-xl"
          >
            <div className="relative w-[40%] h-24 rounded-xl overflow-hidden">
              <div className="w-full h-full absolute bg-gray-100/50"></div>
              <img src={EMPTY} alt="" className="w-full h-full" />
            </div>

            <div className="grid justify-between w-[60%]">
              <p className="text-lg font-medium overflow-hidden text-ellipsis line-clamp-2 h-14">
                Ir al Parque y hacer un picnic
              </p>

              <div className="flex items-end gap-2">
                <p className="text-sm font-bold text-gray-400">Fecha:</p>
                <p className="text-sm font-bold text-gray-500">2024-05-02</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Citas
