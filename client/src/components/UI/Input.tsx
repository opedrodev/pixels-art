import { InputHTMLAttributes, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  className?: string;
}

export default function Input({ type, className, ...props }: Input) {
  const [showPassword, setShowPassword] = useState(false);

  if (type === 'password') {
    return (
      <div className='relative'>
        <input
          type={ showPassword ? 'text' : 'password' }
          { ...props }
          className={ `w-full py-1 px-2 pr-8 border-b border-gray-200 focus:border-black outline-none ${className}` }
        />

        { showPassword ? (
          <BiHide
            className='absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 cursor-pointer text-xl select-none'
            onClick={ () => setShowPassword(false) }
          />
        ) : (
          <BiShow
            className='absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 cursor-pointer text-xl select-none'
            onClick={ () => setShowPassword(true) }
          />
        ) }
      </div>
    );
  }

  return (
    <input
      type={ type }
      { ...props }
      className={ `py-1 px-2 border-b border-gray-200 focus:border-black outline-none ${className}` }
    />
  );
}
