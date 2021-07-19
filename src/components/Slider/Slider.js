import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import './Slider.scss';

function Slider({ header, bgColor, children }) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const ref = useRef(null);

  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: 'restart pause resume pause'
    });
  }, []);

  useEffect(() => {
    const sliderWrapper = ref.current;
    const sliderWrap = sliderWrapper.querySelector('.slider-wrap');
    
    const panels = gsap.utils.toArray('.slider__item');
    const anchorItems = sliderWrapper.querySelectorAll('.anchor');
    const sliderItemsLength = sliderWrapper
                            .querySelectorAll('.slider__item')
                            .length;
    
    function anchorListener(e) {
      let clickItem = e.target;
      let isAnchor;

      while (!isAnchor) {
        isAnchor = clickItem.classList.contains('anchor');
        if (isAnchor) break;
        clickItem = clickItem.parentNode
      }

      const targetElem = sliderWrapper
                       .querySelector(clickItem.getAttribute('data-href'));

      const containerOffset = sliderWrapper.offsetTop 
        + (targetElem.offsetLeft / (sliderItemsLength - 1));

      gsap.to(window, {
        scrollTo: {
          y: containerOffset,
          autoKill: false
        },
        duration: 1
      })
    }

    anchorItems.forEach(anchor => {
      anchor.addEventListener('click', anchorListener);
    });

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.slider-wrap',
        pin: true,
        scrub: 1,
        start: 'top top',
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.1, max: 0.1 }
        },
        onUpdate: ({ progress }) => {
          (progress < 1) 
            ? sliderWrapper.className = bgColor
            : sliderWrapper.className = 'bg-color-white';
        },
        end: () => '+=' + sliderWrap.offsetWidth,
      }
    });

    return () => {
      anchorItems.forEach(anchor => {
        anchor.removeEventListener('click', anchorListener);
      });
    }
  }, [bgColor]);

  return (
    <div className={bgColor} ref={ref}>
      <div className={`slider-wrap ${bgColor}`}>
        <h2 className={`h2-slider ${bgColor}`}>
          {header}
        </h2>
        <div className={`slider ${bgColor}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Slider;
