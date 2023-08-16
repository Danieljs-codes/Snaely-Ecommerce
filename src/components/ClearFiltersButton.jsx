// src/components/ClearFiltersButton.jsx
function ClearFiltersButton({ clearFilters }) {
  return (
    <button
      onClick={e => {
        e.preventDefault();
        clearFilters();
      }}
      className="mt-8 block w-full rounded-full border border-primary-black-500 py-3 text-center font-neue text-xl"
    >
      Clear Filters
    </button>
  );
}

export default ClearFiltersButton;
