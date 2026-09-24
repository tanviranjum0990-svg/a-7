'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
const NavBar = () => {
    const pathName = usePathname() ; 
    return (
        <div className='w-full  flex justify-between items-center'>
            <div>
                <h1 className='text-4xl font-bold text-green-900'>KeenKeeper</h1>
                </div>
                <div className='flex justify-between items-center gap-3 p-2'>
                  <Link href="/home" className={`btn btn-shadow ${pathName === '/home' ? 'text-green-800' : '' }`} >Home</Link>
                  <Link href="/timeline" className={`btn btn-shadow ${pathName === '/timeline' ? 'text-green-800' : '' }`} >Timeline</Link>
                  <Link href="/status" className={`btn btn-shadow ${pathName === '/status' ? 'text-green-800' : '' }`} >Status</Link>
                 
                </div>
        </div>
    );
};

export default NavBar;