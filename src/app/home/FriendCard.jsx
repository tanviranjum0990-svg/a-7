 import Image from 'next/image'; 
 import NavLink from 'next/link'
const FriendCard = ({ friend }) => {
    console.log(friend)
    const firstTag = friend.tags?.[0]
    return (
         <NavLink href={`./home/${friend.id}`}>
        <div className='min-w-full bg-grey-200 p-3 mx-auto shadow-xl flex flex-col justify-center items-center gap-3'>
          <div className=''>
          <Image
          src={friend.picture}
          alt='profile image'
          width="50"
          height="50"
          className='object-cover'
          ></Image>
          </div>
          <div><h3 className='font-bold'>{friend.name}</h3></div>
          <div><small>{friend.days_since_contact}</small>:days ago</div>
          <div className='shadow-md rounded-xl w-[70px] h-[28px] bg-red-500 text-center text-white '><h3><small>{friend.status}</small></h3></div>
          <div className='shadow-md rounded-xl w-[77px] h-[28px] bg-green-800 text-center text-white'>
        <h4>{firstTag}</h4>
          </div>
        </div>
        </NavLink>
    );
};

export default FriendCard;