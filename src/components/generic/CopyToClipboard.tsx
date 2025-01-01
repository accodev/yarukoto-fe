import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

interface CopyToClipboardProps {
  text: string;
}

function CopyToClipboard({ text }: CopyToClipboardProps) {
  const textRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="relative inline-block group">
      <pre ref={textRef} className="text-gray-300 bg-gray-800 p-2 rounded">{text}</pre>
      <button onClick={copyToClipboard} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        <FontAwesomeIcon icon={faClipboard} />
      </button>
      {copied && <span className="absolute top-1/2 left-full ml-2 transform -translate-y-1/2 text-green-500">Copied to clipboard</span>}
    </div>
  );
}

export { CopyToClipboard };
