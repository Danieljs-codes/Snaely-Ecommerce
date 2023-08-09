// ModalContext.js
import { createContext, useContext, useState } from 'react';
import { useDeleteUser } from '../hooks/useDeleteUser';

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { deleteUser, isLoading } = useDeleteUser();

  return (
    <ModalContext.Provider
      value={{ isModalOpen, setIsModalOpen, deleteUser, isLoading }}
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
