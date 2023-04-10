import Board from 'components/Board';
import Toolbar from 'components/Toolbar';
import useIsBoardOwner from 'hooks/useIsBoardOwner';

export default function Workspace() {
  const isOwner = useIsBoardOwner();

  if (!isOwner) {
    return (
      <main className='w-[100vw] h-[100vh] grid content-center'>
        <Board />
      </main>
    );
  }

  return (
    <main className='grid grid-cols-[auto_1fr]'>
      <Toolbar />
      <Board />
    </main>
  );
}
