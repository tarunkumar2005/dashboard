import React from 'react';
import styles from './FrequentCustomers.module.css';

const FrequentCustomers = () => {
  const customers = [
    { name: 'Lee Henry', bookings: 24, spent: 2500 },
    { name: 'Jack Wilson', bookings: 14, spent: 1500 },
    { name: 'Jack Wilson', bookings: 12, spent: 1100 },
    { name: 'Jack Wilson', bookings: 14, spent: 1500 },
    { name: 'Jack Wilson', bookings: 12, spent: 1100 },
  ];

  return (
    <div className={styles.frequentCustomers}>
      <h2>Frequent Customer</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Bookings</th>
            <th>Spent</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.bookings}</td>
              <td>{customer.spent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FrequentCustomers;