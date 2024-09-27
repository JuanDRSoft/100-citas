import { useState } from 'react'
import Input from '../../../components/Forms/Input'
import { Link } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')
  const [email, setEmail] = useState('')
  const [pairEmail, setPairEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="px-5">
      <h1 className="italianno-regular text-[100px] text-center">100 Citas</h1>
      <p className="text-center mb-10">Ingresa tus datos para registrarte</p>

      <div className="px-20 grid gap-5">
        <Input type={'text'} label={'Nombre Completo'} value={name} setValue={setName} />
        <Input type={'date'} label={'Fecha de cumpleaños'} value={birth} setValue={setBirth} />
        <Input
          type={'email'}
          icon={'fas fa-at'}
          label={'Email'}
          value={email}
          setValue={setEmail}
        />
        <Input type={'password'} label={'Contraseña'} value={password} setValue={setPassword} />
        <Input
          type={'email'}
          label={'Email de tu pareja'}
          icon={'fas fa-heart'}
          value={pairEmail}
          setValue={setPairEmail}
        />
      </div>

      <div className="px-20 mt-4">
        <button className="mt-10 bg-blue-500 hover:bg-blue-800 font-bold text-white p-3 w-full rounded-xl duration-300 hover:shadow-xl">
          REGISTRATE
        </button>
        <Link to="/auth" className="grid justify-center mt-3 font-bold">
          INICIAR SESIÓN
        </Link>
      </div>
    </div>
  )
}

export default Register
