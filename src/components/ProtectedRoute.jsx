import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function useUser() {
  return true;
}

function ProtectedRoute({ children }) {
  const user = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!user) {
        navigate('/sign-up');
      }
    },
    [user, navigate]
  );

  return children;
}

export default ProtectedRoute;
