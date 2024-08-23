import React, { useState, useEffect } from "react";
import { format } from "date-fns";

function Dashboard() {
  // Mock sales data
  const salesData = [
    {
      date: new Date(2024, 7, 20),
      fruit: "Apple",
      quantity: 10,
      price: 1.5,
    },
    {
      date: new Date(2024, 7, 20),
      fruit: "Banana",
      quantity: 5,
      price: 2.0,
    },
    {
      date: new Date(2024, 7, 21),
      fruit: "Orange",
      quantity: 8,
      price: 3.2,
    },
    {
      date: new Date(2024, 7, 21),
      fruit: "Apple",
      quantity: 15,
      price: 1.5,
    },
    // More sales data...
  ];

  const [totalSalesByDate, setTotalSalesByDate] = useState({});
  const [totalSalesByFruit, setTotalSalesByFruit] = useState({});

  useEffect(() => {
    const salesByDate = {};
    const salesByFruit = {};

    salesData.forEach((sale) => {
      const formattedDate = format(sale.date, "yyyy-MM-dd");

      // Calculate total sales by date
      if (!salesByDate[formattedDate]) {
        salesByDate[formattedDate] = 0;
      }
      salesByDate[formattedDate] += sale.quantity * sale.price;

      // Calculate total sales by fruit
      if (!salesByFruit[sale.fruit]) {
        salesByFruit[sale.fruit] = 0;
      }
      salesByFruit[sale.fruit] += sale.quantity * sale.price;
    });

    setTotalSalesByDate(salesByDate);
    setTotalSalesByFruit(salesByFruit);
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard</h2>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900">Total Sales by Date</h3>
          <div className="mt-4">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {Object.keys(totalSalesByDate).map((date) => (
                <li key={date} className="py-6 flex justify-between">
                  <span className="text-base font-medium text-gray-900">{date}</span>
                  <span className="text-base font-medium text-gray-900">
                    ${totalSalesByDate[date].toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900">Total Sales by Fruit</h3>
          <div className="mt-4">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {Object.keys(totalSalesByFruit).map((fruit) => (
                <li key={fruit} className="py-6 flex justify-between">
                  <span className="text-base font-medium text-gray-900">{fruit}</span>
                  <span className="text-base font-medium text-gray-900">
                    ${totalSalesByFruit[fruit].toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
