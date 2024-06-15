import React from 'react';
import styles from './RecentBookings.module.css';

const RecentBookings = () => {
  const bookings = [
    { name: 'Jessica S.', date: '24.05.2020', amount: '₹ 124.97', service: 'Normal hair cut' },
    { name: 'Andrew S.', date: '23.05.2020', amount: '₹ 55.42', service: 'Beard Cut' },
    { name: 'Kevin S.', date: '23.05.2020', amount: '₹ 89.90', service: 'Hair coloring' },
    { name: 'Jack S.', date: '22.05.2020', amount: '₹ 144.94', service: 'Facial' },
    { name: 'Arthur S.', date: '22.05.2020', amount: '₹ 70.52', service: 'Head Oil Massage' },
  ];

  return (
    <div className={styles.recentBookings}>
      <h3>Recent Bookings</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Service Type</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td className={styles.name}>{booking.name}</td>
              <td className={styles.date}>{booking.date}</td>
              <td className={styles.amount}>{booking.amount}</td>
              <td className={styles.serviceType}><p>{booking.service}</p> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentBookings;