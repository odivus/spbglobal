import React from 'react';
import { useSetTitle } from '../../hooks/use-set-title';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';
import Slider from '../Slider/Slider';
import Nav from '../Slider/Nav/Nav';

function About() {
  useSetTitle('SPB Global \u2013 о фонде');

  return (
    <div className='wrap'>
      <div className='wrapper-about'>
        <Header />
        <Banner>
          <h1 className='banner__h1'>
            Експертиза
          </h1>
          <p className='banner__p'>
            Наша международная екпертиза и&nbsp;знание особенностей работы в&nbsp;отдельных странах, позволяют нам разрабатывать и&nbsp;внедрять уникальные стратегии для продвижения стартапов в&nbsp;Северной Америке, Европе, Азии, Индии и&nbsp;Китае.
          </p>
        </Banner>
      </div>
      <Section className='section_view_2-blocks section_bg-color_about'>
        <div className='section__block-1'>
          <h2>Опыт</h2>
          <p>
            Наш фонд находится под управлением опытных руководителей с&nbsp;превосходным предпринимательским опытом в&nbsp;сфере стартапов, финансов и&nbsp;управления.
          </p>
          <p>
            Наши партнеры и&nbsp;основатели запустили несколько глобальных стартапов, сумарная оценочная стоимость которых достигла 100500 триллионов долларов.
          </p>
          <p>
            Накопленный многолетний опыт позволяет нам находить наиболее выгодные решения в&nbsp;продвижении стартапов и&nbsp;повышении капитализации компаний.
          </p>
        </div>
        <div>
          <h2>Сеть</h2>
          <p>
            Наша трансатлантическая инвестиционная сеть покрывает более 150 стран, что позволяет учредителям развивать сверхвыгодные партнерские отношения по&nbsp;всему миру.
          </p>
          <p>
            Мы достаточно быстро выводим стартап на&nbsp;мировой рынок, помогаем создавать и&nbsp;масштабировать работающие бизнес-процессы.
          </p>
          <p>
            Наши уникальные инвестиционные стратегии дают весомое конкурентное преимущество учредителям.
          </p>
        </div>
      </Section>
      <Slider header='История' bgColor='bg-color-about'>
        <div id='panel-1' className='slider__item'>
          <div className='slider-nav'>
            <div className='anchor' data-href='#panel-2'>
              <Nav navDirection='next' />
            </div>
          </div>
          <div className='slider-content'>
            <h3 className='content-h3'>1998</h3>
            <p>
              Марк Сахаров занял 99&nbsp;дол. у&nbsp;соседа в&nbsp;студенческом общежитии и&nbsp;заказал создание социальной сети &laquo;Лицо-книга&raquo; у&nbsp;студента-фрилансера из&nbsp;Индии
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
            <h3 className='content-h3'>2008</h3>
            <p>
              Марк получил первые инвестиции на&nbsp;развитие стартапа в&nbsp;размере 777&nbsp;млн.&nbsp;дол. от&nbsp;банка Лемон Бразерс
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
            <h3 className='content-h3'>2012</h3>
            <p>
              Марк продал стартап компании Гуголь за&nbsp;1&nbsp;триллион долл. и&nbsp;основал венчурный фонд
            </p>
          </div>
        </div>
        <div id='panel-4' className='slider__item'>
          <div className='slider-nav'>
            <div className='anchor' data-href='#panel-3'>
              <Nav navDirection='prev' />
            </div>
            <div className='anchor' data-href='#panel-5'>
              <Nav navDirection='next' />
            </div>
          </div>
          <div className='slider-content'>
            <h3 className='content-h3'>2014</h3>
            <p>
              Топ-менеджеры А.&nbsp;Петров и&nbsp;Р.&nbsp;Баширов присоединились к&nbsp;руководству фонда. Их&nbsp;большой опыт помог компании расти и&nbsp;поглощать более мелкие венчурные фонды
            </p>
          </div>
        </div>
        <div id='panel-5' className='slider__item'>
          <div className='slider-nav'>
            <div className='anchor' data-href='#panel-4'>
              <Nav navDirection='prev' />
            </div>
            <div className='anchor' data-href='#panel-6'>
              <Nav navDirection='next' />
            </div>
          </div>
          <div className='slider-content'>
            <h3 className='content-h3'>2016</h3>
            <p>
              Компания продолжает безудержный рост, достигнув оценочной стоимости в&nbsp;годзиллион&nbsp;долл. Множество мелких и&nbsp;средних стартапов, получив инвестиции фонда, становятся единорогами и&nbsp;супер-единорогами в&nbsp;кратчайший период
            </p>
          </div>
        </div>
        <div id='panel-6' className='slider__item'>
          <div className='slider-nav'>
            <div className='anchor' data-href='#panel-5'>
              <Nav navDirection='prev' />
            </div>
            <div className='anchor' data-href='#panel-7'>
              <Nav navDirection='next' />
            </div>
          </div>
          <div className='slider-content'>
            <h3 className='content-h3'>2018</h3>
            <p>
              Фонд поглощает несколько крупнейших мировых банков, что позволяет многократно увеличивать инвестиции в&nbsp;новые стартапы
            </p>
          </div>
        </div>
        <div id='panel-7' className='slider__item'>
          <div className='slider-nav'>
            <div className='anchor' data-href='#panel-6'>
              <Nav navDirection='prev' />
            </div>
            <div className='anchor' data-href='#panel-8'>
              <Nav navDirection='next' />
            </div>
          </div>
          <div className='slider-content'>
            <h3 className='content-h3'>2020</h3>
            <p>
              Сверхуспешные и&nbsp;опытнейшие управляюще партнеры присоединяются к&nbsp;управлению фондом. Компания становится безусловным лидером на&nbsp;рынке инвестиционных услуг
            </p>
          </div>
        </div>
        <div id='panel-8' className='slider__item'>
          <div className='slider-nav'>
            <div className='anchor' data-href='#panel-7'>
              <Nav navDirection='prev' />
            </div>
          </div>
          <div className='slider-content'>
            <h3 className='content-h3'>Наши дни</h3>
            <p>
              SPB Global Capital Group остается крупнейшим инвестиционным фондом и&nbsp;продолжает свое развитие, наращивая и&nbsp;углубляя инвестиционную сеть
            </p>
          </div>
        </div>
      </Slider>
      <Footer className='footer_bg-color_about' />
    </div>
  );
}

export default About;
