import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Banner from './Banner';


function AppLayout() {



  return (
    <main>
      <Banner />
      <Navbar />
      <div className="px-4">
        <Outlet />
      </div>
    </main>
  );
}

export default AppLayout;
