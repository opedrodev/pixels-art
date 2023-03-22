import { SelectHTMLAttributes } from 'react';

interface Option {
  value: string;
  label: string;
}

interface Select extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  className?: string;
}

export default function Select({ options, className, label, ...props }: Select) {
  return (
    <label htmlFor={ label }>
      <p className='text-sm select-none'>{ label }</p>
      <select
        defaultValue={ options[0].label }
        id={ label }
        className={ `w-full border-b border-gray-200 pb-2 cursor-pointer outline-none ${className}` }
        { ...props }
      >
        { options.map((option) => (
          <option key={ option.value } value={ option.value }>
            { option.label }
          </option>
        )) }
      </select>
    </label>
  );
}
