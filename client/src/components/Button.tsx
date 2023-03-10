import { setActiveTool, ToolbarState } from 'app/reducers/toolbar';
import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Button {
  icon: ReactNode;
  type: 'pencil' | 'eraser' | 'picker';
}

function Button({ icon, type }: Button) {
  const { activeTool } = useSelector((state: ToolbarState) => state.toolbar);
  const dispatch = useDispatch();

  return (
    <button
      className='p-4 border border-gray-200 hover:bg-gray-200'
      style={ { backgroundColor: activeTool === type ? 'rgb(229, 231, 235)' : '' } }
      onClick={ () => dispatch(setActiveTool(activeTool === type ? '' : type)) }
    >
      { icon }
    </button>
  );
}

export default Button;
