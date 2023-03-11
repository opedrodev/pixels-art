import { HTMLAttributes } from 'react';

interface Button extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export default function Button({ text, className, ...props }: Button) {
  return (
    <button
      className={ `border border-gray-200 hover:bg-gray-200 py-1 transition ${className}` }
      { ...props }
    >
      { text }
    </button>
  );
}
