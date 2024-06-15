import React from 'react';
import SummarySection from './SummarySection';
import styles from './AdminDashboard.module.css';
import RecentBookings from './RecentBookings';

const AdminDashboard = () => {
  return (
    <div className={styles.adminDashboardWrapper}>
      <h1>Dashboard</h1>
      <div className={styles.Summary}>
        <SummarySection data={"₹ 1054"} Text={"Total Revenue"} graphData={"22.45%"} graphIcon={"../assets/nav-arrow-up-admin.png"} iconSrc={"../assets/rupee.png"} />
        <SummarySection data={"1056"} Text={"Bookings"} graphData={"15.34%"} graphIcon={"../assets/nav-arrow-up-admin.png"} iconSrc={"../assets/cart.png"} />
        <SummarySection data={"48"} Text={"Active Sessions"} graphData={"18.25%"} graphIcon={"../assets/nav-arrow-down-admin.png"} iconSrc={"../assets/adminperson.png"} />
      </div>
      <div className={styles.RecentBookings}>
        <RecentBookings />
      </div>
    </div>
  );
};

export default AdminDashboard;