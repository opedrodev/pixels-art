import Pixel from './Pixel';

interface Props {
    size: number;
    pixels: string[];
}

function Board({ pixels, size }: Props) {
  return (
    <div
      className='w-fit h-fit grid grid-cols-[repeat(20,_1fr)] gap-[1px]'
      onContextMenu={ (event) => event.preventDefault() }
      id='board'
    >
      {
        Array.from({ length: size }).map((_, i) => (
          <Pixel key={ i } color={ pixels[i] } />
        ))
      }
    </div>
  );
}

export default Board;
