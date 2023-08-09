import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from '../hooks/useUser';

import Spinner from './Spinner';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate('/login');
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isAuthenticated) {
    return children;
  }
}

export default ProtectedRoute;
