import React from 'react';
import design1 from '../assets/design1.png';
import design2 from '../assets/design2.png';
import design3 from '../assets/design3.png';
import design4 from '../assets/design4.png';
import design5 from '../assets/design5.png';
import design6 from '../assets/design6.png';

export default function Designs() {
  return (
    <div className='design-container'>
      <div className='work-heading'>Designs</div>
      <div className='design-inner-container'>
        <div><img src={design1} alt="design 1" /></div>
        <div><img src={design2} alt="design 1" /></div>
        <div><img src={design3} alt="design 1" /></div>
        <div><img src={design4} alt="design 1" /></div>
        <div><img src={design5} alt="design 1" /></div>
        <div><img src={design6} alt="design 1" /></div>
      </div>
    </div>
  )
}
