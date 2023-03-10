import { setActiveColor, ToolbarState } from 'app/reducers/toolbar';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Pixel {
  color: string;
}

function Pixel({ color }: Pixel) {
  const { activeColor, activeTool } = useSelector((state: ToolbarState) => state.toolbar);
  const dispatch = useDispatch();

  function onPaintPixel(event: MouseEvent) {
    const { style } = event.target as HTMLDivElement;

    switch (activeTool) {
    case 'pencil':
      style.backgroundColor = activeColor;
      break;
    case 'eraser':
      style.backgroundColor = '#ffffff';
      break;
    case 'picker':
      dispatch(setActiveColor(style.backgroundColor));
      break;
    default:
      event.preventDefault();
      break;
    }
  }

  function onHoldPaint(event: MouseEvent) {
    if (event.buttons === 1) {
      onPaintPixel(event);
    }
  }

  return (
    <div
      className='h-6 w-6 select-none border-2 border-transparent hover:border-gray-600'
      style={ { backgroundColor: color ? color : 'white' } }
      onClick={ onPaintPixel }
      onMouseOver={ onHoldPaint }
    />
  );
}

export default Pixel;
