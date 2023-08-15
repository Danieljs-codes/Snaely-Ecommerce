import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import AuthLayout from "./components/AuthLayout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30, // 30 minutes,
    },
  },
});

function App() {
  return (
    // <UserProvider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <CartProvider>
        <BrowserRouter>
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
              <Route path="product" element={<Products />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="*" element={<h1>404</h1>} />
            <Route element={<AuthLayout />}>
              <Route path="sign-up" element={<SignUp />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>

          <Toaster position="top-right" />
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
    // </UserProvider>
  );
}

export default App;
