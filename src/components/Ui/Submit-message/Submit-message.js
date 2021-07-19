import React from 'react';
import './Submit-message.scss';

function SubmitMessage({ children, isSubmit }) {
  const className = isSubmit ? 'submit-message isShow' : 'submit-message';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default SubmitMessage;
