import { useState } from 'react';
import { useProducts } from './useProducts';

export function useProductFilter() {
  const { isLoading, products } = useProducts();
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
    if (
      filters[filterType]
        .map(filter => filter.toLowerCase())
        .includes(selectedFilter)
    ) {
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

  const filteredProducts =
    products && products.length > 0
      ? products.filter(
          product =>
            (filters.color.length === 0 ||
              product.colors
                .map(color => color.toLowerCase())
                .some(item => filters.color.includes(item))) &&
            (filters.category.length === 0 ||
              filters.category.includes(
                product.categories.category_name.toLowerCase()
              )) &&
            (filters.size.length === 0 ||
              product.size
                .map(size => size.toLowerCase())
                .some(item => filters.size.includes(item)))
        )
      : [];

  return {
    handleFilterChange,
    filteredProducts,
    filters,
    clearFilters,
    isFilterActive,
  };
}
