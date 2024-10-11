import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="landing h-screen">
      <div className="w-screen flex justify-between items-center px-10">
        <div className="w-full"></div>
        <div className="w-full">
          <h1 className="italianno-regular text-[60px] text-center text-white">100 Citas</h1>
        </div>
        <div className="flex gap-5 items-center w-full justify-end">
          <Link to="/auth" className="text-white font-bold">
            LOGIN
          </Link>
          <Link to="/auth/register" className="font-bold bg-white px-6 p-2 rounded-xl">
            REGISTRATE
          </Link>
        </div>
      </div>

      <div className="w-full text-center mt-14 text-white text-7xl italianno-regular">
        <h1>Registrate hoy!!</h1>
        <p>y descubre tus proximas 100 aventuras</p>
      </div>
    </div>
  )
}
export default Home
