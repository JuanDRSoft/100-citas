import { useState } from 'react'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const months = [
    '',
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate() // El último día del mes
  }

  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay() // El primer día del mes
  }

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  const daysArray = []
  for (let i = 0; i < firstDay; i++) {
    daysArray.push(null) // Días vacíos antes del primer día del mes
  }

  for (let day = 1; day <= daysInMonth; day++) {
    daysArray.push(day)
  }
  return (
    <div className="">
      <div className="w-full justify-center flex mb-5 bg-cyan-900">
        <button
          className="bg-blue-500 p-1 px-5 text-white font-bold rounded-l-xl"
          onClick={() => setCurrentDate(new Date(year, month - 1))}
        >
          {'<'}
        </button>
        <span className="border px-10 flex items-center">{`${year}  ${months[month + 1]}`}</span>
        <button
          className="bg-blue-500 p-1 px-5 font-bold text-white rounded-r-xl"
          onClick={() => setCurrentDate(new Date(year, month + 1))}
        >
          {'>'}
        </button>
      </div>
      <div className="grid grid-cols-7 gap-5 border rounded-b-2xl overflow-hidden p-5 bg-sky-300">
        {['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'].map((dayName) => (
          <div className="text-center uppercase font-bold" key={dayName}>
            {dayName}
          </div>
        ))}

        {daysArray.map((day, index) => (
          <div
            key={index}
            className="text-center hover:bg-blue-400 rounded-full font-bold text-white"
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
