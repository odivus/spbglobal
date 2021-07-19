import React, { useState } from 'react';
import { useSetTitle } from '../../hooks/use-set-title';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';

import FeedbackForm from '../Ui/Forms/Feedback-form';
import SubmitMessage from '../Ui/Submit-message/Submit-message';

import './Forstartups.scss';

function Forstartups() {
  const [isSubmit, setIsSubmit] = useState(false);
  
  useSetTitle('SPB Global \u2013 стартапам');

  return (
    <div className='wrap'>
      <div className='wrapper-forstartups'>
        <Header />
        <Banner>
          <h1 className='banner__h1'>
            Наша поддержка
          </h1>
          <p className='banner__p'>
            Мы восхищаемся и&nbsp;поддерживаем основателей стартапов, готовых упорно трудиться, для достижения амбициозных целей.
          </p>
        </Banner>
      </div>
      <Section className='section section_view_2-blocks section_bg-color_forstartups'>
        <div className='section__block-1'>
          <h2>На&nbsp;старт</h2>
          <p>
            Наш фонд инвестирует в&nbsp;компании на&nbsp;ранних стадиях, мы&nbsp;хорошо понимаем жизненный цикл стартапа от&nbsp;идеи до&nbsp;старта.
          </p>
          <p>
            Мы не&nbsp;только инвестируем, но&nbsp;и&nbsp;делимся накопленными знаниями и&nbsp;огромным опытом для построения успешной и&nbsp;устойчивой бизнес-модели.
          </p>
        </div>
        <div>
          <h2>Наш интерес</h2>
          <p>
            Мы&nbsp;готовы сотрудничать с&nbsp;компанией, основанной 1&ndash;2 года назад, с&nbsp;потенциалом роста капитализации от&nbsp;150&nbsp;млн.&nbsp;дол.
          </p>
          <p>
            Обязательно наличие рынка достаточной емкости (от&nbsp;1&nbsp;млрд.&nbsp;дол. и&nbsp;выше).
          </p>
          <p>
            Наличие первых клиентов, пользователей кратно увеличивает взаимовыгодную сделку.
          </p>
        </div>
      </Section>
      <Section className='section section_view_2rows section_bg-color_forstartups'>
        <div className='feedback'>
          <h2>Обратная связь</h2>
          <p>
            Для получения более подробной информации о&nbsp;возможностях финансирования вашего стартапа, пожалуйста, заполните форму ниже.
          </p>
          <p>
            Если ваш стартап подходит под требования фонда, наши консультанты свяжутся с&nbsp;вами в&nbsp;самое ближайшее время.
          </p>
        </div>
        <FeedbackForm
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
        />
        <SubmitMessage isSubmit={isSubmit}>
          Наш консультант свяжется с&nbsp;вами в&nbsp;ближайшее время
        </SubmitMessage>
      </Section>
      <Footer className='footer_bg-color_forstartups' />
    </div>
  );
}

export default Forstartups;
