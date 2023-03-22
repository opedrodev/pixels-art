import Board from 'components/Board';
import Toolbar from 'components/Toolbar';

export default function Workspace() {
  return (
    <main className='grid grid-cols-[auto_1fr]'>
      <Toolbar />
      <Board />
    </main>
  );
}
