import { setBoard } from 'app/reducers/board';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import Select from 'components/UI/Select';
import calculateArea from 'helpers/calculateArea';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';

export default function NewBoard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('Untitled');

  const [maxWidth, setMaxWidth] = useState(0),
        [maxHeight, setMaxHeight] = useState(0);

  const [width, setWidth] = useState(0),
        [height, setHeight] = useState(0);

  const [options, setOptions] = useState({
    border: 0,
    spacing: 0
  });

  /**
   *
   * @description Handle the options change and update the options state
   * @param { ChangeEvent } event - The event that triggered the function
   */
  function handleOptions({ target: { name, value } }: ChangeEvent<HTMLSelectElement>) {
    setOptions({ ...options, [name]: Number(value) });
  }

  useEffect(() => {
    const { columns, rows } = calculateArea(window, options);

    setWidth(columns);
    setHeight(rows);
    setMaxWidth(columns);
    setMaxHeight(rows);
  }, [options]);

  /**
   *
   * @description Create a new board and navigate to it
   */
  function handleCreateBoard() {
    if (name.trim() === '') return toast.error('The board must have a name');
    if (width < 5 || height < 5) return toast.error('The board must be at least 5x5 pixels');
    if (width > maxWidth || height > maxHeight) return toast.error('The board is too big');

    const id = uuid();

    const board = {
      id,
      name,
      width,
      height,
      options,
      pixels: Array.from({ length: height * width }, () => 'rgb(255, 255, 255)')
    };

    dispatch(setBoard(board));
    navigate(`/board/${id}`);
  }

  return (
    <main className='text-gray-700 grid place-content-center justify-items-center p-16'>
      <h1 className='text-5xl uppercase mb-16'>Pixels Art</h1>
      <div className='flex flex-col gap-8 w-[400px] border border-gray-200 p-8 shadow'>
        <h2 className='text-sm uppercase text-center'>New Board</h2>

        <Input
          type='text'
          label='Board name'
          name='name'
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />

        <div className='grid grid-cols-2 gap-4'>
          <Input
            type='number'
            label='Width'
            name='width'
            min={ 5 }
            max={ maxWidth }
            value={ width }
            onChange={ (e) => setWidth(parseInt(e.target.value)) }
          />
          <Input
            type='number'
            label='Height'
            name='height'
            min={ 5 }
            max={ maxHeight }
            value={ height }
            onChange={ (e) => setHeight(parseInt(e.target.value)) }
          />
        </div>

        <Select
          label='Pixel border'
          name='border'
          onChange={ handleOptions }
          options={ [
            { value: '0', label: 'None' },
            { value: '1', label: 'Thin' },
            { value: '2', label: 'Thick' }
          ] }
        />

        <Select
          label='Pixel spacing'
          name='spacing'
          onChange={ handleOptions }
          options={ [
            { value: '0', label: 'None' },
            { value: '1', label: 'Small' },
            { value: '2', label: 'Medium' },
          ] }
        />

        <Button text='Create' className='w-32 self-end' onClick={ handleCreateBoard } />
      </div>

      <Button
        text='Back'
        className='w-32 mt-8'
        onClick={ () => navigate('/home') }
      />
    </main>
  );
}
