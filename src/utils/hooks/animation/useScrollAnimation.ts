// hooks/useScrollAnimation.ts
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationOptions = {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  stagger?: number | { each?: number; from?: 'start' | 'center' | 'end' | 'random' | 'edges' };
  delay?: number;
  triggerOnce?: boolean;
};

export const useScrollAnimation = (selector: string | React.RefObject<HTMLElement>, options: AnimationOptions = {}) => {
  const { from = { y: 80, opacity: 0 }, to = { y: 0, opacity: 1, ease: 'power3.out', duration: 1 }, stagger = 0.15, delay = 0, triggerOnce = true } = options;

  useGSAP(() => {
    const elements = typeof selector === 'string' ? gsap.utils.toArray(selector) : [selector.current];

    if (!elements.length || elements[0] === null) return;

    gsap.fromTo(elements, from, {
      ...to,
      stagger: stagger,
      delay,
      scrollTrigger: {
        trigger: elements[0] as any,
        start: 'top 10%',
        toggleActions: 'play none none reverse',
        once: triggerOnce,
      },
    });
  }, [selector]);
};
