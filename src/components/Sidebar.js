import { FaHome, FaChartPie, FaBell, FaUser } from 'react-icons/fa';

const Sidebar = () => (
  <div className="bg-gray-800 h-screen p-4">
    <div className="text-white text-2xl mb-6">Logo</div>
    <nav className="space-y-4">
      <div className="flex items-center text-gray-300 hover:text-white">
        <FaHome className="mr-3" />
        Dashboard
      </div>
      <div className="flex items-center text-gray-300 hover:text-white">
        <FaChartPie className="mr-3" />
        Analytics
      </div>
      <div className="flex items-center text-gray-300 hover:text-white">
        <FaBell className="mr-3" />
        Notifications
      </div>
      <div className="flex items-center text-gray-300 hover:text-white">
        <FaUser className="mr-3" />
        Profile
      </div>
    </nav>
  </div>
);

export default Sidebar;
