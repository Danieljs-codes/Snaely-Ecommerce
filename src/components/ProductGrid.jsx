// src/components/ProductGrid.jsx
import { formatCurrency } from '../utils/helpers';

function ProductGrid({ sortedProducts }) {
  return (
    <div className="space-y-4 lg:col-span-3">
      {sortedProducts.map((product, i) => (
        <div key={i}>
          <div>{product.product_name}</div>
          <div>{formatCurrency(product.price)}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
