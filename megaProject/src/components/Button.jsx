import React, { Children } from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className='',
    ...props
}) {
  return (
    <button className={`px-4 pt-2 rounded-lg ${className} ${type} ${bgColor} ${textColor}`} {...props}>
      {Children}
    </button>
  )
}

export default Button
