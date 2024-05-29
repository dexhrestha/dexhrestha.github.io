import { useState, useEffect } from 'react';

const useTypewriter = (texts, speed = 60) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let i = (document.getElementById('typing').innerText.length > 0) ? document.getElementById('typing').innerText.length : 0;
    const typingInterval = setInterval(() => {
      if (i < texts[textIndex].length) {
        setDisplayText(texts[textIndex].slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayText('               ');
          setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 1000); // Add a pause before switching to the next text
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [texts, textIndex, speed]);

  return displayText;
};

const Typing = ({ texts, speed }) => {
  const displayText = useTypewriter(texts, speed);

  return displayText;
};

export default Typing;
