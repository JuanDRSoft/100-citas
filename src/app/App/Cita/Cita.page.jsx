import EMPTY from '../../../assets/agregar.png'

const Cita = () => {
  return (
    <div className="px-4">
      <h1 className="font-bold text-3xl">Hacer un picnic en el parque</h1>
      <div className="bg-white rounded-2xl mt-4 w-full p-5">
        <div className="flex justify-center items-center h-[400px] border rounded-xl overflow-hidden">
          <img src={EMPTY} alt="" className="w-52 opacity-40" />
        </div>
        {/* <div className="flex justify-center items-center h-full">
          <img src={PRUEBA} alt="" />
        </div> */}
      </div>

      <button className="bg-blue-500 w-full mt-4 p-2 rounded-2xl font-bold text-white">
        GUARDAR
      </button>
    </div>
  )
}

export default Cita
