import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';

import AppLayout from './components/AppLayout';
import AuthLayout from './components/AuthLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import UploadPicture from './pages/UploadPicture';
import RouteChangeListener from './components/RouteChangeListener';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30, // 30 minutes,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <CartProvider>
        <BrowserRouter>
          <RouteChangeListener />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<Product />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="upload-picture" element={<UploadPicture />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="sign-up"
              element={
                <AuthLayout>
                  <SignUp />
                </AuthLayout>
              }
            />
            <Route
              path="login"
              element={
                <AuthLayout>
                  <Login />
                </AuthLayout>
              }
            />
            <Route element={<AuthLayout />}></Route>
          </Routes>

          <Toaster position="top-right" />
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
    // </UserProvider>
  );
}

export default App;
