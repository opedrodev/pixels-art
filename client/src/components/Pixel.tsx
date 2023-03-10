import { ToolbarState } from 'app/reducers/toolbar';
import { memo, MouseEvent } from 'react';
import { useSelector } from 'react-redux';

interface Pixel {
  color: string;
}

function Pixel({ color }: Pixel) {
  const { activeColor } = useSelector((state: ToolbarState) => state.toolbar);

  function onPaintPixel(event: MouseEvent) {
    const { style } = event.target as HTMLDivElement;
    style.backgroundColor = activeColor;
  }

  function onHoldPaint(event: MouseEvent) {
    if (event.buttons === 1) {
      onPaintPixel(event);
    }
  }

  return (
    <div
      className='h-6 w-6 border border-black select-none'
      style={ { backgroundColor: color ? color : 'white' } }
      onClick={ onPaintPixel }
      onMouseOver={ onHoldPaint }
    />
  );
}

export default memo(Pixel);
