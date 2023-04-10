import BoardList from 'components/BoardList';
import Button from 'components/UI/Button';
import useWithAuth from 'hooks/useWithAuth';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const user = useWithAuth();
  const navigate = useNavigate();


  return (
    <main className='text-gray-700 grid place-content-center justify-items-center p-16'>
      <h1 className='text-5xl uppercase mb-16'>Pixels Art</h1>

      <section className='w-[800px] flex flex-col'>
        <div className='flex justify-between'>
          <Button
            text='New Board'
            className='w-32 mb-8'
            onClick={ () => navigate('/board/new') }
          />

          <Button
            text='Profile'
            className='w-32 mb-8'
            onClick={ () => navigate('/profile') }
          />
        </div>

        <BoardList user={ user || { _id: '', email: '', username: '' } } />
      </section>
    </main>
  );
}
