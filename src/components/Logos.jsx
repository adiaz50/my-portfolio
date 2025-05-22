// src/components/AsciiLogo.jsx
import { useEffect, useState } from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

const logos = [logo1, logo2, logo3];

export default function Logos() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 1500); // Change every 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <img
  src={logos[index]}
  alt="ASCII Logo"
  className="h-20 w-auto md:h-24 drop-shadow-[0_0_15px_rgba(255,0,255,0.6)]"
/>
// this add more neon to it 

  );
}
