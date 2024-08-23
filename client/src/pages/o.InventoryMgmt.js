import React, { useState } from "react";

function InventoryMgmt() {
  const initialInventory = [
    {
      id: 1,
      name: "Apple",
      price: 1.5,
      quantity: 10,
      imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "A fresh apple.",
    },
    {
      id: 2,
      name: "Banana",
      price: 2.0,
      quantity: 20,
      imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
      imageAlt: "A bunch of bananas.",
    },
    {
      id: 3,
      name: "Orange",
      price: 3.2,
      quantity: 30,
      imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
      imageAlt: "A juicy orange.",
    },
  ];

  const [inventory, setInventory] = useState(initialInventory);
  const [newFruit, setNewFruit] = useState({
    name: "",
    price: "",
    quantity: "",
    imageSrc: "",
    imageAlt: "",
  });

  const handleQuantityChange = (id, newQuantity) => {
    setInventory(
      inventory.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleAddFruit = () => {
    const newId = inventory.length ? inventory[inventory.length - 1].id + 1 : 1;
    setInventory([...inventory, { ...newFruit, id: newId }]);
    setNewFruit({ name: "", price: "", quantity: "", imageSrc: "", imageAlt: "" });
  };

  const handleDeleteFruit = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Inventory Management</h2>

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {inventory.map((item) => (
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
                      <div className="mt-1 flex text-sm text-gray-500">
                        <label htmlFor={`quantity-${item.id}`} className="mr-2">Quantity:</label>
                        <input
                          id={`quantity-${item.id}`}
                          type="number"
                          min="0"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          className="w-16 rounded-md border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <button
                        type="button"
                        className="font-medium text-red-600 hover:text-red-500"
                        onClick={() => handleDeleteFruit(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-medium text-gray-900">Add New Fruit</h3>
          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-1">
              <label htmlFor="fruit-name" className="block text-sm font-medium text-gray-700">
                Fruit Name
              </label>
              <input
                id="fruit-name"
                type="text"
                value={newFruit.name}
                onChange={(e) => setNewFruit({ ...newFruit, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="fruit-price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                id="fruit-price"
                type="number"
                step="0.01"
                value={newFruit.price}
                onChange={(e) => setNewFruit({ ...newFruit, price: parseFloat(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="fruit-quantity" className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                id="fruit-quantity"
                type="number"
                value={newFruit.quantity}
                onChange={(e) => setNewFruit({ ...newFruit, quantity: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="fruit-image" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                id="fruit-image"
                type="text"
                value={newFruit.imageSrc}
                onChange={(e) => setNewFruit({ ...newFruit, imageSrc: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="fruit-image-alt" className="block text-sm font-medium text-gray-700">
                Image Alt Text
              </label>
              <input
                id="fruit-image-alt"
                type="text"
                value={newFruit.imageAlt}
                onChange={(e) => setNewFruit({ ...newFruit, imageAlt: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="button"
                onClick={handleAddFruit}
                className="w-full flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Fruit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryMgmt;
