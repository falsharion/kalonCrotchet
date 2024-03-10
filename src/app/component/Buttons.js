import React from 'react'

const Button = ({ label, handleClick }) => {
  return (
    <button
    className="py-4 px-6 mb-10 uppercase rounded-md text-white bg-orange-700"
  >
    {label}
  </button>
  )
}

export default Button
