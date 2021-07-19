import React, { useState } from 'react';
import { useClearTimer } from '../../../hooks/use-clear-timer';
import { useEscKeyListener } from '../../../hooks/use-esckey-listener';

import './Close.scss';

function Close({ style, setState }) {
  const [isClick, setIsClick] = useState(false);
  const className = isClick ? 'click' : '';
  let timer;

  function handleClick() {
    setIsClick(true);
    setState(false);

    timer = setTimeout(() => {
      setIsClick(false);
    }, 600);
  }

  useEscKeyListener(setState, false);
  useClearTimer(timer);

  return (
    <div 
      className={`close-icon close ${className}`}
      style={style}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
    </div>
  );
}

export default Close;
