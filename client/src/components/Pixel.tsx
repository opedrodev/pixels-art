import { memo, MouseEvent } from 'react';

interface Pixel {
  color: string;
  onPaint: (event: MouseEvent) => void;
}

function Pixel({ color, onPaint }: Pixel) {
  return (
    <div
      className='h-6 w-6 border border-black'
      style={ { backgroundColor: color ? color : 'white' } }
      onClick={ onPaint }
    />
  );
}

export default memo(Pixel);
