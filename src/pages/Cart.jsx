import CartItems from '../components/CartItems';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/helpers';

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

  // console.log(Object.keys(selectedItems));
  function areAllItemsSelected() {
    return (
      Object.keys(selectedItems).length === cartItems.length &&
      !Object.values(selectedItems).includes(false)
    );
  }

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
    <section className="grid gap-8 py-14 lg:grid-cols-[1fr_320px]">
      <div className="">
        <h1 className="mb-3 font-neue text-[2rem]">Shopping Cart</h1>
        <p className="mb-7 text-base font-medium text-grey-500">
          Showing {cartItemsLength} products you added
        </p>
        {cartItemsLength === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <img
              className="mb-6"
              src="empty-cart.svg"
              alt="Your Cart is Empty"
            />
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
            <div className="space-y-4">
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
      </div>
      <div className="self-start border border-primary-black-500 px-5 py-6">
        <div className="border-b border-grey-100">
          <h3 className="mb-4 font-neue text-2xl">Order Summary</h3>
          <p className="mb-5 text-sm font-medium capitalize text-primary-black-500">
            No Product Selected
          </p>
        </div>
        <div className="flex flex-col gap-y-3 pt-5 text-sm font-medium">
          <div className="flex items-center justify-between tracking-wider text-grey-500">
            <p>Total Price(Item)</p>
            <p>{formatCurrency(calculateSelectedTotal())}</p>
          </div>
          <div className="flex items-center justify-between tracking-wider text-grey-500">
            <p>Tax & Fee</p>
            <p>$0.00</p>
          </div>
          <div className="flex items-center justify-between tracking-wider text-grey-500">
            <p>Grand Total</p>
            <p>{formatCurrency(calculateSelectedTotal())}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
