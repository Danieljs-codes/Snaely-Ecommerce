import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { useShowcase, useShowcaseFilters } from '../hooks/useShowcase';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Spinner from './Spinner';
import ShowcaseCard from './ShowcaseCard';
import LinkButton from './LinkButton';

function ShowcaseProducts() {
  const { isLoading: showcaseLoading, showcaseFilter } = useShowcaseFilters();
  const { showcase, isLoading } = useShowcase();

  const filters = showcaseFilter?.map(showcase => showcase.category_name) || [];

  filters.unshift('all');
  const [currentFilter, setCurrentFilter] = useState(filters[0]);

  // Step 1: Create a new array of showcase items based on the current filter
  let showcaseItems = [];
  if (currentFilter === 'all') {
    // Step 2: If the current filter is 'all', return the original showcase items
    showcaseItems = Array.isArray(showcase) ? showcase : [];
  } else {
    // Step 3: If the current filter is not 'all', return the showcase items that match the current filter
    showcaseItems = showcase.filter(
      item => item.categories.category_name === currentFilter
    );
  }

  if (showcaseLoading) return <Spinner />;

  return (
    <div className="py-9 text-center text-[1.75rem] leading-none">
      <h2 className="mb-6 font-neue">
        Choose the best everyday wear everyday wear
      </h2>

      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <RadioGroup
            className="mb-4"
            value={currentFilter}
            onChange={setCurrentFilter}
          >
            <RadioGroup.Label className="sr-only">
              Select Filter
            </RadioGroup.Label>
            <div className="flex flex-wrap items-center justify-center gap-x-2">
              {filters.map(filter => (
                <RadioGroup.Option
                  key={filter}
                  value={filter}
                  className="cursor-pointer rounded-full border border-gray-100 px-[0.625rem] py-2 font-neue text-base text-gray-500 ui-checked:bg-primary-black-500 ui-checked:text-white ui-active:ring-2 ui-active:ring-primary-black-500 lg:text-lg xl:px-6 xl:py-[0.875rem] xl:text-2xl"
                >
                  <RadioGroup.Label as="span">{filter}</RadioGroup.Label>
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        )}
        <div className="grid gap-y-5 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-7">
          {showcaseItems?.map(item => (
            <ShowcaseCard
              key={item.product_id}
              id={item.product_id}
              showcase={item}
            />
          ))}
        </div>
        <div className="lg:flex lg:items-center lg:justify-center">
          <LinkButton
            icon={
              <ArrowUpRightIcon className="h-4 w-4 text-primary-black-500" />
            }
            text="More Collection"
            path="/products"
            className="mb-0 mt-8 w-fit justify-center text-center"
          />
        </div>
      </div>
    </div>
  );
}

export default ShowcaseProducts;
