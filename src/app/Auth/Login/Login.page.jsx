import { useState } from 'react'
import Input from '../../../components/Forms/Input'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="p-5 pt-20">
      <h1 className="italianno-regular text-[100px] text-center">100 Citas</h1>
      <p className="text-center mb-10">Ingresa tus datos para iniciar sesión</p>

      <div className="px-20 grid gap-5">
        <Input type={'text'} icon={'fas fa-at'} label={'Email'} value={email} setValue={setEmail} />
        <Input type={'password'} label={'Contraseña'} value={password} setValue={setPassword} />
      </div>

      <div className="px-20 mt-4">
        <Link to="forgot-password" className="text-sm text-blue-500 grid justify-end">
          Olvide mi contraseña
        </Link>

        <button className="mt-10 bg-blue-500 hover:bg-blue-800 font-bold text-white p-3 w-full rounded-xl duration-300 hover:shadow-xl">
          INICIAR SESIÓN
        </button>
        <Link to="register" className="grid justify-center mt-3 font-bold">
          REGISTRATE
        </Link>
      </div>
    </div>
  )
}

export default Login
