import React, { useState } from 'react';
import { useClearTimer } from '../../../hooks/use-clear-timer';

import './Nav.scss';

function Nav({ navDirection }) {
  const navDirectionClassName = (
    !navDirection || typeof navDirection !== 'string'
  ) ? 'next' : navDirection;

  const [isClick, setIsClick] = useState(false);
  const className = isClick 
                  ? `${navDirectionClassName}-icon click` 
                  : `${navDirectionClassName}-icon`;
  let timer;

  function handleClick() {
    setIsClick(true);

    timer = setTimeout(() => {
      setIsClick(false);
    }, 600);
  }

  useClearTimer(timer);

  return (
    <div
      className={`nav-icon ${className}`}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
    </div>
  );
}

export default Nav;
