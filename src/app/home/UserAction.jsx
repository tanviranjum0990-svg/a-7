"use client"
const UserAction = () => {
    const btnEdit = () => {
        alert("Sorry Edit Function On Processing...")
    }
    return (
       <button onClick={btnEdit} className="pb-6 text-blue-600 hover:underline">
          edit
       </button>
    );
};

export default UserAction;