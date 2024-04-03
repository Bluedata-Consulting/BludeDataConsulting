import React, { useEffect, useRef, useState } from "react";

const AnimatedComponent = ({ children }) => {
  const componentRef = useRef(null);
  const observerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust this value to control when the animation should trigger
    );

    observerRef.current = observer;

    const currentComponent = componentRef.current;
    if (currentComponent) {
      observer.observe(currentComponent);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={componentRef}
      className={`animate-container ${isVisible ? "animate" : ""}`}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
