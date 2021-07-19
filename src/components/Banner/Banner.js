import React from 'react';
import './Banner.scss';

function Banner({ children }) {
  return (
    <div className='banner-wrap'>
      <div className='banner'>
        {children}
      </div>
    </div>
  );
}

export default Banner;
