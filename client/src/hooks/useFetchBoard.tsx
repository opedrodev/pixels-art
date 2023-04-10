import { getBoardById } from 'api/boards';
import { setBoard } from 'app/reducers/board';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function useFetchBoard() {
  const dispatch = useDispatch();

  const { userId, boardId } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await getBoardById(userId || '', boardId || '');
      dispatch(setBoard(data));
    })();
  }, []);
}
