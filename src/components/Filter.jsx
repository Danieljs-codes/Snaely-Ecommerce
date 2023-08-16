// src/components/Filter.jsx
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

function Filter({ section, handleFilterChange, isFilterActive }) {
  return (
    <Disclosure
      defaultOpen={true}
      as="div"
      key={section.id}
      className="sticky border-b border-gray-200 py-6"
    >
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-neue text-2xl font-medium text-gray-900">
                {section.name}
              </span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <div className="space-y-4">
              {section.options.map((option, optionIdx) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={`filter-${section.id}-${optionIdx}`}
                    name={`${section.id}[]`}
                    onChange={e => handleFilterChange(e, section.id)}
                    defaultValue={option.value}
                    type="checkbox"
                    checked={isFilterActive(section.id, option.value)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Filter;
