import { useEffect, useRef, useState } from 'react';

const FadeAnimation = ({ axes, children }) => {

  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  const callBackFunction = (entries, observer) => {
    console.log(entries);

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    });
  }

  const options = { threshold: 0.1 }

  useEffect(() => {

    const observer = new IntersectionObserver(callBackFunction, options);

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`${isVisible ? `animate-fade${axes}` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default FadeAnimation;
