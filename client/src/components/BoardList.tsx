import { setBoard } from 'app/reducers/board';
import { formatDate } from 'helpers/formatDate';
import useFetchBoardList from 'hooks/useFetchBoardList';
import { IUser } from 'interfaces';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from './UI/Button';
import Loading from './UI/Loading';

export default function BoardList(props: { user: IUser }) {
  const { _id } = props.user;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { boards, loading } = useFetchBoardList(_id);

  function onBoardClick(id: string) {
    const board = boards.find((board) => board.id === id);
    dispatch(setBoard(board));
    navigate(`/board/${_id}/${board?.id}`);
  }

  if (loading) return <Loading />;

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
          onClick={ () => onBoardClick(board.id) }
          text={ (
            <div className='grid grid-cols-[1fr_auto] items-center gap-4 p-4'>
              <p
                className='place-self-start font-normal truncate text-ellipsis'
                title={ board.name }
              >
                { board.name }
              </p>

              <p className='text-gray-400 text-sm'>{ formatDate(new Date(board.createdAt)) }</p>
            </div>
          ) }
        />
      )) }
    </>
  );
}
