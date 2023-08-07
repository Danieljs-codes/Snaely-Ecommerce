import { Outlet } from 'react-router-dom';
import { ModalProvider } from '../context/ModalContext';

import Navbar from './Navbar';
import Banner from './Banner';

function AppLayout() {
  return (
    <main>
      <Banner />
      <ModalProvider>
        <Navbar />
      </ModalProvider>
      <div className="px-4">
        <Outlet />
      </div>
    </main>
  );
}

export default AppLayout;
