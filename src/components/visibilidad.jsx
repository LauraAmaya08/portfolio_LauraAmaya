import { useState, useEffect } from 'react';

const useVisibilidad = (elemento) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const vista = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); 
        }
      },
      {
        threshold: 0.8, 
      }
    );

    const element = document.getElementById(elemento);

    if (element) {
      vista.observe(element); 
    }


    return () => {
      if (element) {
        vista.unobserve(element); 
      }
    };
  }, [elemento]); 

  return visible;
};

export default useVisibilidad;
