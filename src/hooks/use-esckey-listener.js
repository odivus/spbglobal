import { useEffect } from 'react';

export function useEscKeyListener(setState, stateValue) {
  useEffect(() => {
    function getEscKeyClick(e) {
      const keys = {
        27: () => {
          if (!setState || stateValue === 'undefined') return; 
          e.preventDefault();
          setState(stateValue);
        },
      };
      if (keys[e.keyCode]) keys[e.keyCode]();
    }
  
    window.addEventListener('keyup', getEscKeyClick, false);
    return () => window.removeEventListener('keyup', getEscKeyClick);
  }, [stateValue, setState]);
}