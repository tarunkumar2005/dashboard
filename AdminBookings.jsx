import React, { useState } from 'react';
import styles from './AdminBookings.module.css';

const AdminBookings = () => {
  const bookingsPerPage = 10;
  const bookings = [
    { name: 'Jessica S.', date: '24.05.2020', amount: '₹ 124.97', service: 'Normal Hair Cut' },
    { name: 'Andrew S.', date: '23.05.2020', amount: '₹ 55.42', service: 'Keratin Treatment' },
    { name: 'Kevin S.', date: '23.05.2020', amount: '₹ 89.90', service: 'Anti-Dandruff Treatment' },
    { name: 'Jack S.', date: '22.05.2020', amount: '₹ 144.94', service: 'Moustache / Sidelocks' },
    { name: 'Kevin S.', date: '23.05.2020', amount: '₹ 89.90', service: 'Facial' },
    { name: 'Kevin S.', date: '23.05.2020', amount: '₹ 89.90', service: 'Head Oil Massage' },
    { name: 'Andrew S.', date: '23.05.2020', amount: '₹ 55.42', service: 'Hair Colouring' },
    { name: 'Jack S.', date: '22.05.2020', amount: '₹ 144.94', service: 'Normal Hair Cut' },
    { name: 'Kevin S.', date: '23.05.2020', amount: '₹ 89.90', service: 'Buzz Hair Cut' },
    { name: 'Andrew S.', date: '23.05.2020', amount: '₹ 55.42', service: 'Keratin Treatment' },
    { name: 'Jack S.', date: '22.05.2020', amount: '₹ 144.94', service: 'Moustache / Sidelocks' },
    { name: 'Andrew S.', date: '23.05.2020', amount: '₹ 55.42', service: 'Facial' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(bookings.length / bookingsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentBookings = bookings.slice(
    (currentPage - 1) * bookingsPerPage,
    currentPage * bookingsPerPage
  );

  const renderPagination = () => {
    const pagination = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pagination.push(
          <div
            key={i}
            className={`${styles.pageNumber} ${currentPage === i ? styles.active : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </div>
        );
      }
    } else {
      let startPage = 1;
      let endPage = totalPages;

      if (currentPage <= maxPagesToShow - 2) {
        endPage = maxPagesToShow - 1;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - (maxPagesToShow - 2);
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }

      for (let i = startPage; i <= endPage; i++) {
        pagination.push(
          <div
            key={i}
            className={`${styles.pageNumber} ${currentPage === i ? styles.active : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </div>
        );
      }

      if (startPage > 2) {
        pagination.unshift(
          <div key="ellipsis-start" className={styles.pageNumber}>...</div>
        );
        pagination.unshift(
          <div
            key={1}
            className={`${styles.pageNumber} ${currentPage === 1 ? styles.active : ''}`}
            onClick={() => handlePageChange(1)}
          >
            1
          </div>
        );
      }

      if (endPage < totalPages - 1) {
        pagination.push(
          <div key="ellipsis-end" className={styles.pageNumber}>...</div>
        );
        pagination.push(
          <div
            key={totalPages}
            className={`${styles.pageNumber} ${currentPage === totalPages ? styles.active : ''}`}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </div>
        );
      }
    }

    return pagination;
  };

  return (
    <div className={styles.adminBookingWrapper}>
      <h1>Bookings</h1>
      {bookings.length === 0 ? (
        <div className={styles.noOrdersWrapper}>
          <img src="../assets/noBookings.svg" alt="No Bookings" className={styles.noBookingsImage} />
          <h2>No Orders Yet</h2>
          <p>All the upcoming bookings from your salon will be visible in this page.</p>
        </div>
      ) : (
        <>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Service Type</th>
                </tr>
              </thead>
              <tbody>
                {currentBookings.map((booking, index) => (
                  <tr key={index}>
                    <td className={styles.name}>{booking.name}</td>
                    <td className={styles.date}>{booking.date}</td>
                    <td className={styles.amount}>{booking.amount}</td>
                    <td className={styles.serviceType}><p>{booking.service}</p></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.pagination}>
            <img
              src={currentPage === 1 ? '../assets/booking-arrow-left.svg' : '../assets/booking-arrow-left-working.svg'}
              onClick={() => handlePageChange(currentPage - 1)}
              className={`${styles.arrow} ${currentPage === 1 ? styles.disabled : ''}`}
            />
            {renderPagination()}
            <img
              src={currentPage === totalPages ? '../assets/booking-arrow-right.svg' : '../assets/booking-arrow-right-working.svg'}
              onClick={() => handlePageChange(currentPage + 1)}
              className={`${styles.arrow} ${currentPage === totalPages ? styles.disabled : ''}`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminBookings;