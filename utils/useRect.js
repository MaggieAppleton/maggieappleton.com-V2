import { useState, useRef, useEffect } from 'react';

export const useRect = () => {
  const ref = useRef();
  const [rect, setRect] = useState({});

  const set = () => setRect(ref && ref.current ? ref.current.getBoundingClientRect() : {});

  const useEffectInEvent = (event, useCapture) => {
    useEffect(() => {
      set();
      window.addEventListener(event, set, useCapture);
      return () => window.removeEventListener(event, set, useCapture);
    }, [event, useCapture]);
  };

  useEffectInEvent('resize');
  useEffectInEvent('scroll', true);

  return [rect, ref];
};