import { Bar } from 'react-chartjs-2';

const ActivityChart = () => {
  const data = {
    labels: ['5', '9', '11', '13', '15', '17', '19', '21'],
    datasets: [
      {
        label: 'Activity',
        data: [5000, 10000, 15000, 10000, 12000, 14000, 20000, 17000],
        backgroundColor: '#4f46e5',
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-gray-300">Activity</h3>
      {/* <Bar data={data} /> */}
    </div>
  );
};

export default ActivityChart;
