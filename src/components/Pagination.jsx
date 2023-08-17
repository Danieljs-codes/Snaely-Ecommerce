import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS_PER_PAGE } from '../utils/constants';

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;

  const pageCount = Math.ceil(count / PRODUCTS_PER_PAGE);

  function prevPage() {
    const prevPage = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set('page', prevPage);
    setSearchParams(searchParams);
  }

  function nextPage() {
    const nextPage = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set('page', nextPage);
    setSearchParams(searchParams);
  }

  function handleSetSearchParam(num) {
    searchParams.set('page', num);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="relative flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-medium">
              {(currentPage - 1) * PRODUCTS_PER_PAGE + 1}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {currentPage === pageCount
                ? count
                : currentPage * PRODUCTS_PER_PAGE}
            </span>{' '}
            of <span className="font-medium">{count}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex space-x-[2px] rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              disabled={currentPage === 1}
              onClick={prevPage}
              className="flex h-9 w-9 items-center justify-center border border-grey-100 text-grey-500 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Numbers */}
            <button
              onClick={() => handleSetSearchParam(1)}
              className={`flex h-9 w-9 ${
                currentPage === 1
                  ? 'border-primary-black-500 text-primary-black-500'
                  : 'border-grey-100 text-grey-500'
              } items-center justify-center border   disabled:cursor-not-allowed `}
            >
              1
            </button>
            <button
              onClick={() => handleSetSearchParam(2)}
              className={`flex h-9 w-9 ${
                currentPage === 2
                  ? 'border-primary-black-500 text-primary-black-500'
                  : 'border-grey-100 text-grey-500'
              } items-center justify-center border   disabled:cursor-not-allowed `}
            >
              2
            </button>
            {pageCount >= 4 && (
              <>
                <span
                  className="} flex h-9 w-9 items-center items-center justify-center justify-center border
                  border border-grey-100 text-grey-500 disabled:cursor-not-allowed disabled:cursor-not-allowed"
                >
                  ...
                </span>
              </>
            )}
            {pageCount >= 3 && (
              <button
                onClick={() => handleSetSearchParam(pageCount)}
                className={`flex h-9 w-9 ${
                  currentPage === pageCount
                    ? 'border-primary-black-500 text-primary-black-500'
                    : 'border-grey-100 text-grey-500'
                } items-center justify-center border   disabled:cursor-not-allowed `}
              >
                {pageCount}
              </button>
            )}
            {/* End of Numbers */}
            <button></button>
            <button
              onClick={nextPage}
              disabled={currentPage === pageCount}
              // className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              className="flex h-9 w-9 items-center justify-center border border-grey-100 text-grey-500 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Pagination;
