import { verifyToken } from 'api/users';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function useIsBoardOwner() {
  const [isBoardOwner, setIsBoardOwner] = useState(false);
  const { userId } = useParams();

  async function verifyBoardOwner() {
    const token = localStorage.getItem('token');
    const { data: { user: { _id } } } = await verifyToken(token || '');

    if (userId === _id) setIsBoardOwner(true);
    else setIsBoardOwner(false);
  }

  useEffect(() => {
    verifyBoardOwner();
  }, []);

  return isBoardOwner;
}
