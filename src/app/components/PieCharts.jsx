"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const PieCharts = () => {
   
    const data = [
        { type: "Call", color: "#2E5A44", days: 120 },  
        { type: "Video", color: "#32B863", days: 90 },  
        { type: "Text", color: "#8B3DFF", days: 110 }   
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-6 font-sans">
      
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Friendship Analytics
            </h2>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
                
             
                <div className="text-sm font-medium text-gray-600 mb-2">
                    By Interaction Type
                </div>

            
                <div className="w-full h-[280px] flex items-center justify-center my-2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="days"
                                nameKey="type"
                                cx="50%"
                                cy="50%"
                                innerRadius={75}
                                outerRadius={105}
                                paddingAngle={6}
                             
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex justify-center items-center gap-8 mt-2 text-xs font-medium text-gray-600">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#8B3DFF]"></span>
                        <span>Text</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2E5A44]"></span>
                        <span>Call</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#32B863]"></span>
                        <span>Video</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PieCharts;