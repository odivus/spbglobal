import React from 'react';
import './Footer-contacts.scss';

function FooterContacts() {
  return (
    <div className='footer-contacts-wrap'>
      <div className='footer-contacts'>
        <h4 className='footer-contacts__h4'>
          Silicon Valley
        </h4>
        <p className='footer-contacts__p'>
          555&nbsp;Hamilton Avenue, Suite&nbsp;555, Palo Alto, CA&nbsp;92301, USA
        </p>
        <p className='footer-contacts__p'>
          Tel.:&nbsp;555-123-44-55
          <br />E-mail:&nbsp;<a href='mailto: us@spb.com'>us@spb.com</a>
        </p>
      </div>
      <div className='footer-contacts'>
        <h4 className='footer-contacts__h4'>
          London
        </h4>
        <p className='footer-contacts__p'>
          5&nbsp;Fore Street Avenue London E55Y&nbsp;5DT, UK
        </p>
        <p className='footer-contacts__p'>
          Tel.:&nbsp;555-123-44-55
          <br />E-mail:&nbsp;<a href='mailto: ek@spb.com'>ek@spb.com</a>
        </p>
      </div>
      <div className='footer-contacts'>
        <h4 className='footer-contacts__h4'>
          Berlin
        </h4>
        <p className='footer-contacts__p'>
          Kurfürstendamm&nbsp;55 Berlin 55555, Germany
        </p>
        <p className='footer-contacts__p'>
          Tel.:&nbsp;555-123-44-55
          <br />E-mail:&nbsp;<a href='mailto: gb@spb.com'>gb@spb.com</a>
        </p>
      </div>
      <div className='footer-contacts'>
        <h4 className='footer-contacts__h4'>
          Paris
        </h4>
        <p className='footer-contacts__p'>
          55-55&nbsp;Rue des Archives Paris 55555, France
        </p>
        <p className='footer-contacts__p'>
          Tel.:&nbsp;555-123-44-55
          <br />E-mail:&nbsp;<a href='mailto: fr@spb.com'>fr@spb.com</a>
        </p>
      </div>
      <div className='footer-contacts'>
        <h4 className='footer-contacts__h4'>
          Moscow
        </h4>
        <p className='footer-contacts__p'>
          Gazetniy Pereulok&nbsp;5/55, Moscow 123456, Russia
        </p>
        <p className='footer-contacts__p'>
          Tel.:&nbsp;555-123-44-55
          <br />E-mail:&nbsp;<a href='mailto: ru@spb.com'>ru@spb.com</a>
        </p>
      </div>
      <div className='footer-contacts'>
        <h4 className='footer-contacts__h4'>
          Lugansk
        </h4>
        <p className='footer-contacts__p'>
          Sovetskaya Street 5/5&nbsp;Lugansk 91001, LNR
        </p>
        <p className='footer-contacts__p'>
          Tel.:&nbsp;49-97-53
          <br />E-mail:&nbsp;<a href='mailto: lnr@spb.com'>lnr@spb.com</a>
        </p>
      </div>
    </div>
  );
}

export default FooterContacts;
