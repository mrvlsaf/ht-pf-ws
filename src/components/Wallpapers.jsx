import React from 'react';
import wp1 from '../assets/wp1.png';
import wp2 from '../assets/wp2.png';
import wp3 from '../assets/wp3.png';
import wp4 from '../assets/wp4.png';
import wp5 from '../assets/wp5.png';
import wp6 from '../assets/wp6.png';

export default function Wallpapers() {
  return (
    <div className='wallpaper-container'>
      <div className='work-heading'>Shot on iPhone</div>
      <div className='wallpaper-img-container'>
        <img src={wp1} alt="wp1" />
        <img src={wp2} alt="wp1" />
        <img src={wp3} alt="wp1" />
        <img src={wp4} alt="wp1" />
        <img src={wp5} alt="wp1" />
        <img src={wp6} alt="wp1" />
      </div>
    </div>
  )
}
