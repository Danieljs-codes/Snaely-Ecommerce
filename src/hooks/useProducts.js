import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/apiProduct';

export function useProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (error) throw new Error('Failed to fetch showcase products');

  return {
    isLoading,
    products,
  };
}
