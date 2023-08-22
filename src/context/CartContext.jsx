import { createContext, useContext, useEffect, useState } from 'react';
import Toast from '../components/Toast';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});

  useEffect(() => {
    localStorage.getItem('cart')
      ? setCartItems(JSON.parse(localStorage.getItem('cart')))
      : setCartItems([]);
  }, []);

  function handleAddItem(itemToAdd) {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);
    if (existingItem && existingItem.quantity >= 25) {
      Toast('error', 'You can only add 25 of each item to your cart');
      return;
    }

    if (existingItem) {
      const newCart = cartItems.map(item =>
        item.id === itemToAdd.id
          ? {
              ...item,
              size: itemToAdd.size,
              color: itemToAdd.color,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCartItems(newCart);

      localStorage.setItem('cart', JSON.stringify(newCart));
      Toast('success', 'Item quantity increased');
    } else {
      const newCart = [...cartItems, itemToAdd];
      setCartItems(newCart);
      setSelectedItems(prev => ({ ...prev, [itemToAdd.id]: true }));
      localStorage.setItem('cart', JSON.stringify(newCart));
      Toast('success', 'Item added to cart');
    }
  }

  function handleDeleteItem(id) {
    const itemToDelete = cartItems.find(item => item.id === id);

    if (!itemToDelete) {
      return Toast('error', `Can't find item in cart`); // Item not found, no action needed
    }

    if (itemToDelete.quantity > 1) {
      const newCartItems = cartItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
      setCartItems(newCartItems);
      localStorage.setItem('cart', JSON.stringify(newCartItems));
      return Toast('error', `Item Decreased`);
    } else {
      const updatedCart = cartItems.filter(item => item.id !== id);
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      Toast('error', `Item removed from cart`);
      const updatedSelectedItems = { ...selectedItems };
      delete updatedSelectedItems[id];
      setSelectedItems(updatedSelectedItems);
    }
  }

  function handleDeleteAllItems() {
    setCartItems([]);
    localStorage.setItem('cart', JSON.stringify([]));
    Toast('success', 'Cart cleared');
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddItem,
        handleDeleteItem,
        handleDeleteAllItems,
        selectedItems,
        setSelectedItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCart };
