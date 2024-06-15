import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import styles from './UniqueVisits.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UniqueVisits = () => {
  const data = {
    labels: ['10 AM', '1 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'],
    datasets: [
      {
        label: 'New Users',
        data: [1200, 1500, 2000, 1800, 1600, 1900, 1700, 1500, 1300, 1400],
        borderColor: 'rgba(110, 235, 110, 1)',
        backgroundColor: 'rgba(110, 235, 110, 0.2)',
        fill: true,
      },
      {
        label: 'Returning Users',
        data: [800, 700, 900, 1000, 950, 1050, 980, 900, 850, 920],
        borderColor: 'rgba(154, 83, 198, 1)',
        backgroundColor: 'rgba(154, 83, 198, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Visits',
        },
      },
    },
  };

  return (
    <div className={styles.uniqueVisits}>
      <h2>Unique Visits Over Time</h2>
      <div className={styles.chart}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default UniqueVisits;