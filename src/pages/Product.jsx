import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { formatCurrency, delay } from '../utils/helpers';
import { PRODUCT_COLORS, PRODUCT_SIZES } from '../utils/constants';
import { RadioGroup } from '@headlessui/react';
import { useCart } from '../context/CartContext';
import Spinner from '../components/Spinner';

function Product() {
  const { id } = useParams();
  const { handleAddItem } = useCart();
  const { isLoading, products } = useProducts();
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [addingToCart, setAddingToCart] = useState(false);

  const product = products?.find(product => product.product_id === id);

  if (isLoading) {
    return <Spinner />;
  }

  const sizeAvailable = PRODUCT_SIZES.map(size =>
    product.size.includes(size)
      ? { size: size, inStore: true }
      : { size: size, inStore: false }
  );
  const colorAvailable = PRODUCT_COLORS.map(color =>
    product.colors.map(color => color.toLowerCase()).includes(color)
      ? { color: color, inStore: true }
      : { color: color, inStore: false }
  );

  async function addToCart() {
    setAddingToCart(true);
    const itemToAdd = {
      id: product.product_id,
      name: product.product_name,
      price: product.price,
      image: product.product_image[0],
      quantity: 1,
      size: size,
      color: color,
    };

    await delay(500);
    handleAddItem(itemToAdd);
    setAddingToCart(false);
  }

  return (
    <div className="grid grid-cols-1 gap-y-8 py-[3.25rem] lg:grid-cols-2">
      <div>
        <img
          className="h-[23.75rem] w-full object-cover"
          src={product.product_image[0]}
          alt=""
        />
        <div className="mt-3 flex h-[3.75rem] gap-x-3">
          <img
            className="object- h-full w-full flex-1"
            src={product.product_image[0]}
            alt=""
          />
          <img
            className="object- h-full w-full flex-1"
            src={product.product_image[0]}
            alt=""
          />
          <img
            className="object- h-full w-full flex-1"
            src={product.product_image[0]}
            alt=""
          />
          <img
            className="object- h-full w-full flex-1"
            src={product.product_image[0]}
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="mb-3 font-neue text-sm text-grey-500">
          {product.categories.category_name}
        </p>
        <h1 className="mb-1 font-neue text-2xl text-[2rem] text-primary-black-500">
          {product.product_name}
        </h1>
        <p className="mb-8 font-neue text-2xl">
          {formatCurrency(product.price)}
        </p>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="font-neue text-base text-primary-black-500">Size</p>
            <p className="font-sans text-sm font-medium text-primary-black-500 underline">
              Size guide
            </p>
          </div>
        </div>
        <div className="mb-4">
          <RadioGroup value={size} onChange={setSize}>
            <RadioGroup.Label className="sr-only">
              Choose out of the size available
            </RadioGroup.Label>
            <div className="flex gap-x-2">
              {sizeAvailable.map(size => (
                <RadioGroup.Option
                  key={size.size}
                  value={size.size}
                  className={` ${
                    size.inStore
                      ? 'cursor-pointer focus:outline-none'
                      : 'cursor-not-allowed opacity-25'
                  } ui-active:border-primary-500 flex h-10 w-10 items-center justify-center border border-grey-200 text-xs font-medium text-gray-500 ui-checked:border-primary-black-500 ui-checked:text-primary-black-500 ui-active:text-primary-black-500`}
                  disabled={!size.inStore}
                >
                  <RadioGroup.Label as="span">{size.size}</RadioGroup.Label>
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div>
          <RadioGroup value={color} onChange={setColor}>
            <RadioGroup.Label className="font-neue text-base text-primary-black-500">
              Color
            </RadioGroup.Label>
            <div className="flex flex-shrink-0 gap-x-2">
              {colorAvailable.map(color => (
                <RadioGroup.Option
                  key={color.color}
                  value={color.color}
                  className={` ${
                    color.inStore
                      ? 'cursor-pointer focus:outline-none'
                      : 'cursor-not-allowed opacity-25'
                  } ui-active:border-primary-500 border border-grey-200 px-6 py-3 text-xs font-medium text-gray-500 ui-checked:border-primary-black-500 ui-checked:text-primary-black-500 ui-active:text-primary-black-500`}
                  disabled={!color.inStore}
                >
                  <RadioGroup.Label className="capitalize" as="span">
                    {color.color}
                  </RadioGroup.Label>
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <button
          onClick={addToCart}
          disabled={addingToCart}
          className="mt-0 flex w-full items-center justify-center rounded-full border border-primary-black-500 bg-transparent py-3 text-sm text-primary-black-500"
        >
          {addingToCart ? (
            <span className="mr-3 animate-spin">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4C6.69807 2.4 2.4 6.69807 2.4 12Z"
                  fill="#E5E9F2"
                />
                <path
                  d="M12 -5.24537e-07C14.5158 -6.34507e-07 16.968 0.790711 19.01 2.26036C21.0519 3.73001 22.5803 5.80427 23.3791 8.18991C24.1779 10.5756 24.2067 13.1519 23.4614 15.5548C22.7161 17.9577 21.2345 20.0656 19.2259 21.5805C17.2173 23.0955 14.7834 23.9408 12.2682 23.997C9.75299 24.0532 7.28373 23.3175 5.20946 21.8939C3.13519 20.4702 1.56083 18.4306 0.708921 16.0634C-0.142988 13.6962 -0.229351 11.1212 0.462038 8.70221L2.76963 9.36176C2.21652 11.2969 2.28561 13.357 2.96714 15.2508C3.64866 17.1445 4.90815 18.7762 6.56757 19.9151C8.22699 21.054 10.2024 21.6426 12.2145 21.5976C14.2267 21.5526 16.1738 20.8764 17.7807 19.6644C19.3876 18.4525 20.5729 16.7662 21.1691 14.8439C21.7653 12.9215 21.7423 10.8604 21.1033 8.95193C20.4642 7.04341 19.2415 5.38401 17.608 4.20829C15.9744 3.03257 14.0127 2.4 12 2.4L12 -5.24537e-07Z"
                  fill="#070707"
                />
              </svg>
            </span>
          ) : (
            <span className="mr-3">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18.25C9 18.5467 8.91203 18.8367 8.7472 19.0834C8.58238 19.33 8.34811 19.5223 8.07402 19.6358C7.79994 19.7494 7.49834 19.7791 7.20736 19.7212C6.91639 19.6633 6.64912 19.5204 6.43934 19.3107C6.22956 19.1009 6.0867 18.8336 6.02882 18.5426C5.97094 18.2517 6.00065 17.9501 6.11418 17.676C6.22771 17.4019 6.41997 17.1676 6.66664 17.0028C6.91332 16.838 7.20333 16.75 7.5 16.75C7.89782 16.75 8.27936 16.908 8.56066 17.1893C8.84196 17.4706 9 17.8522 9 18.25ZM17.25 16.75C16.9533 16.75 16.6633 16.838 16.4166 17.0028C16.17 17.1676 15.9777 17.4019 15.8642 17.676C15.7506 17.9501 15.7209 18.2517 15.7788 18.5426C15.8367 18.8336 15.9796 19.1009 16.1893 19.3107C16.3991 19.5204 16.6664 19.6633 16.9574 19.7212C17.2483 19.7791 17.5499 19.7494 17.824 19.6358C18.0981 19.5223 18.3324 19.33 18.4972 19.0834C18.662 18.8367 18.75 18.5467 18.75 18.25C18.75 17.8522 18.592 17.4706 18.3107 17.1893C18.0294 16.908 17.6478 16.75 17.25 16.75ZM21.7172 4.97031L19.0425 13.6619C18.9024 14.1226 18.6175 14.5259 18.2301 14.812C17.8427 15.0981 17.3734 15.2517 16.8919 15.25H7.88156C7.3931 15.2482 6.91837 15.0882 6.52848 14.7939C6.13858 14.4997 5.85449 14.087 5.71875 13.6178L2.32687 1.75H0.75C0.551088 1.75 0.360322 1.67098 0.21967 1.53033C0.0790176 1.38968 0 1.19891 0 1C0 0.801088 0.0790176 0.610322 0.21967 0.46967C0.360322 0.329018 0.551088 0.25 0.75 0.25H2.32687C2.65257 0.25108 2.96916 0.357614 3.22925 0.553654C3.48934 0.749694 3.67895 1.0247 3.76969 1.3375L4.53 4H21C21.1174 3.99996 21.2331 4.02746 21.3379 4.08029C21.4427 4.13313 21.5336 4.20982 21.6034 4.30421C21.6732 4.39859 21.7198 4.50803 21.7396 4.62372C21.7593 4.73941 21.7517 4.85812 21.7172 4.97031ZM19.9847 5.5H4.95844L7.16062 13.2062C7.20543 13.3629 7.30002 13.5007 7.43009 13.5988C7.56016 13.6969 7.71864 13.75 7.88156 13.75H16.8919C17.0524 13.7501 17.2086 13.6986 17.3377 13.6033C17.4668 13.508 17.5619 13.3737 17.6091 13.2203L19.9847 5.5Z"
                  fill="#070707"
                />
              </svg>
            </span>
          )}
          Add to Cart
        </button>
        <button
          disabled
          className="rounded-full bg-primary-black-500 py-3 text-sm text-grey-50 disabled:cursor-not-allowed"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Product;
