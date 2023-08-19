import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from '../hooks/useUser';

import Spinner from './Spinner';
import Toast from './Toast';

function ProtectedAuth({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();
  console.log(isLoading);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate('/');
      Toast('error', 'You are already logged in');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return children;
  }
}

export default ProtectedAuth;
