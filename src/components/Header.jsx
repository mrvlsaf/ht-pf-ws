import React from 'react'
import HT_logo from '../assets/HT.svg';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <span>Work</span>
        <span>Photography</span>
        <img src={HT_logo} alt="HT_logo" />
        <span>Wallpapers</span>
        <span>Contact</span>
      </div>
    </div>
  )
}
