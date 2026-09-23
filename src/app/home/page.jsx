"use client";
import React from 'react';
import FriendCard from './FriendCard';
import friendsData from '@/app/data/friends.json';

const HomePage = () => {
   const totalFriends = friendsData.length;
   const friendTrack = friendsData.filter(friend => friend.status === "on-track").length;
   
   const needAttention = friendsData.filter(friend => friend.status === "overdue" || friend.status === "almost-due").length;
   
   const interactionsFriends = friendsData.filter(friend => friend.interactions_this_month || friend.days_since_contact <= 30).length;

   return (
      <div className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans">
         <div className="max-w-7xl mx-auto space-y-8">
            
     
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="w-full h-[110px] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
                  <h1 className="text-3xl font-bold text-gray-800">{totalFriends}</h1>
                  <p className="text-sm font-medium text-gray-500 mt-1">Total Friends</p>
               </div>
               
               <div className="w-full h-[110px] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
                  <h1 className="text-3xl font-bold text-gray-800">{friendTrack}</h1>
                  <p className="text-sm font-medium text-gray-500 mt-1">On Track</p>
               </div>
               
               <div className="w-full h-[110px] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
                  <h1 className="text-3xl font-bold text-gray-800">{needAttention}</h1>
                  <p className="text-sm font-medium text-gray-500 mt-1">Need Attention</p>
               </div>
               
               <div className="w-full h-[110px] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center">
                  <h1 className="text-3xl font-bold text-gray-800">{interactionsFriends}</h1>
                  <p className="text-sm font-medium text-gray-500 mt-1">Interactions This Month</p>
               </div>
            </div>

         
            <div>
               <h2 className="text-xl font-bold text-gray-800">Your Friends</h2>
            </div>

         
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {friendsData.map(friend => (
                  <FriendCard key={friend.id} friend={friend} />
               ))}
            </div> 

         </div>
      </div>
   );
};

export default HomePage;