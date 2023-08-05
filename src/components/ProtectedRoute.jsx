import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const user = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!user) {
        navigate('/sign-up');
      }
    },
    [user]
  );

  return children;
}

export default ProtectedRoute;
