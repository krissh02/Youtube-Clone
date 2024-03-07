import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='border border-gray-200 border-solid px-4 mt-6 mb-3 mx-2 py-2 rounded-lg bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button