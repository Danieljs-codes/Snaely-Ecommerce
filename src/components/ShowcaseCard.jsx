import Button from './Button.jsx';
import { formatCurrency } from '../utils/helpers.js';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

function ShowcaseCard({ showcase, id }) {
  const { handleAddItem } = useCart();

  function addItemToCart() {
    const item = {
      id: showcase.product_id,
      category: showcase.categories.category_name,
      color: showcase.colors.at(0),
      description: showcase.description,
      price: showcase.price,
      image: showcase.product_image.at(0),
      name: showcase.product_name,
      quantity: 1,
    };

    console.log(item);
    handleAddItem(item);
  }

  return (
    <Link to={`/products/${id}`}>
      <div className="text-left font-neue">
        <div className="group relative h-[20rem] overflow-hidden">
          <img
            className="object-cover"
            src={showcase.product_image.at(0)}
            alt={showcase.product_name}
          />
          <div className="absolute inset-0 mb-4 hidden flex-col justify-end bg-[#DADADA] bg-black/40  group-hover:flex">
            <div className="z-20 px-4">
              <Button
                onClick={addItemToCart}
                className="mt-0 py-[0.625rem] text-sm transition-colors"
              >
                Add to Cart
              </Button>
              <Button className="mt-0 mt-2 border border-primary-black-500 bg-transparent py-[0.625rem] text-sm text-primary-black-500 transition-colors">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-neue text-sm text-gray-500">
            {showcase.categories.category_name}
          </p>
          <div className="flex items-center">
            <h3 className="flex-1 text-xl">{showcase.product_name}</h3>
            <p className="text-xl">{formatCurrency(showcase.price)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ShowcaseCard;
