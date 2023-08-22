import CartItems from '../components/CartItems';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, selectedItems, setSelectedItems } = useCart();

  const cartItemsLength = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  console.log(selectedItems);

  function toggleItemSelection(id) {
    setSelectedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function calculateSelectedTotal() {
    return cartItems.reduce((total, product) => {
      // Check if the product is in the selectedItems list
      if (selectedItems[product.id]) {
        // If the product is selected, add its price multiplied by its quantity to the total
        return total + product.price * product.quantity;
      }
      return total;
    }, 0);
  }

  function retrieveSelectedItemsObject() {
    const newCart = cartItems?.filter(item =>
      item.id.includes(Object.keys(selectedItems))
    );
    return newCart;
  }

  // console.log(Object.keys(selectedItems));
  function areAllItemsSelected() {
    return (
      Object.keys(selectedItems).length === cartItems.length &&
      !Object.values(selectedItems).includes(false)
    );
  }

  console.log(calculateSelectedTotal());

  const toggleSelectAll = () => {
    if (
      Object.keys(selectedItems).length === cartItems.length &&
      !Object.values(selectedItems).includes(false)
    ) {
      setSelectedItems({});
    } else {
      const newSelectedItems = {};
      cartItems.forEach(item => {
        newSelectedItems[item.id] = true;
      });
      setSelectedItems(newSelectedItems);
    }
  };

  return (
    <section className="pt-14">
      <h1 className="mb-3 font-neue text-[2rem]">Shopping Cart</h1>
      <p className="mb-7 text-base font-medium text-grey-500">
        Showing {cartItemsLength} products you added
      </p>
      {cartItemsLength === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img className="mb-6" src="empty-cart.svg" alt="Your Cart is Empty" />
          <h2 className="text-center text-lg font-medium">
            Your Cart is Empty
          </h2>
        </div>
      ) : (
        <div>
          <fieldset className="mb-8 border-b border-t border-grey-100 py-2">
            <legend className="sr-only">Cart</legend>
            <div className="flex h-6 items-center gap-x-3">
              <span className="p-1">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  onChange={toggleSelectAll}
                  checked={areAllItemsSelected()}
                  className="h-4 w-4 rounded border-grey-100  text-primary-black-500 focus:ring-primary-black-500"
                />
              </span>
              <div>
                <label
                  htmlFor="comments"
                  className="text-sm font-medium text-primary-black-500"
                >
                  Select All
                </label>
                <span className="ml-2 rounded-full bg-grey-100 px-[0.625rem] py-[0.3125rem] text-sm font-medium">
                  {cartItemsLength}
                </span>
              </div>
            </div>
          </fieldset>
          <div>
            {cartItems.map(product => (
              <CartItems
                key={product.id}
                product={product}
                isSelected={!!selectedItems[product.id]}
                onSelect={() => toggleItemSelection(product.id)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
