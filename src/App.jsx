import { useEffect, useState } from 'react'
// import Calendar from './components/Calendar/Calendar'
import axios from 'axios'

function App() {
  const [info, setInfo] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://sheer-alpaca-jthreeagency-oficial-2846734e.koyeb.app/api/citas`
      )
      setInfo(data)
    }

    getData()
  }, [])

  const [searchTerm, setSearchTerm] = useState('')

  // Filtrar títulos en función del término de búsqueda
  const filteredTitles = info.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addNew = async () => {
    const { data } = await axios.post(
      `https://sheer-alpaca-jthreeagency-oficial-2846734e.koyeb.app/api/citas`,
      {
        title: searchTerm
      }
    )

    setInfo([data, ...info])
    setSearchTerm('')
  }

  return (
    <div className="flex justify-center p-5 bg-gray-50 w-screen">
      <div className="w-full">
        <div className="flex gap-3 mb-4 items-center">
          <textarea
            name=""
            id=""
            className="border border-black rounded-xl w-full p-2 text-lg h-40"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></textarea>
          <button onClick={addNew} className="w-52 bg-blue-500 rounded-xl text-white font-bold p-2">
            AGREGAR
          </button>
        </div>

        <ul className="overflow-y-auto h-[58vh]">
          {filteredTitles.map((title, index) => (
            <li
              key={index}
              className="bg-white my-2 shadow-xl p-4 font-bold border border-black rounded-xl"
            >
              {title.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
