import React from 'react';
import Image from 'next/image'; 

const Footer = () => {
    return (
        <footer className='w-full flex flex-col items-center justify-center pt-12 bg-[#244D3F] text-white'> 
            <div className='max-w-4xl px-6 flex flex-col items-center text-center gap-3'>
                <h1 className='text-2xl sm:text-3xl font-bold'>KeenKeeper</h1>
                <p className='py-2 text-sm sm:text-base max-w-md text-emerald-100'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                
                <small className='text-xs uppercase tracking-wider text-emerald-200 mt-2'>Social Links</small>
                
                <div className='flex justify-center items-center gap-4 my-2'>
                    <a  href="#" aria-label="Facebook" className='p-3 rounded-full bg-white text-[#244D3F] hover:bg-emerald-100 transition-colors'>
                        <Image
                            src='/assets/facebook.png'
                            alt='Facebook icon'
                            width={24}
                            height={24}
                            className='w-6 h-6 object-contain'
                        />
                    </a>
                    <a  href="#" aria-label="Twitter" className='p-3 rounded-full bg-white text-[#244D3F] hover:bg-emerald-100 transition-colors'>
                        <Image
                            src='/assets/twitter.png'
                            alt='Twitter icon'
                            width={24}
                            height={24}
                            className='w-6 h-6 object-contain'
                        />
                    </a>
                    <a  href="#" aria-label="Instagram" className='p-3 rounded-full bg-white text-[#244D3F] hover:bg-emerald-100 transition-colors'>
                        <Image
                            src='/assets/instagram.png'
                            alt='Instagram icon'
                            width={24}
                            height={24}
                            className='w-6 h-6 object-contain'
                        />
                    </a>
                </div>
            </div>

            <div className='w-full mt-10 py-5 px-6 bg-[#1b3a2f] flex flex-col md:flex-row justify-between items-center gap-4 text-center'> 
                <div className='md:pl-8'>
                    <small className='text-white'>© 2026 KeenKeeper. All rights reserved.</small>
                </div>
                <div className='flex flex-wrap justify-center gap-6 md:pr-8'>
                    <a href="#" className='text-emerald-200 hover:text-white transition-colors text-xs sm:text-sm'>Privacy Policy</a>
                    <a href="#" className='text-emerald-200 hover:text-white transition-colors text-xs sm:text-sm'>Terms of Service</a>
                    <a href="#" className='text-emerald-200 hover:text-white transition-colors text-xs sm:text-sm'>Cookies</a>
                </div>   
            </div>
        </footer>
    );
};

export default Footer;