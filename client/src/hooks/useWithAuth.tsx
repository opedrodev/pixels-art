import { verifyToken } from 'api/users';
import { loginUser } from 'app/reducers/user';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useWithAuth() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function verifyUserToken() {
    try {
      const token = localStorage.getItem('token');
      const response = await verifyToken(token || '');
      const { email, username, _id } = response.data.user;
      dispatch(loginUser({ email, username, _id }));

      if (location.pathname === '/') navigate('/home');
    } catch (error) {
      navigate('/');
    }
  }

  useEffect(() => {
    verifyUserToken();
  }, []);
}
