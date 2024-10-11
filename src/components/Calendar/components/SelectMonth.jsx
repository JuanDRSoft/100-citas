/* eslint-disable react/prop-types */
const SelectMonth = ({ months, currentDate, setCurrentDate }) => {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const openAndClose = () => {
    document.getElementById('months_select').classList.toggle('hidden')
  }

  return (
    <div className="w-full flex justify-between items-center relative">
      <div className="flex bg-white p-2 rounded-full gap-4">
        <button onClick={() => setCurrentDate(new Date(year - 1, month))}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <span className="text-xl">{year}</span>

        <button onClick={() => setCurrentDate(new Date(year + 1, month))}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div
        className="bg-white p-2 px-5 rounded-full flex items-center gap-3"
        onClick={openAndClose}
      >
        <i className="far fa-calendar-alt"></i>
        <p className="text-xl">{months[month + 1]}</p>
        <i className="fas fa-chevron-down"></i>
      </div>

      <div
        className="absolute top-12 bg-white w-1/2 rounded-xl px-5 right-0 hidden"
        id="months_select"
      >
        {months.map((item, index) => (
          <div
            className={`text-center ${index !== 12 && 'border-b'} text-xl ${index !== 0 && 'p-2'}`}
            key={index}
            onClick={() => setCurrentDate(new Date(year, index - 1))}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectMonth
