import { useCallback, useEffect, useMemo, useState } from "react";

const useCastumRecognizer = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);

  const recognizer = useMemo(() => {
    return new webkitSpeechRecognition();
  }, []);
  
  useEffect(() => {
    recognizer.interimResults = true;
    recognizer.lang = "ru-Ru";

    recognizer.onresult = (event) => {
      const result = event.results[event.resultIndex];

      if (result.isFinal) {
        setText(result[0].transcript + " " + Math.floor(Math.random() * 101));
      }
    };

    recognizer.onend = () => {
      setStatus(false);
    };
  }, [recognizer]);

  const start = useCallback(() => {
    recognizer.start();
    setStatus(true);
  }, [recognizer]);

  const stop = useCallback(() => {
    recognizer.stop();
    setStatus(false);
  }, [recognizer]);

  return { start, stop, status, text };
};

export default useCastumRecognizer;
