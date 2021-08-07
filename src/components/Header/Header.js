import React, { useState, useEffect, useRef } from 'react';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import MenuMobile from '../Menu/Menu-mobile';
import Social from '../Social/Social';
import Burger from '../Menu/Burger/Burger';

import './Header.scss';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [
    windowOffsetWidth, 
    setWindowOffsetWidth
  ] = useState(document.body.offsetWidth);

  const [scrollBarWidth, setScrollBarWidth] = useState(0);

  const headerRef = useRef(null);

  useEffect(() => {
    let timer;
    if (menuIsOpen) {
      timer = setTimeout(() => {
        document.body.style.overflow = 'hidden';
        if (document.body.clientWidth > windowOffsetWidth) {
          setScrollBarWidth(document.body.clientWidth - windowOffsetWidth);
        }
      }, 400);
    }

    if (!menuIsOpen) {
      document.body.style.overflow = 'visible';
      setWindowOffsetWidth(document.body.offsetWidth);
    }

    return () => window.clearTimeout(timer);

  }, [menuIsOpen, scrollBarWidth, windowOffsetWidth]);

  useEffect(() => {
    const callback = () => {
      if (document.body.offsetWidth >= 1080) setMenuIsOpen(false);
      setWindowOffsetWidth(document.body.offsetWidth);
    }
    
    window.addEventListener('resize', callback, false);
    
    return () => window.removeEventListener('resize', callback);

  }, []);

  return (
    <div className='header' ref={headerRef}>
      <Logo />
      <MenuMobile 
        scrollBarWidth={scrollBarWidth}
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
      <Menu isMobile={false} />
      <Burger setState={setMenuIsOpen} />
      <Social className='' />
    </div>
  );
}

export default Header;
