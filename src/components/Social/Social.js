import React from 'react';

import facebookLogo from '../../assets/images/facebook.svg';
import twitterLogo from '../../assets/images/twitter.svg';
import linkedinLogo from '../../assets/images/linkedin.svg';

import './Social.scss';

function Social({ className }) {
  return (
    <div className={`social ${className}`}>
      <a href='https://facebook.com'>
        <img 
          className='social__img' 
          src={facebookLogo}
          alt='facebook'
        ></img>
      </a>
      <a href='https://linkedin.com'>
        <img
          className='social__img'
          src={linkedinLogo}
          alt='linkedin'
        ></img>
      </a>
      <a href='https://twitter.com'>
        <img 
          className='social__img' 
          src={twitterLogo}
          alt='twitter'
        ></img>
      </a>
    </div>
  );
}

export default Social;
