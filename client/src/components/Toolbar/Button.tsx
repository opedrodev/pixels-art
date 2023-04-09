import { setActiveTool, ToolbarState } from 'app/reducers/toolbar';
import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Button {
  icon: ReactNode;
  type: 'pencil' | 'eraser' | 'picker' | 'save' | 'home';
  title: string;
  onClick?: () => void;
}

function Button({ icon, type, title, ...props }: Button) {
  const { activeTool } = useSelector((state: ToolbarState) => state.toolbar);
  const dispatch = useDispatch();

  return (
    <button
      className='w-fit h-fit p-4 border border-gray-200 hover:bg-gray-200'
      style={ { backgroundColor: activeTool === type ? 'rgb(229, 231, 235)' : '' } }
      title={ title }
      onClick={ () => dispatch(setActiveTool(activeTool === type ? '' : type)) }
      { ...props }
    >
      { icon }
    </button>
  );
}

export default Button;
