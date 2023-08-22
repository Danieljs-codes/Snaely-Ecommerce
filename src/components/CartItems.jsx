import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { formatCurrency } from '../utils/helpers';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

function CartItems({ product, isSelected, onSelect }) {
  const { handleAddItem, handleDeleteItem } = useCart();
  const [quantity, setQuantity] = useState(product.quantity);

  function handleAdd(item) {
    handleAddItem(item);
  }
  function handleReduce(item) {
    handleDeleteItem(item.id);
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center gap-x-3">
        <input
          id="product"
          checked={isSelected}
          onChange={onSelect}
          name="product"
          type="checkbox"
          className="h-4 w-4 rounded border-grey-100  text-primary-black-500 focus:ring-primary-black-500"
        />
        <img
          className="h-[4.75rem] w-[4.75rem] object-cover"
          src={product.image}
          alt=""
        />
        <div>
          <span className="block font-neue text-xs text-grey-500">
            {product.category}
          </span>
          <h3 className="font-neue text-base text-primary-black-500">
            {product.name}
          </h3>
          <p className="font-neue text-base text-primary-black-500">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <span
          className="inline-flex h-6 w-6 items-center justify-center border-primary-black-500"
          onClick={() => handleReduce(product)}
        >
          <MinusIcon className="h-4 w-4" />
        </span>
        <input
          className="inline-block h-6 w-10 border-none"
          value={product.quantity}
          onChange={e => setQuantity(product.quantity)}
          type="number"
          disabled
        />
        <span
          className="inline-flex h-6 w-6 items-center justify-center border-primary-black-500"
          onClick={() => handleAdd(product)}
        >
          <PlusIcon className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
export default CartItems;
