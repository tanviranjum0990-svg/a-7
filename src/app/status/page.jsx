"use client";
import PieCharts from '../components/PieCharts'

import friendsData from '../data/friends.json'; 
const StatusPage = () => {
  

  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center gap-3 p-5">
    
          <PieCharts></PieCharts>
           
       
    </div>
  );
};

export default StatusPage;