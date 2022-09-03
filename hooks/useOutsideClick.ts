import { useEffect, useRef } from 'react';

const useOutsideClick = (callback: any) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
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
