import React from 'react';
import { useSetTitle } from '../../hooks/use-set-title';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import Slider from '../Slider/Slider';
import Nav from '../Slider/Nav/Nav';

import uberLogo from '../../assets/images/uber.svg';
import dropboxLogo from '../../assets/images/dropbox.svg';
import bytedanceLogo from '../../assets/images/bytedance.svg';
import snapLogo from '../../assets/images/snap.svg';

import SectionContentMain from '../Content/Section-content-main/Section-content-main';
import { competence, sectors, geography } from '../Content/Section-content-main/section-main-text';

function Main() {
  useSetTitle('SPB Global Capital Group');

  return (
    <div className='wrap wrap_bg_main'>
      <div className='wrapper-main'>
        <Header />
        <Banner>
          <h1 className='banner__h1 banner__h1_align_right'>
            Придумать идею просто, сложно ее реализовать
          </h1>
          <em className='banner__em'>
            Марк Са&#x301;харов, основатель SPB Global
          </em>
          <p className='banner__p'>
            SPB Global&nbsp;&ndash; глобальная венчурная компания, управляющая фондами и&nbsp;инвестирующая в&nbsp;перспективные компании по&nbsp;всему миру.
          </p>
          <p className='banner__p'>
            Портфель компании представлен ведущими игроками из&nbsp;самых разных секторов глобального рынка. Наши интересы шире, чем стартапы с&nbsp;оценочной стоимостью в&nbsp;10&nbsp;млрд.&nbsp;дол.
          </p>
          <p className='banner__p'>
            Мы помогаем реализовывать идеи.
          </p>
        </Banner>
      </div>
      <Section className='section_view_3-blocks section_bg-color_main'>
        <SectionContentMain 
          header='Компетенция'
          text={competence}
        />
        <SectionContentMain 
          header='Сектора'
          text={sectors}
        />
        <SectionContentMain 
          header='География'
          text={geography}
        />
      </Section>
      <Slider header='Недавние инвестиции' bgColor='bg-color-main'>
        <div id='panel-1' className='slider__item'>
          <div className='slider-nav'>
            <div className='anchor' data-href='#panel-2'>
              <Nav navDirection='next' />
            </div>
          </div>
          <div className='slider-content'>
            <img src={uberLogo} alt='Uber' />
            <p>
              Международная публичная компания из&nbsp;Сан-Франциско, создавшая одноимённое мобильное приложение для&nbsp;поиска, вызова и&nbsp;оплаты такси или&nbsp;частных водителей, а&nbsp;также доставки еды.
            </p>
          </div>
        </div>
        <div id='panel-2' className='slider__item'>
          <div className='slider-nav'>
            <div className='anchor' data-href='#panel-1'>
              <Nav navDirection='prev' />
            </div>
            <div className='anchor' data-href='#panel-3'>
              <Nav navDirection='next' />
            </div>
          </div>
          <div className='slider-content'>
            <img src={dropboxLogo} alt='Dropbox' />
            <p>
              Dropbox&nbsp;&ndash; компания из&nbsp;Сан-Франциско, предоставляющая пользователям персональное облачное хранилище, синхронизацию файлов и&nbsp;программу-клиент.
            </p>
          </div>
        </div>
        <div id='panel-3' className='slider__item'>
          <div className='slider-nav'>
            <div className='anchor' data-href='#panel-2'>
              <Nav navDirection='prev' />
            </div>
            <div className='anchor' data-href='#panel-4'>
              <Nav navDirection='next' />
            </div>
          </div>
          <div className='slider-content'>
            <img src={bytedanceLogo} alt='Bytedance' />
            <p>
              ByteDance Ltd.&nbsp;&ndash; китайская народная интернет-компания, владеющая рядом популярных сервисов. ByteDance входит в&nbsp;тройку ведущих &laquo;компаний-единорогов&raquo;
            </p>
          </div>
        </div>
        <div id='panel-4' className='slider__item'>
          <div className='slider-nav'>
            <div className='anchor' data-href='#panel-3'>
              <Nav navDirection='prev' />
            </div>
          </div>
          <div className='slider-content'>
            <img src={snapLogo} alt='Snapinc' />
            <p>
              Snap Inc.&nbsp;&ndash; американская компания, владеющая мессенджером Snapchat, а&nbsp;также другими продуктами: умными очками Spectacles, сервисами Bitmoji и&nbsp;Zenly.
            </p>
          </div>
        </div>
      </Slider>
      <Footer className='footer_bg-color_main' />
    </div>
  );
}

export default Main;
