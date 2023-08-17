import { useState } from 'react';
import { useProducts } from './useProducts';

export function useProductFilter() {
  const { products } = useProducts();

  const initialFilters = {
    color: [],
    category: [],
    size: [],
  };
  const [filters, setFilters] = useState(initialFilters);

  const isFilterActive = (filterType, value) => {
    return filters[filterType].includes(value.toLowerCase());
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  const handleFilterChange = (e, filterType) => {
    const selectedFilter = e.target.value.toLowerCase();

    const isProductFiltered = filters[filterType]
      .map(filter => filter.toLowerCase())
      .includes(selectedFilter);

    if (isProductFiltered) {
      setFilters({
        ...filters,
        [filterType]: filters[filterType].filter(
          item => item.toLowerCase() !== selectedFilter
        ),
      });
    } else {
      setFilters({
        ...filters,
        [filterType]: [...filters[filterType], selectedFilter],
      });
    }
  };

  // prettier-ignore
  const filteredProducts = products && products.length > 0 ? products.filter(product => {
        const colorFilterPassed = filters.color.length === 0 || product.colors.some(color => filters.color.includes(color.toLowerCase()));

        const categoryFilterPassed = filters.category.length === 0 || filters.category.includes(product.categories.category_name.toLowerCase());

        const sizeFilterPassed = filters.size.length === 0 || product.size.some(size => filters.size.includes(size.toLowerCase()));

        return colorFilterPassed && categoryFilterPassed && sizeFilterPassed;
    }) : [];

  return {
    handleFilterChange,
    filteredProducts,
    filters,
    clearFilters,
    isFilterActive,
  };
}
