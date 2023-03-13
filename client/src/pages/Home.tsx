import Button from 'components/UI/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  // TODO: Load boards from API
  const boards = [
    {
      id: '1',
      name: 'Board 1',
      createdAt: new Date(),
    }
  ];

  return (
    <main className='text-gray-700 grid place-content-center justify-items-center p-16'>
      <h1 className='text-5xl uppercase mb-16'>Pixels Art</h1>

      <section className='flex flex-col'>
        <Button
          text='New Board'
          className='w-32 mb-8'
          onClick={ () => navigate('/board/new') }
        />

        { boards.length === 0 && (
          <p className='text-center text-gray-500'>No boards found!</p>
        ) }

        { boards.map((board) => (
          <Button
            key={ board.id }
            className='w-[800px] border-t-transparent border-x-0'
            onClick={ () => navigate(`/board/${board.id}`) }
            text={ (
              <div className='flex items-center justify-between gap-4 p-4'>
                <p
                  className='font-normal truncate text-ellipsis'
                  title={ board.name }
                >
                  { board.name }
                </p>
                <p className='text-gray-500 text-sm'>{ board.createdAt.toLocaleDateString() }</p>
              </div>
            ) }
          />
        )) }
      </section>
    </main>
  );
}
