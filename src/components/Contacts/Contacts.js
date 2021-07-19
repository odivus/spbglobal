import React from 'react';
import { useSetTitle } from '../../hooks/use-set-title';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ContactsItems from '../Contacts/Contacts-items';

function Contacts() {
  useSetTitle('SPB Global \u2013 контакты');
  
  return (
    <div className='wrap'>
      <div className='wrapper-contacts'>
        <Header />
        <Banner>
          <h1 className='banner__h1'>На связи</h1>
          <p className='banner__p'>
            Мы&nbsp;ждем ваши вопросы и&nbsp;предложения:<br /><a href='mailto: mail@spbglobal.com'>us@spb.com</a><br />+1&nbsp;555-444-3322
          </p>
        </Banner>
      </div>
      <ContactsItems />
      <Footer className='footer_bg-color_contacts' />
    </div>
  );
}

export default Contacts;
