import React, { useState, useEffect, useRef } from 'react';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import MenuMobile from '../Menu/Menu-mobile';
import Social from '../Social/Social';
import Burger from '../Menu/Burger/Burger';

import './Header.scss';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [windowOffsetWidth, setWindowOffsetWidth] = useState(document.body.offsetWidth);
  const [menuWidth, setMenuWidth] = useState(document.body.clientWidth);
  const [scrollBarWidth, setScrollBarWidth] = useState(0);
  const [headerPaddingRight, setHeaderPaddingRight] = useState(0);

  const headerRef = useRef(null);

  useEffect(() => {
    let timer;
    if (menuIsOpen) {
      timer = setTimeout(() => {
        document.body.style.overflow = 'hidden';
        if (scrollBarWidth <= 0) {
          setWindowOffsetWidth(document.body.offsetWidth);
        }
      }, 400);
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => window.clearTimeout(timer);
  }, [menuIsOpen, scrollBarWidth]);

  useEffect(() => {
    if (scrollBarWidth > 0) return;
    if (menuIsOpen) {
      setMenuWidth(document.body.clientWidth);
      const width = windowOffsetWidth - menuWidth;
      if (width > 0) setScrollBarWidth(width);
    }
  }, [menuIsOpen, windowOffsetWidth, menuWidth, scrollBarWidth]);

  useEffect(() => {
    const callback = () => {
      setWindowOffsetWidth(document.body.offsetWidth);
    }
    window.addEventListener('resize', callback, false);
    return () => window.removeEventListener('resize', callback);
  }, []);

  useEffect(() => {
    if (windowOffsetWidth >= 1080) setMenuIsOpen(false);
  }, [windowOffsetWidth]);

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
