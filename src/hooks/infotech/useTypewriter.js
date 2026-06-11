import { useEffect, useState } from 'react';

export default function useTypewriter(words, wait = 3000) {
  const [text, setText] = useState('');

  useEffect(() => {
    let timeoutId;
    let wordIndex = 0;
    let txt = '';
    let isDeleting = false;

    const type = () => {
      const current = wordIndex % words.length;
      const fullTxt = words[current];
      txt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);
      setText(txt);

      let typeSpeed = isDeleting ? 50 : 100;
      if (!isDeleting && txt === fullTxt) {
        typeSpeed = wait;
        isDeleting = true;
      } else if (isDeleting && txt === '') {
        isDeleting = false;
        wordIndex++;
        typeSpeed = 500;
      }
      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 1000);

    return () => clearTimeout(timeoutId);
  }, [words, wait]);

  return text;
}
