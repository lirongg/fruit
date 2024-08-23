import React, { useState } from "react";
import Chatbox from "./c.Chatbox"; // Ensure you import the Chatbox component

function ProductPage() {
  const fruits = [
    {
      id: 1,
      name: "Apple",
      price: 1.5,
      stock: 10,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "A fresh apple.",
      consideringCount: 5, // Mock data for customers considering buying
    },
    {
      id: 2,
      name: "Banana",
      price: 2.0,
      stock: 20,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
      imageAlt: "A bunch of bananas.",
      consideringCount: 3, // Mock data for customers considering buying
    },
    {
      id: 3,
      name: "Orange",
      price: 3.2,
      stock: 30,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
      imageAlt: "A juicy orange.",
      consideringCount: 2, // Mock data for customers considering buying
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Fruits</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {fruits.map((fruit) => (
            <div key={fruit.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={fruit.imageAlt}
                  src={fruit.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{fruit.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">Stock: {fruit.stock}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    {fruit.consideringCount} customers considering buying this
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">${fruit.price}</p>
              </div>
              <button className="mt-4 w-full flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Chatbox Component */}
      <Chatbox />
    </div>
  );
}

export default ProductPage;
