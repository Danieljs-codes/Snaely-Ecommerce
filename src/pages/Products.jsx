// src/pages/Products.jsx
import { useState, Fragment } from 'react';
import { Dialog, Transition, Menu } from '@headlessui/react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  XMarkIcon,
  FunnelIcon,
} from '@heroicons/react/20/solid';
import { useProductFilter } from '../hooks/useProductFilter';
import Filter from '../components/Filter';
import ClearFiltersButton from '../components/ClearFiltersButton';
import ProductGrid from '../components/ProductGrid';

const sortOptions = [
  { name: 'Default', value: 'default' },
  { name: 'Name', value: 'name' },
  { name: 'Price: Low to High', value: 'price(H-L)' },
  { name: 'Price: High to Low', value: 'price(L-H)' },
];

const filtersFacet = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'light beige', label: 'Light Beige', checked: false },
      { value: 'burgundy', label: 'Burgundy', checked: false },
      { value: 'light coral', label: 'Light Coral', checked: false },
      // ...other colors
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'pants', label: 'Pants', checked: false },
      { value: 'jackets', label: 'Jackets', checked: false },
      { value: 'bottoms', label: 'Bottoms', checked: false },
      { value: 'tops', label: 'Tops', checked: false },
      // ...other categories
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: 'xs', label: 'XS', checked: false },
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
      { value: 'xl', label: 'XL', checked: false },
      // ...other sizes
    ],
  },
  // ...other filter sections
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Products() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { handleFilterChange, filteredProducts, clearFilters, isFilterActive } =
    useProductFilter();
  const [sort, setSort] = useState('default');

  const handleSortChange = value => {
    setSort(value);
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case 'name':
        return a.product_name.localeCompare(b.product_name);
      case 'price(H-L)':
        return a.price - b.price;
      case 'price(L-H)':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-white">
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="font-neue text-lg font-medium text-gray-900">
                    Filters
                  </h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <form className="mt-4 border-t border-gray-200 px-4">
                  {filtersFacet.map(section => (
                    <Filter
                      key={section.id}
                      section={section}
                      handleFilterChange={handleFilterChange}
                      isFilterActive={isFilterActive}
                    />
                  ))}
                  <ClearFiltersButton clearFilters={clearFilters} />
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1>
          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map(option => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <button
                            value={option.value}
                            onClick={() => handleSortChange(option.value)}
                            className={classNames(
                              option.current
                                ? 'font-medium text-gray-900'
                                : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                            {option.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <form className="hidden lg:block">
              <div className="border border-primary-black-500 px-6 py-8">
                <h2 className="font-neue text-2xl text-primary-black-500">
                  Filters
                </h2>
                {filtersFacet.map(section => (
                  <Filter
                    key={section.id}
                    section={section}
                    handleFilterChange={handleFilterChange}
                    isFilterActive={isFilterActive}
                  />
                ))}
                <ClearFiltersButton clearFilters={clearFilters} />
              </div>
            </form>
            <ProductGrid sortedProducts={sortedProducts} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Products;
