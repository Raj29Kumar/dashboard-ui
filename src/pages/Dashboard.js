import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Contant from "../components/Contant";

const Dashboard = () => {
 return(
  <>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-20">
        <Topbar />
        <Contant />
      </div>
    </div>
  
  </>
 )
}

export default Dashboard;
