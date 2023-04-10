import { saveBoard } from 'api/boards';
import { savePixels } from 'app/reducers/board';
import { IBoardState } from 'interfaces';
import { useEffect } from 'react';
import { RiSaveLine } from 'react-icons/ri';
import { TbColorPicker, TbEraser, TbHome, TbPencil } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from './Button';
import ColorPicker from './ColorPicker';

function Toolbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();

  const boardState = useSelector((state: IBoardState) => state.board);

  function onSaveBoard() {
    const board = document.querySelector('#board'),
          boardChildren = Array.from(board?.children || []) as HTMLDivElement[];

    const pixels = boardChildren.map((pixel) => pixel.style.backgroundColor);
    dispatch(savePixels(pixels));
    toast.success('Board saved!');
  }

  useEffect(() => {
    (async () => {
      await saveBoard(userId || '', boardState);
    })();
  }, [boardState]);

  return (
    <section className='grid grid-rows-[auto_1fr_auto] shadow-sm h-[100vh] border-r border-r-gray-200'>
      <ColorPicker />

      <div className='grid grid-cols-[auto_auto] justify-center content-start gap-8 mt-8'>
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

      <div className='grid grid-cols-[auto_auto] justify-center gap-8 py-8 border-t border-gray-200'>
        <Button
          type='home'
          icon={ <TbHome className='text-xl' /> }
          title='Home'
          onClick={ () => navigate('/home') }
        />

        <Button
          type='save'
          icon={ <RiSaveLine className='text-xl' /> }
          title='Save'
          onClick={ onSaveBoard }
        />
      </div>
    </section>
  );
}



export default Toolbar;
