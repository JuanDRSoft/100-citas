import { useState } from 'react'
import EMPTY from '../../../assets/agregar.png'
import Input from '../../../components/Forms/Input'

const Cita = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div className="px-4">
      <h1 className="font-bold text-3xl">Hacer un picnic en el parque</h1>
      <div className="h-[77vh] overflow-y-auto">
        <div className="bg-white rounded-2xl mt-4 w-full p-5">
          <label
            htmlFor="upload"
            className="flex justify-center items-center h-[400px] border rounded-xl overflow-hidden"
          >
            <img src={EMPTY} alt="" className="w-52 opacity-40" />
          </label>

          <input type="file" id="upload" className="hidden" />
          {/* <div className="flex justify-center items-center h-full">
          <img src={PRUEBA} alt="" />
        </div> */}
        </div>

        <div className="bg-white p-5 mt-3 rounded-2xl">
          <Input type={'date'} label={'Fecha'} setValue={setDate} value={date} />
        </div>

        <button className="bg-blue-500 w-full mt-4 p-2 rounded-2xl font-bold text-white mb-4">
          GUARDAR
        </button>
      </div>
    </div>
  )
}

export default Cita
