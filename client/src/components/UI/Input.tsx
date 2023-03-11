import { InputHTMLAttributes } from 'react';

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  className?: string;
}

export default function Input({ type, className, ...props }: Input) {
  return (
    <input
      type={ type }
      { ...props }
      className={ `py-1 px-2 border-b border-gray-200 focus:border-black outline-none ${className}` }
    />
  );
}
