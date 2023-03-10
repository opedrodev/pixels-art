import { setActiveTool, ToolbarState } from 'app/reducers/toolbar';
import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Button {
  icon: ReactNode;
  type: 'pencil' | 'eraser' | 'picker';
  title: string;
}

function Button({ icon, type, title }: Button) {
  const { activeTool } = useSelector((state: ToolbarState) => state.toolbar);
  const dispatch = useDispatch();

  return (
    <button
      className='w-fit h-fit p-4 border border-gray-200 hover:bg-gray-200'
      style={ { backgroundColor: activeTool === type ? 'rgb(229, 231, 235)' : '' } }
      onClick={ () => dispatch(setActiveTool(activeTool === type ? '' : type)) }
      title={ title }
    >
      { icon }
    </button>
  );
}

export default Button;
