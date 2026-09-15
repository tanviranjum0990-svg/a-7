"use client"
import React,{ useState } from 'react';
import FriendCard from './FriendCard';
import friendsData from '@/app/data/friends.json';
import { Freckle_Face } from 'next/font/google';
const HomePage = () => {
   const friendTrack = friendsData.filter(friend => friend.status === "on-track").length;
   const interactionsFriends = friendsData.filter(friend => friend.days_since_contact).length
   return (
      
            <div>
           <div className='p-4 mx-auto min-w-full bg-white flex justify-around items-center gap-3 '>
             <div className='w-[260] h-[137] shadow-xl flex justify-center flex-col items-center bg-white'>
                 <h1>{friendsData.length}</h1>
                 <p><small>Total friends</small></p>
             </div>
             <div className='w-[260] h-[137] shadow-xl flex flex-col items-center justify-center  '>
                 <h1>{friendTrack}</h1>
                 <p><small>On track</small></p>
             </div>
             <div className='w-[260] h-[137] shadow-xl flex flex-col justify-center items-center '>
                 <h1>0</h1>
                 <p><small>Need Attention</small></p>
             </div>
             <div className='w-[260] h-[137] shadow-xl flex flex-col justify-center items-center '>
                    <h1>{interactionsFriends}</h1>
                 <p><small>Interaction this month</small></p>
             </div>
           </div>
     
          <div className='grid grid-cols-4 bg-grey gap-3 shadow-xl'>
            {
               friendsData.map(friend =>  <FriendCard key={friend.id} friend={friend}></FriendCard>)
            }
            </div>          
      
        </div>
      
    );
};

export default HomePage;


