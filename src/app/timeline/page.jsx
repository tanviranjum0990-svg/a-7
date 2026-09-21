import React from 'react';
import { FaHandshake, FaPhoneAlt, FaVideo, FaRegCommentDots } from "react-icons/fa";

const TimelinePage = () => {
    
    const timelineEvents = [
        {
            id: 1,
            name: "Maya Thompson",
            next_due_date: "2026-08-28",
            day: "March 24, 2026",
            type: "Meetup",
            icon: <FaHandshake className="text-amber-500 text-lg" />
        },
        {
            id: 2,
            name: "Ethan Brooks",
            next_due_date: "2026-09-17",
            day: "April 08, 2026",
            type: "Text",
            icon: <FaRegCommentDots className="text-blue-500 text-lg" />
        },
        {
            id: 3,
            name: "Sofia Martinez",
            next_due_date: "2026-09-22",
            day: "May 15, 2026",
            type: "Call",
            icon: <FaPhoneAlt className="text-emerald-500 text-base" />
        },
        {
            id: 4,
            name: "Daniel Kim",
            next_due_date: "2026-08-23",
            day: "June 03, 2026",
            type: "Video",
            icon: <FaVideo className="text-purple-500 text-base" />
        },
        {
            id: 5,
            name: "Olivia Carter",
            next_due_date: "2026-09-20",
            day: "June 27, 2026",
            type: "Text",
            icon: <FaRegCommentDots className="text-blue-500 text-lg" />
        },
        {
            id: 6,
            name: "Marcus Reed",
            next_due_date: "2026-09-14",
            day: "July 11, 2026",
            type: "Call",
            icon: <FaPhoneAlt className="text-emerald-500 text-base" />
        },
        {
            id: 7,
            name: "Chloe Nguyen",
            next_due_date: "2026-09-23",
            day: "July 29, 2026",
            type: "Meetup",
            icon: <FaHandshake className="text-amber-500 text-lg" />
        },
        {
            id: 8,
            name: "James Wilson",
            next_due_date: "2026-08-30",
            day: "August 06, 2026",
            type: "Video",
            icon: <FaVideo className="text-purple-500 text-base" />
        },
        {
            id: 9,
            name: "Aisha Rahman",
            next_due_date: "2026-09-16",
            day: "September 02, 2026",
            type: "Meetup",
            icon: <FaHandshake className="text-amber-500 text-lg" />
        },
        {
            id: 10,
            name: "Lucas Anderson",
            next_due_date: "2026-09-19",
            day: "September 12, 2026",
            type: "Text",
            icon: <FaRegCommentDots className="text-blue-500 text-lg" />
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-6 font-sans">
        
            <h1 className="text-3xl font-extrabold text-[#1e293b] mb-6">
                Timeline
            </h1>

            <div className="mb-6">
                <div className="flex items-center justify-between w-60 px-4 py-2.5 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-500 text-sm cursor-pointer hover:border-gray-300">
                    <span>Filter timeline</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

          
            <div className="space-y-3">
                {timelineEvents.map((event) => {
                    return (
                        <div 
                            key={event.id} 
                            className="w-full bg-white border border-gray-200/80 rounded-xl p-4 shadow-sm hover:shadow transition-all flex items-start gap-4"
                        >
                         
                            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100">
                                {event.icon}
                            </div>

                           
                            <div className="flex flex-col justify-center">
                                <p className="text-sm text-gray-800">
                                    <span className="font-semibold text-gray-900">{event.type}</span>{" "}
                                    <span className="text-gray-500">with</span>{" "}
                                    <span className="font-medium text-gray-700">{event.name}</span>
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    {event.day}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TimelinePage;