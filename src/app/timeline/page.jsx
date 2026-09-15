import Image from "next/image";
const TimelinePage = () => {
    const timelineEvents = [
  {
    "id": 1,
    "name": "Maya Thompson",
    "next_due_date": "2026-08-28",
    "day": "March 24-2026",
    "type": "meetup",
    "icon": "/assets/instagram.png"
  },
  {
    "id": 2,
    "name": "Ethan Brooks",
    "next_due_date": "2026-09-17",
    "day": "April 08-2026",
    "type": "text",
    "icon": "/assets/text.png"
  },
  {
    "id": 3,
    "name": "Sofia Martinez",
    "next_due_date": "2026-09-22",
    "day": "May 15-2026",
    "type": "calls",
    "icon": "/assets/call.png"
  },
  {
    "id": 4,
    "name": "Daniel Kim",
    "next_due_date": "2026-08-23",
    "day": "June 03-2026",
    "type": "video",
    "icon": "/assets/video.png"
  },
  {
    "id": 5,
    "name": "Olivia Carter",
    "next_due_date": "2026-09-20",
    "day": "June 27-2026",
    "type": "text",
    "icon": "/assets/text.png"
  },
  {
    "id": 6,
    "name": "Marcus Reed",
    "next_due_date": "2026-09-14",
    "day": "July 11-2026",
    "type": "calls",
    "icon": "/assets/call.png"
  },
  {
    "id": 7,
    "name": "Chloe Nguyen",
    "next_due_date": "2026-09-23",
    "day": "July 29-2026",
    "type": "meetup",
    "icon": "/assets/logo-xl.png"
  },
  {
    "id": 8,
    "name": "James Wilson",
    "next_due_date": "2026-08-30",
    "day": "August 06-2026",
    "type": "video",
    "icon": "/assets/video.png"
  },
  {
    "id": 9,
    "name": "Aisha Rahman",
    "next_due_date": "2026-09-16",
    "day": "September 02-2026",
    "type": "meetup",
    "icon": "/assets/twitter.png"
  },
  {
    "id": 10,
    "name": "Lucas Anderson",
    "next_due_date": "2026-09-19",
    "day": "September 12-2026",
    "type": "text",
    "icon": "/assets/text.png"
  }
];
    return (
        <div className='w-full mx-auto p-5'>
         {
            timelineEvents.map(event => {
                return <div key={event.id} className="min-w-full shadow-xl flex flex-start gap-3">
                <Image
                src={event.icon}
                alt="icon image"
                width="40"
                height="40"
                className="object-cover pt-3"
                ></Image>
                <div>
                    <p><span className="text-xl font-bold">{event.type}</span> with{event.name}</p>
                    <p>{event.day}</p>
                </div>
                </div>
            })
         }
        </div>
    );
};

export default TimelinePage;