// ModalContext.js
import { createContext, useContext, useState } from 'react';
import { useSignOut } from '../hooks/useSignOut';

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { logout, isLoading } = useSignOut();

  return (
    <ModalContext.Provider
      value={{ isModalOpen, setIsModalOpen, logout, isLoading }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}

export { ModalProvider, useModal };
