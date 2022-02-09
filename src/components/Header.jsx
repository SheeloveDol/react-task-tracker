import React from 'react';
import './header.css'; 
import Button from './Button'

const Header = ({ title }) => {
 
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' />

    </header>
  )
}

export default Header