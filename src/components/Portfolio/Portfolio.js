import React from 'react';
import { useSetTitle } from '../../hooks/use-set-title';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import PortfolioItems from './Portfolio-items';

import './Portfolio.scss';

function Portfolio() {
  useSetTitle('SPB Global \u2013 портфолио');

  return (
    <div className='wrap'>
      <div className='wrapper-portfolio'>
        <Header />
        <Banner>
          <h1 className='banner__h1'>
            Выгодные инвестиции
          </h1>
          <p className='banner__p'>
            Мы&nbsp;инвестировали 100500&nbsp;компаний в&nbsp;150 странах. В&nbsp;нашем портфолио 1500&nbsp;учредителей, интенсивно работающих над&nbsp;улучшением мира.
          </p>
        </Banner>
      </div>
      <PortfolioItems />
      <Footer className='footer_bg-color_portfolio' />
    </div>
  );
}

export default Portfolio;
