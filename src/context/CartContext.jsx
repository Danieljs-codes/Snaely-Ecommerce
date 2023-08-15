import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function handleAddItem(itemToAdd) {
    const existingItem = cartItems.find((item) => item.id === itemToAdd.id);

    if (existingItem) {
      const newCart = cartItems.map((item) =>
        item.id === itemToAdd.id
          ? {
              ...item,
              quantity: item.quantity + itemToAdd.quantity,
            }
          : item
      );
      setCartItems(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = [...cartItems, itemToAdd];
      setCartItems(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  }

  function handleDeleteItem(id) {
    const itemToDelete = cartItems.find((item) => item.id === id);

    if (!itemToDelete) {
      return; // Item not found, no action needed
    }

    if (itemToDelete.quantity > 1) {
      const newCartItems = cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
      setCartItems(newCartItems);
    } else {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCart);
    }
  }

  function handleAddItem(itemToAdd) {
    const existingItem = cartItems.find((item) => item.id === itemToAdd.id);

    if (existingItem) {
      const newCart = cartItems.map((item) =>
        item.id === itemToAdd.id
          ? {
              ...item,
              quantity: item.quantity + itemToAdd.quantity,
            }
          : item
      );
      setCartItems(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = [...cartItems, itemToAdd];
      setCartItems(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  }

  function handleDeleteAllItems() {
    setCartItems([]);
  }


  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddItem,
        handleDeleteItem,
        handleDeleteAllItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
