import React from "react";
import { useState, useRef, useEffect } from "react";

const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observerAPI = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }, options);

    if (ref.current) {
      observerAPI.observe(ref.current);
    }
  }, [ref, options]);
  return [ref, isVisible];
};

export default useOnScreen;
