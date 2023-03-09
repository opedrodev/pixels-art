import { MouseEvent } from 'react';
import Pixel from './Pixel';

interface Props {
    size: number;
    pixels: string[];
    brushColor: string;
}

function Board({ pixels, size, brushColor }: Props) {
  function onPaintPixel(event: MouseEvent) {
    const { style } = event.target as HTMLDivElement;
    style.backgroundColor = brushColor;
  }

  return (
    <div
      className='w-fit grid grid-cols-[repeat(20,_1fr)] gap-[1px]'
      onContextMenu={ (event) => event.preventDefault() }
      id='board'
    >
      {
        Array.from({ length: size }).map((_, i) => (
          <Pixel key={ i } color={ pixels[i] } onPaint={ onPaintPixel } />
        ))
      }
    </div>
  );
}

export default Board;
