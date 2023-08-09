import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAccount } from '../services/apiAuth';
// import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';

export function useDeleteUser() {
  // const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isLoading } = useMutation({
    mutationFn: deleteAccount,
    onSuccess: data => {
      queryClient.removeQueries();
      console.log(data);
      // navigate('/sign-up', { replace: true });
      Toast('success', 'Signed Out Successfully');
    },
    onError: error => {
      Toast('error', error.message || 'Error signing out');
    },
  });

  if (isLoading) Toast('success', 'Signing Out');

  return { deleteUser, isLoading };
}
