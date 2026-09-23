import friendsJson from '../../data/friends.json';
import Image from 'next/image';
import UserAction from '../UserAction';
import { IoCall } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiArchive, FiTrash2 } from "react-icons/fi";

const UserDetailsPage = async ({ params }) => {
    const { userId } = await params;
    const user = friendsJson.find(friend => String(friend.id) === userId);

    if (!user) {
        return (
            <div className='w-full bg-white text-center text-red-700 font-bold py-10'>
                <h1>Sorry User Page Not Found...!</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6 flex flex-col justify-between">
            <section className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-6">
                
              
                <div className="w-full md:w-[350px] flex flex-col gap-4">
                    {/* Profile Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center border border-slate-100">
                        <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden shadow-inner">
                            <Image
                                src={user.picture}
                                alt={user.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-2">{user.name}</h2>
                        
                        <div className="flex flex-col gap-1.5 mb-4">
                            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium inline-block mx-auto">
                                {user.status || "Overdue"}
                            </span>
                            <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium inline-block mx-auto">
                                {user.category || "FAMILY"}
                            </span>
                        </div>

                        <p className="text-slate-600 text-sm italic mb-2">"{user.bio}"</p>
                        <p className="text-slate-400 text-xs">Preferred: email</p>
                    </div>

                
                    <div className="flex flex-col gap-2">
                        <button className="w-full bg-white hover:bg-slate-50 border border-slate-100 shadow-sm rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-slate-700 font-medium text-sm transition">
                            <IoNotificationsOutline className="text-base text-slate-500" /> Snooze 2 Weeks
                        </button>
                        <button className="w-full bg-white hover:bg-slate-50 border border-slate-100 shadow-sm rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-slate-700 font-medium text-sm transition">
                            <FiArchive className="text-base text-slate-500" /> Archive
                        </button>
                        <button className="w-full bg-white hover:bg-slate-50 border border-slate-100 shadow-sm rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-red-600 font-medium text-sm transition">
                            <FiTrash2 className="text-base" /> Delete
                        </button>
                    </div>
                </div>

           
                <div className="flex-1 flex flex-col gap-4">
                    
                  
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                            <h1 className="text-3xl font-bold text-slate-800 mb-1">{user.days_since_contact ?? 62}</h1>
                            <p className="text-slate-500 text-xs font-medium">Days Since Contact</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                            <h1 className="text-3xl font-bold text-slate-800 mb-1">30</h1>
                            <p className="text-slate-500 text-xs font-medium">Goal (Days)</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                            <h1 className="text-xl font-bold text-slate-800 mb-1">Feb 27, 2026</h1>
                            <p className="text-slate-500 text-xs font-medium">Next Due</p>
                        </div>
                    </div>

                
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex justify-between items-center">
                        <div>
                            <p className="font-bold text-slate-800 text-sm mb-1">Relationship Goal</p>
                            <p className="text-slate-600 text-xs">Connect every <span className="font-bold text-slate-800">30 days</span></p>
                        </div>
                        <div className="scale-90 origin-right">
                            <UserAction />
                        </div>
                    </div>

                 
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                        <h3 className="font-bold text-slate-800 text-sm mb-3">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="border border-slate-100 rounded-xl p-4 flex flex-col justify-center items-center gap-2 hover:border-slate-300 transition cursor-pointer">
                                <IoCall className="text-2xl text-slate-700" />
                                <span className="text-xs font-medium text-slate-700">Call</span>
                            </div>
                            <div className="border border-slate-100 rounded-xl p-4 flex flex-col justify-center items-center gap-2 hover:border-slate-300 transition cursor-pointer">
                                <IoMdText className="text-2xl text-slate-700" />
                                <span className="text-xs font-medium text-slate-700">Text</span>
                            </div>
                            <div className="border border-slate-100 rounded-xl p-4 flex flex-col justify-center items-center gap-2 hover:border-slate-300 transition cursor-pointer">
                                <FaVideo className="text-2xl text-slate-700" />
                                <span className="text-xs font-medium text-slate-700">Video</span>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default UserDetailsPage;