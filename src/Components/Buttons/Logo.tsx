import React, { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import baseLogo from '../../Resources/Images/Logo.png';

interface LogoProps {
  style?: CSSProperties;
  logo?: string;
  rotatingSpeed?: number;
  refreshRate?: number;
}

const Logo: React.FC<LogoProps> = ({
  style = {}, 
  logo = baseLogo,
  rotatingSpeed = 10,
  refreshRate = 0.1,
}) => {


  const [clockwiseRotation, setClockwiseRotation] = useState(true);

  const logoRef = useRef<HTMLImageElement | null>(null); // Reference to the logo element
  const [angle, setAngle] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Store interval ID

  const toggleRotation = useCallback(() => {
    if (!logoRef.current) return;
      const newAngle = clockwiseRotation ? 
                        angle + rotatingSpeed * refreshRate 
                        : angle - rotatingSpeed * refreshRate;
    setAngle(newAngle);
    logoRef.current.style.transform = `rotate(${newAngle}deg)`;
    }, [angle, clockwiseRotation, refreshRate, rotatingSpeed]);



  useEffect(() => {
      intervalRef.current = setInterval(() => {
        toggleRotation();
      }, refreshRate * 100); // Rotate at refresh rate frequency divided by 10 (the units here is ms)
      // so it dosent slow down (because there is a ease in and out effect on rotation)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [angle, refreshRate, toggleRotation]); // Re-run effect when autoRotate state changes

  return (
    <div onClick={() => setClockwiseRotation(!clockwiseRotation)}>
        <img
            ref={logoRef}
            src={logo}
            className="App-logo"
            alt="logo"
            style={{
              transform: `rotate(${angle}deg)`,
              transition: `transform ${refreshRate}s`,
              ...style
           }}
            onClick={() => setClockwiseRotation(!clockwiseRotation)}
        />
    </div>
  );
}

export default Logo;