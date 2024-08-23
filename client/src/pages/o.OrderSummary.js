import React from "react";

function OrderSummary() {
  const allOrders = [
    {
      customerId: 1,
      customerName: "John Doe",
      orders: [
        {
          id: 1,
          name: "Order #1",
          items: [
            {
              name: "Apple",
              imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
              imageAlt: "A fresh apple.",
              quantity: 2,
              price: 1.5,
            },
            {
              name: "Banana",
              imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
              imageAlt: "A bunch of bananas.",
              quantity: 1,
              price: 2.0,
            },
          ],
          total: 5.0,
        },
        {
          id: 2,
          name: "Order #2",
          items: [
            {
              name: "Orange",
              imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
              imageAlt: "A juicy orange.",
              quantity: 3,
              price: 3.2,
            },
          ],
          total: 9.6,
        },
      ],
    },
    {
      customerId: 2,
      customerName: "Jane Smith",
      orders: [
        {
          id: 3,
          name: "Order #3",
          items: [
            {
              name: "Apple",
              imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
              imageAlt: "A fresh apple.",
              quantity: 1,
              price: 1.5,
            },
          ],
          total: 1.5,
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customer Order Summary</h2>

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {allOrders.map((customer) => (
                <li key={customer.customerId} className="py-6">
                  <h3 className="text-lg font-bold text-gray-900">{customer.customerName}</h3>
                  <div className="mt-4 space-y-4">
                    {customer.orders.map((order) => (
                      <div key={order.id}>
                        <h4 className="text-md font-semibold text-gray-900">{order.name}</h4>
                        <div className="mt-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex py-4">
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
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between border-t border-gray-200 pt-4">
                          <p className="text-base font-medium text-gray-900">Total: ${order.total.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
