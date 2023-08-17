import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import Spinner from '../components/Spinner';

function Product() {
  const { id } = useParams();
  const { isLoading, products } = useProducts();

  const product = products?.find(product => product.product_id === id);

  if (isLoading) {
    return <Spinner />;
  }

  return <div>Products</div>;
}

export default Product;
