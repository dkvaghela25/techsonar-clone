import { useEffect, useRef, useState } from 'react';

const FadeAnimation = ({ axes ,children }) => {
    
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(domRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal-on-scroll ${isVisible ? `animate-fade${axes}` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default FadeAnimation;
