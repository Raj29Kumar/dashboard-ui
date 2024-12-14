import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { PiX } from 'react-icons/pi';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
    datasets: [
      {
      
        data: [3000, 4000, 3500, 5000, 4500, 6000, 7000, 6500, 8000, 7500],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: true,
        text: 'Activity',
        align: 'start', 
        color: 'white',
        padding: {
          top: 10,
          bottom: 20,
        },
        font: {
          size: 16,
          weight: 'bold',
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        barThickness: 20, 
        maxBarThickness: 20,
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
        ticks: {
          padding: 0, // Remove extra space below the labels on the y-axis
        },
      },
    },
    layout: {
      padding: {
        top: 0, // Removes extra padding from top
        right: 0,
        bottom: 0, // Removes any extra padding/margin from bottom
        left: 0, // Removes extra padding from left
      },
    },
  };

  const chartContainerStyle = {
    width: '100%',
    height: '420px',
    margin: '0px',
    paddin: '0px'
  };

  return (
    <div style={chartContainerStyle}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
