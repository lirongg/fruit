import React, {useState} from "react";

function ShoppingCart() {
  const [cartItems, setCartItems]  = useState( [
    {
      id: 2,
      name: "Banana",
      price: 2.0,
      quantity: 2,
      imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
      imageAlt: "A bunch of bananas.",
    },
    {
      id: 3,
      name: "Orange",
      price: 3.2,
      quantity: 3,
      imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
      imageAlt: "A juicy orange.",
    },
  ]);

  const [savedItems, setSavedItems] = useState([]);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleSaveForLater = (id) => {
    const itemToSave = cartItems.find((item) => item.id === id);
    setSavedItems([... savedItems, itemToSave]);
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  const moveToCart = (id) => {
    const itemToMove = savedItems.find((item) => item.id === id)
    setCartItems([...cartItems, itemToMove])
    setSavedItems(savedItems.filter((item) => item.id !==id))
  }

  const handleDeleteFruit = (id, fromCart = true) => {
    if (fromCart) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setSavedItems(savedItems.filter((item) => item.id !== id));
    }
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your Shopping Cart</h2>

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      alt={item.imageAlt}
                      src={item.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">${item.price.toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Total: ${(item.price * item.quantity).toFixed(2)}</p>

                      <div className="flex-space-x-4">
                      <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => handleSaveForLater(item.id)}>Save for Later</button></div>



                      <div className="flex">
                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Proceed to Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{' '}
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
        {savedItems.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900">Saved for Later</h3>
            <ul role="list" className="-my-6 divide-y divide-gray-200 mt-4">
              {savedItems.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      alt={item.imageAlt}
                      src={item.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => moveToCart(item.id)}
                      >
                        Move to Cart
                      </button>
                      <button
                        type="button"
                        className="font-medium text-red-600 hover:text-red-500"
                        onClick={() => handleDeleteFruit(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}


export default ShoppingCart;
