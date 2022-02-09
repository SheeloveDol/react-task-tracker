import React from 'react'

const Button = ({ color, text }) => {
  const onClick = (e) => {
    console.log('I was clicked!!');
  }

  return (
    <button 
      onClick={onClick}
      className='btn' 
      style={{ backgroundColor: color }} 
    >{text}
    </button>
  )
}

export default Button