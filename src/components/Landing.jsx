import React from 'react';
import stickerLogo from '../assets/sticker_logo.svg';
import headerImg from '../assets/header_img.svg';
import scrollDown from '../assets/scroll_down.svg';
import star from '../assets/Star.svg';

export default function Landing() {
  return (
    <div className='landing-container'>
      <img src={stickerLogo} alt="sticker logo" />
      <div className='landing-header-container'>
        <img src={headerImg} alt="heading" />
        <div>Crafting meaningful experiences through purposeful design.</div>
      </div>

      <div className="circle-container">
        <svg className='text1'>
          <text>
            <textPath href="#curve">Scroll to Explore</textPath>
          </text>
          <path id="curve" d="M110,0 A100,130 1 0,1 0,0" fill="transparent" />
        </svg>
        <svg className='text2'>
          <text>
            <textPath href="#curve">Scroll to Explore</textPath>
          </text>
          <path id="curve" d="M-100,0 A100,100 0 0,1 100,0" fill="transparent" />
        </svg>
        <img src={scrollDown} alt="scroll-down" className='scroll-icon' />
      </div>

      <div className='strip1-container'>
        <div className='strip1'>
          <span>Lightroom</span><img src={star} alt="star" />
          <span>Premiere pro</span><img src={star} alt="star" />
          <span>Chole Bhature</span><img src={star} alt="star" />
          <span>Figma</span><img src={star} alt="star" />
          <span>Product Design</span><img src={star} alt="star" />
          <span>Interactions</span><img src={star} alt="star" />
          <span>Prototypes</span><img src={star} alt="star" />
          <span>Travel</span><img src={star} alt="star" />
          <span>Photography</span><img src={star} alt="star" />
          <span>Videography</span><img src={star} alt="star" />
        </div>
      </div>

      <div className='strip2-container'>
        <div className='strip2'>
          <span>Lightroom</span><img src={star} alt="star" />
          <span>Premiere pro</span><img src={star} alt="star" />
          <span>Chole Bhature</span><img src={star} alt="star" />
          <span>Figma</span><img src={star} alt="star" />
          <span>Product Design</span><img src={star} alt="star" />
          <span>Interactions</span><img src={star} alt="star" />
          <span>Prototypes</span><img src={star} alt="star" />
          <span>Travel</span><img src={star} alt="star" />
          <span>Photography</span><img src={star} alt="star" />
          <span>Videography</span><img src={star} alt="star" />
        </div>
      </div>
    </div>
  )
}
