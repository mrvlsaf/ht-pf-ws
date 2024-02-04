import React from 'react';
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work3 from '../assets/work3.png';
import viewProductIcon from '../assets/view_product_icon.svg';

export default function Designs() {
  return (
    <div className='work-container'>
      <div className='work-heading'>Work</div>

      <div className='work-card-container'>
        <div className='work-card-header-container'>
          <div>
            <div className='work-card-title'>Product</div>
            <div className='work-card-title'>Photography App</div>
            <div className='work-card-caption'>App Design</div>
          </div>
          <div className='work-card-view-button'>
            <span>View Project</span>
            <img src={viewProductIcon} alt="view product" />
          </div>
        </div>
        <div className='work-card-img-container'>
          <img src={work1} alt="work 1" />
        </div>
      </div>

      <div className='work-card-container'>
        <div className='work-card-img-container'>
          <img src={work2} alt="work 1" />
        </div>
        <div style={{ paddingLeft: "1em" }} className='work-card-header-container'>
          <div>
            <div className='work-card-title'>Product</div>
            <div className='work-card-title'>Photography App</div>
            <div className='work-card-caption'>App Design</div>
          </div>
          <div className='work-card-view-button'>
            <span>View Project</span>
            <img src={viewProductIcon} alt="view product" />
          </div>
        </div>
      </div>

      <div className='work-card-container'>
        <div className='work-card-header-container'>
          <div>
            <div className='work-card-title'>Product</div>
            <div className='work-card-title'>Photography App</div>
            <div className='work-card-caption'>App Design</div>
          </div>
          <div className='work-card-view-button'>
            <span>View Project</span>
            <img src={viewProductIcon} alt="view product" />
          </div>
        </div>
        <div className='work-card-img-container'>
          <img src={work3} alt="work 1" />
        </div>
      </div>
    </div>
  )
}
