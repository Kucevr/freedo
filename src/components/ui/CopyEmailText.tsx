import { useState } from 'react';

export function CopyEmailText({ email = "hello@madeinfreedo.com", className = "" }: { email?: string, className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className={`group relative overflow-hidden cursor-pointer inline-block align-top ${className}`}
      onClick={handleCopy}
    >
      <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full flex flex-col">
        <span className="block leading-tight">{email}</span>
        <span className="absolute top-full left-0 block leading-tight whitespace-nowrap text-[#ffffff]">
          {copied ? "COPIED!" : "COPY FREEDO EMAIL"}
        </span>
      </div>
    </div>
  );
}
