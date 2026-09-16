
import friendsJson from '../../data/friends.json';
import Image from 'next/image'
import UserAction from '../UserAction';
import { IoCall } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

const UserDetailsPage = async({params}) => {
    const {userId} = await params; 
    const user = friendsJson.find(friend => String(friend.id) === userId)
    console.log(user);
    if(!user) {
      return <div className='w-full bg-white text-center text-shadow-red-700 font-bold'><h1>Sorry UserPage  Not Found...!</h1></div>
    }
      const btnEdit = () => {
        alert("Sorry edit function not working right now...")
    }
    return (
        <div> 
        <section className="w-full flex justify-between items-center  bg-white p-4 ">
            <div className="div-left w-[365px] h-[432px] p-3 items-center shadow-xl">
             <div className="card  shadow-sm">
  <figure>
   <Image
    src={user.picture}
    alt="icon image"
    width="50"
    height="50"
    className="object-cover"
   ></Image>
  </figure>
  <div className="card-body text-center items-center">
    <h2 className="card-title ">{user.name}</h2>
     <div className="card-actions justify-center">
      <button className="btn bg-red-700 rounded-full ">{user.status}</button>
    </div>
    <p>{user.bio}</p>
    <p><small>{user.email}</small></p>
   
  </div>
</div>

<div className='min-w-full h-[175px] flex flex-col justify-center items-center gap-2'>
    <button className='snooze w-full shadow-md bg-white p-2'>Snooze</button>
    <button className='archive w-full shadow-md bg-white p-2'>Archive</button>
    <button className='delete w-full shadow-md bg-white p-2 text-red-600'>Delete</button>
</div>
            </div>
            <div className="div-right w-[788px] h-[432px] border-amber-600">
            <div className='flex justify-around  '>
                <div className='shadow w-[234px] h-[132px] flex flex-col justify-center items-center'>
                    <h1>{user.days_since_contact}</h1>
                    <p><small>Days Since Contact</small></p>
                </div>
                <div className='shadow w-[234px] h-[132px]'>
                    
                </div>
                <div className='shadow w-[234px] h-[132px]'>
                    
                </div>
            </div>
            <div className='w-full h-[121px] shadow-md p-3 flex justify-between '>
                <div>
                    <p className='font-bold'>Relationship Goal</p>
                    <p><small>Contacts every <span className='font-bold'>30 Days</span></small></p>
                </div>
               <UserAction></UserAction>
            </div>
            <div className='w-full h-[185px] items-center gap2 bg-white p-3 shadow-xl'>
                <h1>Quick Check-In</h1>
                <div className='flex flex-row items-center gap-2 p-2'>
                    <div className='w-[215px] h-[95px] flex  flex-col justify-center gap-2 items-center shadow-md text-center'>
                      
                    <div className='text-3xl text-center'>< IoCall /></div>
                        <p>Call</p>
                    </div>
                    <div className='w-[215px] h-[95px] flex  flex-col justify-center gap-2 items-center shadow-md text-center'>
                      
                    <div className='text-3xl text-center'><IoMdText /></div>
                        <p>Text</p>
                    </div>
                    <div className='w-[215px] h-[95px] flex  flex-col justify-center gap-2 items-center shadow-md text-center'>
                      
                    <div className='text-3xl text-center'><FaVideo /></div>
                        <p>Video</p>
                    </div>
                  
                </div>
            </div>
            </div>
        </section>
        </div>
    );
};

export default UserDetailsPage;