import { Link } from 'react-router-dom'
import Input from '../../../components/Forms/Input'
import { useState } from 'react'

const ForgotPass = () => {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [newPass, setnewPass] = useState('')
  const [repeat, setRepeat] = useState('')
  const [tab, setTab] = useState(1)

  return (
    <div className="p-5 pt-20">
      <Link to="/auth" className="absolute top-5 text-blue-500">
        <i className="fas fa-arrow-left"></i> VOLVER A LOGIN
      </Link>
      <h1 className="italianno-regular text-[100px] text-center">100 Citas</h1>

      {tab == 1 && (
        <div>
          <p className="text-center mb-10">Ingresa tu email usado para iniciar sesión</p>
          <div className="px-2 grid gap-5">
            <Input
              type={'text'}
              icon={'fas fa-at'}
              label={'Email'}
              value={email}
              setValue={setEmail}
            />
          </div>
        </div>
      )}

      {tab == 2 && (
        <div>
          <p className="text-center mb-10">Revisa tu email e ingresa el codigo recibido</p>
          <div className="px-2 grid gap-5">
            <Input type={'text'} label={'Codigo recibido'} value={code} setValue={setCode} />
          </div>
        </div>
      )}

      {tab == 3 && (
        <div>
          <p className="text-center mb-10">Ingresa tu nueva contraseña</p>
          <div className="px-2 grid gap-5">
            <Input
              type={'password'}
              label={'Nueva Contraseña'}
              value={newPass}
              setValue={setnewPass}
            />
            <Input
              type={'password'}
              label={'Repetir contraseña'}
              value={repeat}
              setValue={setRepeat}
            />
          </div>
        </div>
      )}

      <div className="px-2 grid gap-5 mt-10">
        {tab !== 3 ? (
          <button
            onClick={() => setTab(tab + 1)}
            className="bg-blue-500 text-white font-bold p-3 rounded-xl hover:bg-blue-700 duration-300"
          >
            SIGUIENTE
          </button>
        ) : (
          <button
            onClick={() => setTab(tab)}
            className="bg-blue-500 text-white font-bold p-3 rounded-xl hover:bg-blue-700 duration-300"
          >
            RESTABLECER
          </button>
        )}
      </div>
    </div>
  )
}

export default ForgotPass
