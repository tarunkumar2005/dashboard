import React from 'react';
import styles from './TopServices.module.css';

const TopServices = () => {
  const services = [
    { name: 'Buzz Hair Cut', bookings: 24, imgSrc: '../assets/testingtopservices.png' },
    { name: 'Female Hair Cut', bookings: 24, imgSrc: '../assets/testingtopservices.png' },
    { name: 'Manicure', bookings: 24, imgSrc: '../assets/testingtopservices.png' },
    { name: 'Beard Trim', bookings: 24, imgSrc: '../assets/testingtopservices.png' },
    { name: 'Hair Coloring female', bookings: 24, imgSrc: '../assets/testingtopservices.png' },
    { name: 'Pedicure', bookings: 24, imgSrc: '../assets/testingtopservices.png' },
  ];

  return (
    <div className={styles.topServices}>
      <h2>Top Services</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Bookings</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>
                <img src={service.imgSrc} alt={service.name} className={styles.serviceImg} />
                {service.name}
              </td>
              <td>{service.bookings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopServices;