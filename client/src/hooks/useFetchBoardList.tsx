import { getBoards } from 'api/boards';
import { IBoard } from 'interfaces';
import { useEffect, useState } from 'react';

export default function useFetchBoardList(userId: string) {
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useState<IBoard[]>([]);

  useEffect(() => {
    (async () => {
      if (!userId) return;

      const { data } = await getBoards(userId || '');
      setBoards(data);
      setLoading(false);
    })();
  }, [userId]);

  return { boards, loading };
}
