/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import SelectMonth from './components/SelectMonth'

const data = [{ date: '2024-10-04 03:00:00' }, { date: '2024-09-04 03:00:00' }]
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

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [activeDates, setActiveDates] = useState([])

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

  useEffect(() => {
    if (data.length) {
      const array = []
      for (let i = 0; i < data.length; i++) {
        const dateMonth = new Date(data[i].date).getMonth()
        const dateYear = new Date(data[i].date).getFullYear()
        if (dateMonth == month && dateYear == year) {
          array.push(data[i])
        }
      }
      setActiveDates(array)
    }
  }, [data, month, year])

  return (
    <div className="grid gap-3">
      <SelectMonth setCurrentDate={setCurrentDate} months={months} currentDate={currentDate} />

      <div className="grid grid-cols-7 gap-2 overflow-hidden p-5 bg-white rounded-3xl">
        {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((dayName) => (
          <div className="flex justify-center items-center uppercase text-xl w-10" key={dayName}>
            {dayName}
          </div>
        ))}

        {daysArray.map((day, index) => {
          const find = activeDates.find((e) => Number(new Date(e.date).getDate()) == day)
          return (
            <div
              key={index}
              className={`${find && '!bg-blue-500 text-white'}
                ${
                  !day && 'bg-white'
                }  bg-gray-100 w-10 h-10 text-xl rounded-full flex justify-center items-center`}
            >
              {day || ''}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar
