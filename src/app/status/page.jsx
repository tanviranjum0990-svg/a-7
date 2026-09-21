"use client";
import PieCharts from '../components/PieCharts'
import {
      PieChart , Pie
} from "recharts";
import friendsData from '../data/friends.json'; 
const StatusPage = () => {
  const fData = friendsData.type
  const data = [
    { type: "text", uv: 4000 },
    { type: "call", uv: 3000 },
    { type: "video", uv: 2000 },
  ];

  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center gap-3 p-5">
    
          <PieCharts></PieCharts>
           
       
    </div>
  );
};

export default StatusPage;