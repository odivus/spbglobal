import React from 'react';
import portfolioItemsContent from './portfolio-items-content';

import uber from '../../assets/images/uber.svg';
import dropbox from '../../assets/images/dropbox.svg';
import bytedance from '../../assets/images/bytedance.svg';
import spacex from '../../assets/images/spacex.svg';
import wework from '../../assets/images/wework.svg';
import snap from '../../assets/images/snap.svg';

import './Portfolio.scss';

function PortfolioItems() {
  const logos = {
    uber: uber,
    dropbox: dropbox,
    bytedance: bytedance,
    snap: snap,
    spacex: spacex,
    wework: wework,
  }

  return (
    <div className='gallery'>
      {
        portfolioItemsContent.map((item, key) => (
          <div className='portfolio portfolio_bg_color' key={key}>
            <a href={`${item.url}`} target='_blank' rel='noreferrer'>&nbsp;</a>
            <img src={logos[item.name]} alt={`${item.alt}`} />
            <div className='portfolio__description'>
              {item.description}
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default PortfolioItems;
