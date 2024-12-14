const Header = () => (
    <div className="bg-gray-900 p-4 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-700 p-2 rounded-lg text-white"
      />
      <div className="flex items-center space-x-4">
        <div className="text-gray-300">🔔</div>
        <div className="text-gray-300">👤</div>
      </div>
    </div>
  );
  
  export default Header;
  