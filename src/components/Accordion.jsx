import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const Accordion = ({ returnPolicy, materials, description }) => {
  console.log(materials);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = section => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      <div className="border-b border-t border-grey-100">
        <button
          className="flex w-full py-4 text-left text-sm font-medium"
          onClick={() => toggleSection('returnPolicy')}
        >
          <span className="flex-1">Return Policy</span>
          <span>
            {openSection === 'returnPolicy' ? (
              <ChevronDownIcon className="inline-block h-5 w-5 text-right text-primary-black-500" />
            ) : (
              <ChevronUpIcon className="inline-block h-5 w-5 text-right text-primary-black-500" />
            )}
          </span>
        </button>
        <AnimatePresence>
          {openSection === 'returnPolicy' && (
            <motion.div
              className="mb-2 text-left text-sm font-medium"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
            >
              {returnPolicy}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border-b border-t border-grey-100">
        <button
          className="flex w-full py-4 text-left text-sm font-medium"
          onClick={() => toggleSection('materials')}
        >
          <span className="flex-1">Materials</span>
          <span>
            {openSection === 'materials' ? (
              <ChevronDownIcon className="inline-block h-5 w-5 text-right text-primary-black-500" />
            ) : (
              <ChevronUpIcon className="inline-block h-5 w-5 text-right text-primary-black-500" />
            )}
          </span>
        </button>
        <AnimatePresence>
          {openSection === 'materials' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
            >
              <span className="text-left text-sm font-medium">
                {Array.isArray(materials) ? (
                  <ul>
                    {materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                ) : (
                  materials
                )}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border-b border-t border-grey-100">
        <button
          className="flex w-full py-4 text-left text-sm font-medium"
          onClick={() => toggleSection('description')}
        >
          <span className="flex-1">Overview</span>
          <span>
            {openSection === 'description' ? (
              <ChevronDownIcon className="inline-block h-5 w-5 text-right text-primary-black-500" />
            ) : (
              <ChevronUpIcon className="inline-block h-5 w-5 text-right text-primary-black-500" />
            )}
          </span>
        </button>
        <AnimatePresence>
          {openSection === 'description' && (
            <motion.div
              className="mb-2 text-left text-sm font-medium"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
            >
              {description}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordion;
