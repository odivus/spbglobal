import React from 'react';
import './Section-content-main.scss';

function SectionContentMain({ header, text }) {
  return (
    <div className='section-content-main'>
      <h2>{header}</h2>
      <ul>
        {
          text.map((item, key) => (
            <li key={key}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default SectionContentMain;
