import { setActiveColor, ToolbarState } from 'app/reducers/toolbar';
import React from 'react';
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';


const ColorPicker: React.FC = () => {
  const { activeColor } = useSelector((state: ToolbarState) => state.toolbar);
  const dispatch = useDispatch();

  return (
    <div className='pt-8 rounded-bl-md rounded-br-md' style={ {backgroundColor: activeColor} }>
      <ChromePicker
        onChange={ (color) => dispatch(setActiveColor(color.hex)) }
        color={ activeColor }
        disableAlpha={ true }
        styles={ { default: { picker: { boxShadow: 'none' } } } }
        className=' pt-1 rounded-none border-b border-r-gray-200 select-none'
      />
    </div>
  );
};

export default ColorPicker;
