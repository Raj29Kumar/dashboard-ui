import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Card from '../components/Card';
import ActivityChart from '../components/ActivityChart';

const Dashboard = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 bg-gray-900 text-white">
      <Header />
      <div className="p-6 grid grid-cols-4 gap-4">
        <Card title="Total Orders" value="75" change="3% ↑" icon="📦" />
        <Card title="Total Delivered" value="70" change="3% ↑" icon="🚚" />
        <Card title="Total Cancelled" value="5" change="3% ↓" icon="❌" />
        <Card title="Net Profit" value="$6759.25" change="3% ↑" icon="💰" />
      </div>
      <div className="p-6 grid grid-cols-2 gap-4">
        <ActivityChart />
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3>Recent Orders</h3>
          {/* Add Table Here */}
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
