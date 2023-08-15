import { Outlet } from "react-router-dom";
import { ModalProvider } from "../context/ModalContext";

import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

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
      <Footer />
    </main>
  );
}

export default AppLayout;
