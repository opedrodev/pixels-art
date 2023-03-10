import { TbColorPicker, TbEraser, TbPencil } from 'react-icons/tb';
import Button from './Button';
import ColorPicker from './ColorPicker';

function Toolbar() {
  return (
    <section className='shadow-sm h-[100vh] border-r border-r-gray-200'>
      <ColorPicker />

      <div className='grid grid-cols-[auto_auto] justify-center gap-8 mt-8'>
        <Button
          type='pencil'
          icon={ <TbPencil className='text-xl' /> }
          title='Pencil'
        />

        <Button
          type='eraser'
          icon={ <TbEraser className='text-xl' /> }
          title='Eraser'
        />

        <Button
          type='picker'
          icon={ <TbColorPicker className='text-xl' /> }
          title='Color Picker'
        />
      </div>
    </section>
  );
}



export default Toolbar;
