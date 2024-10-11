/* eslint-disable react/prop-types */
import AVATAR from './../../../assets/avatar1.png'
import AVATAR2 from './../../../assets/avatar2.png'

const Avatar = ({ type = 2 }) => {
  return (
    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
      {type == 1 && <img src={AVATAR} alt="avatar" />}
      {type == 2 && <img src={AVATAR2} alt="avatar" className="w-8" />}
    </div>
  )
}

export default Avatar
