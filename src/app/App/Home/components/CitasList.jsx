import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const CitasList = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">Citas</h1>

        <Link className="text-gray-400 font-medium" to="citas">
          VER TODO {'>'}
        </Link>
      </div>

      <div className="bg-white rounded-xl p-2 px-4 mt-2">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-xl">Progreso en citas</h1>
          <div className="flex h-12 w-12 bg-gray-100 rounded-full justify-center items-center">
            <i className="fas fa-list-alt"></i>
          </div>
        </div>

        <div className="mt-2 mb-3">
          <p className="mb-5">Has logrado realizar 20 citas de 100 junto a pareja</p>

          <ProgressBar count={20} max={100} />
        </div>
      </div>
    </div>
  )
}

export default CitasList
