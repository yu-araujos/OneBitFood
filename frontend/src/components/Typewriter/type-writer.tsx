import { useState, useEffect } from "react"

export default function TypeWriter(props: any) {
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    let currentText = '';
    props.text.split('').forEach((char: string, i: number) => {
      setTimeout(() => {
        currentText = currentText.slice(0, -1);
        currentText += char;
        if (props.text.length != i + 1)
          currentText += "❙"
        setPhrase(currentText);
      }, 150 + (i * 75));
    });
  }, []);

  return (
    <> {phrase} </>
  )
} 