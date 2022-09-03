import { useEffect, useRef } from 'react';

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleClick = (event: { target: Node | any }) => {
      if (ref.current && !ref.current?.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick;
