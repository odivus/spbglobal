import React from 'react';
import contactsItemsContent from './contacts-items-content';

import './Contacts.scss';

function PortfolioItems() {
  return (
    <div className='gallery'>
      {
        contactsItemsContent.map((item, key) => (
          <div className='contacts contacts_bg_color' key={key}>
            <iframe src={`${item.src}`} allowFullScreen='' loading='lazy' title={`${item.title}`}>{item.description}</iframe>
            <div className='gallery-caption'>{item.description}</div>
          </div>
        ))
      }
    </div>
  );
}

export default PortfolioItems;
