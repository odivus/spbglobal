import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function ScrollToTop() {
  const history = useHistory();

  useEffect(() => {
    if (history.action === 'POP') return;
    window.scrollTo(0, 0);
  }, [history]);

  return null;
}

export default ScrollToTop;