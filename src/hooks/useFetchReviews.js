import { useQuery } from '@tanstack/react-query';
import { getProductReviews } from '../services/apiProduct';

function useFetchReviews(productId) {
  const {
    data: { data: reviews, count } = {},
    isLoading: loadingReviews,
    error,
  } = useQuery({
    queryKey: ['reviews', productId],
    queryFn: () => getProductReviews(productId),
  });

  if (error) throw new Error(error.message || 'Error Getting Reviews');

  return { reviews, count, loadingReviews };
}
export default useFetchReviews;
