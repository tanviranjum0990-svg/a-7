import NavLink from 'next/link';
const NavBar = () => {
    return (
        <div className='w-full  flex justify-between items-center'>
            <div>
                <h1 className='text-4xl font-bold text-green-900'>KeenKeeper</h1>
                </div>
                <div className='flex justify-between items-center gap-3 p-2'>
                   <NavLink href="/home"><button className='btn btn-shadow'>Home</button></NavLink>
                   <NavLink href="/timeline"><button className='btn btn-shadow'>Timeline</button></NavLink>
                   <NavLink href="status"><button className='btn btn-shadow'>Status</button></NavLink>
                </div>
        </div>
    );
};

export default NavBar;