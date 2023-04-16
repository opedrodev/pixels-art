import { setActiveColor, ToolbarState } from 'app/reducers/toolbar';
import { IBoardState, IPixel } from 'interfaces';
import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Pixel({ color }: IPixel) {
  const { options } = useSelector((state: IBoardState) => state.board);
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
      className='h-8 w-8 select-none border-2 border-transparent hover:border-gray-600'
      style={ {
        backgroundColor: color,
        border: options.border ? `${options.border}px solid rgb(229, 231, 235)` : ''
      } }
      onMouseDown={ onPaintPixel }
      onMouseOver={ onHoldPaint }
    />
  );
}
