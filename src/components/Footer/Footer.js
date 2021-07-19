import React from 'react';
import FooterContacts from './Footer-contacts';

import './Footer.scss';

function Footer({ className }) {
  return (
    <footer className={`footer ${className}`}>
      <div className='footer__item'>
        &copy;&nbsp;2021&nbsp;SPB&nbsp;Global Capital&nbsp;Group
      </div>
      <FooterContacts />
      <div className='footer__item'>
        Дизайн и&nbsp;разработка <a href='https://odivus.github.io'>odivus.github.io</a>
      </div>
    </footer>
  );
}

export default Footer;
