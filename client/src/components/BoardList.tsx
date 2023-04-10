import { setBoard } from 'app/reducers/board';
import useFetchBoardList from 'hooks/useFetchBoardList';
import { IUser } from 'interfaces';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './UI/Button';

export default function BoardList(props: { user: IUser }) {
  const { _id } = props.user;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { boards, loading } = useFetchBoardList(_id);

  function onBoardClick() {
    const board = boards.find((board) => board.id === board.id);
    dispatch(setBoard(board));
    navigate(`/board/${_id}/${board?.id}`);
  }

  if (loading) return <p className='text-center'>Loading...</p>;

  // TODO: Add a creation date to the board

  return (
    <>
      { boards.length === 0 && (
        <p className='text-center text-gray-500'>No boards found!</p>
      ) }

      { boards.map((board) => (
        <Button
          key={ board.id }
          className='w-full border-t-transparent border-x-0'
          onClick={ onBoardClick }
          text={ (
            <div className='flex items-center justify-between gap-4 p-4'>
              <p
                className='font-normal truncate text-ellipsis'
                title={ board.name }
              >
                { board.name }
              </p>
            </div>
          ) }
        />
      )) }
    </>
  );
}
