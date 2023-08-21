import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAccount } from '../services/apiAuth';
// import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';
import { useNavigate } from 'react-router-dom';

export function useDeleteUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isLoading } = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      queryClient.removeQueries();

      navigate('/sign-up', { replace: true });
      Toast('success', 'Account deleted');
    },
    onError: error => {
      Toast('error', error.message || 'Error signing out');
    },
  });

  return { deleteUser, isLoading };
}
