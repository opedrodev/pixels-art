import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface Link {
  to: string;
  children: ReactNode;
  className?: string;
}

export default function Link({ to, children, className }: Link) {
  return (
    <RouterLink
      to={ to }
      className={ `text-blue-400 hover:text-blue-600 transition ${className}` }
    >
      { children }
    </RouterLink>
  );
}
