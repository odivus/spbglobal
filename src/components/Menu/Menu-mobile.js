import React from 'react';

import Menu from '../Menu/Menu';
import Social from '../Social/Social';
import Close from './Close/Close';

import './Menu.scss';

function MenuMobile(props) {
  const { 
    scrollBarWidth, 
    menuIsOpen, 
    setMenuIsOpen } = props;

  const navWrapClassName = menuIsOpen ? 'nav-wrap nav-wrap_open' : 'nav-wrap';
  const closeStyle = {
    marginRight: scrollBarWidth + 'px'
  }

  return (
    <div className={navWrapClassName}>
      <Close 
        style={closeStyle}
        setState={setMenuIsOpen} 
      />
      <Menu isMobile={true} />
      <Social className='social_screen_small' />
    </div>
  );
}

export default MenuMobile;
