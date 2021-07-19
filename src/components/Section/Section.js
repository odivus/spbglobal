import React from 'react';
import './Section.scss';

function Section({ children, className }) {
  return (
    <section className={`section ${className}`}>
      {children}
    </section>
  );
}

export default Section;
