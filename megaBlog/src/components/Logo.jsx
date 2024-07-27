import React from 'react'
import logoImage from '../assets/Dlogo.png'
function Logo({width = '100px'}) {
  return (
    <div className='rounded-full overflow-hidden'>
      <img src={logoImage} width={width} alt="" />
    </div>
  )
}

export default Logo