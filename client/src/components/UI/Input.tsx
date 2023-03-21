import { InputHTMLAttributes, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  className?: string;
  label?: string;
}

export default function Input({ type, className, label, ...props }: Input) {
  const [showPassword, setShowPassword] = useState(false);

  if (type === 'password') {
    return (
      <label htmlFor={ label } className='relative'>
        <p className='text-sm select-none'>{ label }</p>
        <input
          type={ showPassword ? 'text' : 'password' }
          id={ label }
          { ...props }
          className={ `w-full py-1 px-2 pr-8 border-b border-gray-200 focus:border-black outline-none ${className}` }
        />

        { showPassword ? (
          <BiHide
            className={ `absolute top-1/2 right-2 text-gray-400 cursor-pointer text-xl select-none ${!label && 'transform -translate-y-1/2'}` }
            onClick={ () => setShowPassword(false) }
          />
        ) : (
          <BiShow
            className={ `absolute top-1/2 right-2 text-gray-400 cursor-pointer text-xl select-none ${!label && 'transform -translate-y-1/2'}` }
            onClick={ () => setShowPassword(true) }
          />
        ) }
      </label>
    );
  }

  return (
    <label htmlFor={ label }>
      <p className='text-sm select-none'>{ label }</p>
      <input
        type={ type }
        { ...props }
        id={ label }
        className={ `py-1 px-2 w-full border-b border-gray-200 focus:border-black outline-none ${className}` }
      />
    </label>
  );
}
