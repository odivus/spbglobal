import React, {useState} from 'react';
import { useSetTitle } from '../../hooks/use-set-title';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import ConsultingForm from '../Ui/Forms/Consulting-form';
import SubscribeForm from '../Ui/Forms/Subscribe-form';
import SubmitMessage from '../Ui/Submit-message/Submit-message';


function Forinvestors() {
  const [isPhoneSubmit, setIsPhoneSubmit] = useState(false);
  const [isEmailSubmit, setIsEmailSubmit] = useState(false);
  
  useSetTitle('SPB Global \u2013 инвесторам');
  
  return (
    <div className='wrap'>
      <div className='wrapper-forinvestors'>
        <Header />
        <Banner>
          <h1 className='banner__h1'>
            Надежное партнерство
          </h1>
          <p className='banner__p'>
            Приглашаем частных и&nbsp;аккредитованных инвесторов в&nbsp;наш клуб, который помогает собрать индивидуальный портфель венчурных инвестиций, предоставляет доступ к&nbsp;данным потока проектов и&nbsp;аналитике фонда.
          </p>
        </Banner>
      </div>
      <Section className='section_view_2-blocks section_bg-color_forinvestors'>
        <div className='section__block-1'>
          <h2>Консультации</h2>
          <p>
            Для получения более подробной информации о&nbsp;возможностях клуба, пожалуйста заполните форму ниже.
          </p>
          <p>
            Наш консультант перезвонит вам.
          </p>
          <ConsultingForm 
            isSubmit={isPhoneSubmit}
            setIsSubmit={setIsPhoneSubmit} 
          />
          <SubmitMessage isSubmit={isPhoneSubmit}>
            Спасибо, наш консультант свяжется с&nbsp;вами в&nbsp;ближайшее время
          </SubmitMessage>
        </div>
        <div>
          <h2>Рассылка</h2>
          <p>
            Новые сделки, актуальные новости портфельных компаний, достоверная экспертиза&nbsp;&ndash; в&nbsp;еженедельной почтовой рассылке.
          </p>
          <SubscribeForm
            isSubmit={isEmailSubmit}
            setIsSubmit={setIsEmailSubmit}
          />
          <SubmitMessage isSubmit={isEmailSubmit}>
            Вы&nbsp;подписались на&nbsp;еженедельную информационную рассылку фонда
          </SubmitMessage>
        </div>
      </Section>
      <Footer className='footer_bg-color_forinvestors' />
    </div>
  );
}

export default Forinvestors;
