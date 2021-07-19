import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import './Logo.scss';

function LogoImg({ className }) {
  return (
    <img
      className={className}
      src={logo}
      alt='SPB Global Capital Group'
    />
  );
}

function Logo() {
  const location = useLocation().pathname;
  
  if (location === '/') return (
    <LogoImg className='logo logo_nolink' />
  );

  return (
    <Link to='/'>
      <LogoImg className='logo logo_link' />
    </Link>
  );
}

export default Logo;
