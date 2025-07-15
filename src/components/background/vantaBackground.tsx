import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: {
      NET: (options: Record<string, unknown>) => void;
    };
  }
}

const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setVanta = () => {
      if (window.VANTA && vantaRef.current) {
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          points: 4.00,
          maxDistance: 21.00,
          color: 0x427f7a,
          backgroundColor: 0x181518,
        });
      }
    };

    setVanta();

    return () => {
      if (window.VANTA && vantaRef.current) {
        window.VANTA.NET({
          el: null,
        });
      }
    };
  }, []);

  return <div ref={vantaRef} style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default VantaBackground;
