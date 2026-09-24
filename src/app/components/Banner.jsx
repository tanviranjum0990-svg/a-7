import React from 'react';

const Banner = ({onAddFriend}) => {
    return (
        <div className="w-full max-w-6xl mx-auto my-6 px-4 py-8 md:py-10 shadow-md rounded-xl bg-gray-100 flex flex-col justify-center items-center gap-4 transition-all">
         
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800">
                Friends to keep close in your life
            </h1>

           
            <p className="text-center text-gray-600 max-w-xl text-sm md:text-base px-2">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>

            <button 
                onClick={onAddFriend}
                className="w-36 h-11 font-bold text-white bg-[#244D3F] hover:bg-[#1a382e] active:scale-95 transition-all rounded-lg flex items-center justify-center shadow-sm cursor-pointer mt-2"
            >
                <span className="text-xl pr-2 leading-none">+</span>Add a Friend
            </button>
        </div>
    );
};

export default Banner;