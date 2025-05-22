import { useEffect, useState } from 'react';

const variants = ['AXEL', 'ΛXΣL', '4X3L', 'A_XL', '@X3L', '>4X31'];
const colors = ['text-pink-400', 'text-fuchsia-400', 'text-violet-400', 'text-indigo-400'];

export default function FlippingName() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [chars, setChars] = useState(variants[0].split(''));
  const [fadeStates, setFadeStates] = useState(Array(variants[0].length).fill(true));

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (variantIndex + 1) % variants.length;
      const nextChars = variants[nextIndex].split('');

      // Start fade-out per character
      setFadeStates(Array(nextChars.length).fill(false));

      setTimeout(() => {
        setChars(nextChars);
        setVariantIndex(nextIndex);
        setFadeStates(Array(nextChars.length).fill(true));
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, [variantIndex]);

  return (
    <div className="flex space-x-1">
      {chars.map((char, i) => (
        <span
          key={i}
          className={`text-2xl md:text-3xl font-bold ${colors[i % colors.length]} drop-shadow-[0_0_6px_rgba(236,72,153,0.4)] transition duration-500 ease-in-out ${
            fadeStates[i] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
          }`}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
