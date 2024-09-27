import { useState } from 'react'

/* eslint-disable react/prop-types */
const Input = ({ type, icon, label, value, setValue }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="relative">
      {type == 'date' ? (
        <label
          className={`absolute left-4 font-semibold duration-300 z-10 ${
            value && 'text-blue-500'
          } top-0`}
        >
          {label}
        </label>
      ) : (
        <label
          className={`absolute left-4 font-semibold duration-300 z-10 ${
            value !== '' ? 'text-blue-500 top-0' : 'text-gray-400 top-5'
          }`}
        >
          {label}
        </label>
      )}
      {type == 'password' ? (
        <input
          type={show ? 'text' : 'password'}
          value={value}
          className="w-full bg-gray-100 rounded-lg pt-6 px-5 pb-3"
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          type={type}
          value={value}
          className="w-full bg-gray-100 rounded-lg pt-6 px-3 pb-3"
          onChange={(e) => setValue(e.target.value)}
        />
      )}

      {type == 'password' && (
        <i
          className={`${
            !show ? 'fas fa-lock' : 'fas fa-lock-open'
          } text-xl absolute right-2 top-4 text-gray-400 hover:text-black duration-200 cursor-pointer`}
          onClick={() => setShow(!show)}
        ></i>
      )}

      {icon && <i className={`${icon} text-xl absolute right-2 top-4 text-gray-400`}></i>}
    </div>
  )
}

export default Input
