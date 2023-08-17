import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/apiProduct';
import { useSearchParams } from 'react-router-dom';

export function useProducts() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const {
    isLoading,
    data: { data: products, count = 0 } = {},
    error,
  } = useQuery({
    queryKey: ['products', page],
    queryFn: () => fetchProducts(page),
  });

  console.log(products, count);

  if (error) throw new Error('Failed to fetch showcase products');

  return {
    isLoading,
    products,
    count,
  };
}
