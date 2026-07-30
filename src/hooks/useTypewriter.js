import { useState, useEffect } from 'react';

export function useTypewriter(text, speed = 100, startDelay = 0) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    let charIndex = 0;

    const typeNextCharacter = () => {
      if (charIndex < text.length) {
        setDisplayedText(text.slice(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(typeNextCharacter, speed);
      } else {
        setIsComplete(true);
      }
    };

    const startTimeout = setTimeout(typeNextCharacter, startDelay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(startTimeout);
    };
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
}
