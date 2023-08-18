import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { formatCurrency } from '../utils/helpers';
import { PRODUCT_COLORS, PRODUCT_SIZES } from '../utils/constants';
import { RadioGroup } from '@headlessui/react';
import Spinner from '../components/Spinner';

function Product() {
  const { id } = useParams();
  const { isLoading, products } = useProducts();
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

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

  console.log(colorAvailable);
  // console.log(isSizeAvailable);

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
    </div>
  );
}

export default Product;
