import { setActiveColor, ToolbarState } from 'app/reducers/toolbar';
import React from 'react';
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';

const Toolbar: React.FC = () => {
  const { activeColor } = useSelector((state: ToolbarState) => state.toolbar);
  const dispatch = useDispatch();

  return (
    <section className='shadow-sm h-[100vh] border-r border-r-gray-200'>
      <div className='pt-8' style={ {backgroundColor: activeColor} }>
        <ChromePicker onChange={ (color) => dispatch(setActiveColor(color.hex)) }
          color={ activeColor }
          disableAlpha={ true }
          styles={ { default: { picker: { boxShadow: 'none' } } } }
          className=' border-b border-t-4 border-r-gray-200'
        />
      </div>
    </section>
  );
};

export default Toolbar;
