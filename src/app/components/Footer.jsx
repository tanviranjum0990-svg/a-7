import React from 'react';
import Image from 'next/image'; 
const Footer = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center gap-2 py-4 text-center bg-[#244D3F] text-white pb-100'> 
           <h1 className='text-3xl font-bold '>KeenKeeper</h1>
            <p className='py-2'><small>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</small></p>
             <small>Social Links</small>
             <div className='flex justify-around items-center w-60- h-32 gap-4'>
              <Image
              src='/assets/facebook.png'
              alt='icons'
              width="50"
              height='50'
              className='w-[100px] h-[100px] rounded-full bg-white'
              ></Image>
              <Image
              src='/assets/twitter.png'
              alt='icons'
              width="50"
              height='50'
              className='w-[100px] h-[100px] rounded-full bg-white'
              ></Image>
              <Image
              src='/assets/instagram.png'
              alt='icons'
              width="50"
              height='50'
              className='w-[100px] h-[100px] rounded-full bg-white'
              ></Image>
             </div>
             <div className='w-full py-4 bg-grey-600 flex justify-between'> 
                <div className='pl-14'>
                    <small>© 2026 KeenKeeper. All rights reserved </small>
                </div>
                <div className='pr-14'>
                   <small>Privacy Polices</small>
                <small>Terms of Service</small>
                <small>cookies</small>
                </div>    
             </div>
        </div>
    );
};

export default Footer; 