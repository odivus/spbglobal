import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.scss';

const menuItemsContent = {
  '/about': 'О фонде',
  '/portfolio': 'Портфолио',
  '/forinvestors': 'Инвесторам',
  '/forstartups': 'Стартапам',
  '/contacts': 'Контакты',
};

function Menu({ isMobile }) {
  const location = useLocation().pathname;
  const className = isMobile ? 'nav nav_screen_small' : 'nav nav_screen_big'

  return (
    <ul className={className}>
      {
        Object.entries(menuItemsContent).map((item, index) => {
          if (location === item[0]) return (
            <li 
              key={index}
              className='nav__item'
            >
              {item[1]}
            </li>
          );

          return (
            <li 
              key={index}
              className='nav__item'
            >
              <span>
                <Link to={item[0]}>{item[1]}</Link>
              </span>
            </li>
          );
        })
      }
    </ul>
  );
}

export default Menu;
