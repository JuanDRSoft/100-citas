/* eslint-disable react/prop-types */
const Badge = ({ bgColor, icon, witdh, heigth }) => {
  return (
    <div
      className={`${bgColor ? bgColor : 'bg-white'} rounded-full ${witdh ? `w-${witdh}` : 'w-12'}
         ${heigth ? `h-${heigth}` : 'h-12'} flex justify-center items-center`}
    >
      <i className={`${icon} text-xl`}></i>
    </div>
  )
}

export default Badge