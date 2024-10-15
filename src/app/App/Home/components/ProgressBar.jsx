/* eslint-disable react/prop-types */
const ProgressBar = ({ max, count }) => {
  const percent = (max * count) / 100
  return (
    <div className="bg-gray-100 w-full h-4 rounded-full overflow-hidden">
      <div className="bg-green-500 h-4 rounded-full" style={{ width: percent + '%' }}></div>
    </div>
  )
}

export default ProgressBar
