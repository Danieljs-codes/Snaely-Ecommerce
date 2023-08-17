// src/components/ProductGrid.jsx
import ShowcaseCard from './ShowcaseCard';

function ProductGrid({ sortedProducts }) {
  return sortedProducts.length > 0 ? (
    <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:col-span-3 lg:gap-y-8 xl:grid-cols-3">
      {sortedProducts.map(product => (
        <ShowcaseCard
          key={product.product_id}
          id={product.product_id}
          showcase={product}
        />
      ))}
    </div>
  ) : (
    <h2 className="text-2xl font-medium text-gray-900">No products found</h2>
  );
}

export default ProductGrid;
