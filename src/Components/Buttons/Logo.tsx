import React, { useCallback, useEffect, useRef, useState } from "react";
import logo from '../../resources/images/Logo.png';

function Logo() {


  const [clockwiseRotation, setClockwiseRotation] = useState(true);

  const logoRef = useRef<HTMLImageElement | null>(null); // Reference to the logo element
  const [angle, setAngle] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Store interval ID

  const rotatingSpeed = 10; // rotating speed in degrees by second
  const refreshRate = 0.1; // refresh rate of the movement

  const toggleRotation = useCallback(() => {
    if (!logoRef.current) return;
      const newAngle = clockwiseRotation ? angle + rotatingSpeed * refreshRate : angle - rotatingSpeed * refreshRate; // Change angle by 2 degree by timer
    setAngle(newAngle);
    logoRef.current.style.transform = `rotate(${newAngle}deg)`;
    }, [angle, clockwiseRotation]);



  useEffect(() => {
      intervalRef.current = setInterval(() => {
        toggleRotation();
      }, refreshRate * 100); // Rotate every 0.1 second

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [angle, toggleRotation]); // Re-run effect when autoRotate state changes

  return (
    <div onClick={() => setClockwiseRotation(!clockwiseRotation)}>
        <img
            ref={logoRef}
            src={logo}// Replace with your actual logo path
            className="App-logo"
            alt="logo"
            style={{ transform: `rotate(${angle}deg)`, transition: `transform ${refreshRate}s`,
            height: "70%",
            width: "70%",
            marginTop: "50px" }}
            onClick={() => setClockwiseRotation(!clockwiseRotation)}
        />
    </div>
  );
}

export default Logo;