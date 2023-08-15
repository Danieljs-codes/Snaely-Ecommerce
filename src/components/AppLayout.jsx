import { Outlet } from 'react-router-dom';
import { ModalProvider } from '../context/ModalContext';

import Navbar from './Navbar';
import Promo from './Promo';
import Footer from './Footer';

function AppLayout() {
  return (
    <main>
      <Promo />
      <ModalProvider>
        <Navbar />
      </ModalProvider>
      <div className="px-4">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default AppLayout;
