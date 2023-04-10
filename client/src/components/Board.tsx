import useFetchBoard from 'hooks/useFetchBoard';
import { IBoardState } from 'interfaces';
import { useSelector } from 'react-redux';
import Pixel from './Pixel';

export default function Board() {
  const { height, width, pixels, options } = useSelector((state: IBoardState) => state.board);
  useFetchBoard();

  return (
    <div
      className='w-fit h-fit grid justify-self-center self-center border border-gray-200'
      style={ {
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        gridTemplateRows: `repeat(${height}, 1fr)`,
        gap: `${options.spacing}px`,
        padding: options.spacing ? `${options.border}px` : '',
        border: `${options.border || 1}px solid rgb(229, 231, 235)`
      } }
      onContextMenu={ (event) => event.preventDefault() }
      id='board'
    >
      { Array.from({ length: width * height })
        .map((_, i) => (
          <Pixel key={ i } color={ pixels[i] } />
        )) }
    </div>
  );
}
