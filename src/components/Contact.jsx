import React from 'react';
import socialMediaIcon from '../assets/social_media_icon.svg'

export default function Contact() {
  return (
    <div className='contact-container'>
      <div className='work-heading'>Contact</div>
      <div className='contact-inner-container'>
        <div className='contact-head-container'>
          <div className='contact-head-title'>
            <div>Let's Work</div>
            <div>Together</div>
          </div>
          <div className='contact-head-mail'>harshittewatia12@gmail.com</div>
        </div>
        <hr />
        <div className='social-media-container'>
          <span>Instagram <img src={socialMediaIcon} alt="social media icon" /></span>
          <span>Linkedin <img src={socialMediaIcon} alt="social media icon" /></span>
          <span>Behance <img src={socialMediaIcon} alt="social media icon" /></span>
          <span>Medium <img src={socialMediaIcon} alt="social media icon" /></span>
          <span>Dribble <img src={socialMediaIcon} alt="social media icon" /></span>
        </div>
      </div>
    </div>
  )
}
