const Card = ({ title, value, change, icon }) => (
    <div className="bg-gray-800 p-4 rounded-lg flex items-center">
      <div className="p-3 bg-gray-700 rounded-lg">{icon}</div>
      <div className="ml-4">
        <h3 className="text-gray-300">{title}</h3>
        <p className="text-white text-xl">{value}</p>
        <p className="text-sm text-green-400">{change}</p>
      </div>
    </div>
  );
  
  export default Card;
  