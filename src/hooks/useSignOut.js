import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signOut } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';

export function useSignOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/login', { replace: true });
      Toast('success', 'Signed Out Successfully');
    },
  });

  return { logout, isLoading };
}
