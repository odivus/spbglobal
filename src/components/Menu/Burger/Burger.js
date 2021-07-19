import React, { useState } from 'react';
import { useClearTimer } from '../../../hooks/use-clear-timer';
import './Burger.scss';

function Burger({ setState }) {
  const [isClick, setIsClick] = useState(false) ;
  const className = isClick ? 'click' : '';
  let timer;

  function handleClick() {
    setIsClick(true);
    setState(true);

    timer = setTimeout(() => {
      setIsClick(false);
    }, 600);
  }

  useClearTimer(timer);

  return (
    <div 
      id='burger-icon'
      className={className}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Burger;
