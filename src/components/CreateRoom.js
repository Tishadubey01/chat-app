// import React, { useState } from "react";
// import { db } from "../firebase";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// import { serverTimestamp } from "firebase/firestore";
// const CreateRoom = () => {
//     const [roomName, setRoomName] = useState("");

//     const createRoom = () => {
//         //const db = firebase.firestore();
//         const roomsRef = db.collection("rooms");

//         roomsRef

//             .add({
//                 name: roomName,
//                 createdAt: db.FieldValue.serverTimestamp(),
//             })
//             .then((docRef) => {
//                 console.log("Chat room created with ID: ", docRef.id);

//                 setRoomName("");
//             })
//             .catch((error) => {
//                 console.error("Error adding document: ", error);
//             }
//             );
//     };

//     return (
//         <div>
//             <h2>Create Chat Room</h2>
//             <input

//                 type="text"
//                 value={roomName}
//                 onChange={(e) => setRoomName(e.target.value)}
//             />
//             <button onClick={createRoom}>Create Room</button>

//         </div>
//     );
// };

// export default CreateRoom;

// import React, { useState, useEffect } from "react";
// import { db } from "../firebase";

// const ChatRoom = () => {
//   const [chatRooms, setChatRooms] = useState([]);
//   const [joinedRooms, setJoinedRooms] = useState([]);

//   useEffect(() => {
//     const fetchChatRooms = async () => {
//       try {
//         const snapshot = await db.collection("chatRooms").get();
//         const rooms = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setChatRooms(rooms);
//       } catch (error) {
//         console.error("Error fetching chat rooms:", error);
//       }
//     };

//     fetchChatRooms();
//   }, []);

//   const createRoom = async (roomName) => {
//     try {
//       const docRef = await db.collection("chatRooms").add({
//         name: roomName,
//         createdAt: new Date(),
//       });
//       console.log("Chat room created with ID:", docRef.id);
//     } catch (error) {
//       console.error("Error creating chat room:", error);
//     }
//   };

//   const joinRoom = (roomId) => {
//     setJoinedRooms((prevJoinedRooms) => [...prevJoinedRooms, roomId]);
//   };

//   const leaveRoom = (roomId) => {
//     setJoinedRooms((prevJoinedRooms) =>
//       prevJoinedRooms.filter((room) => room !== roomId)
//     );
//   };

//   return (
//     <div>
//       <h2>Chat Rooms</h2>
//       <h3>Available Rooms</h3>
//       <ul>
//         {chatRooms.map((room) => (
//           <li key={room.id}>
//             {room.name}{" "}
//             {!joinedRooms.includes(room.id) ? (
//               <button onClick={() => joinRoom(room.id)}>Join</button>
//             ) : (
//               <button onClick={() => leaveRoom(room.id)}>Leave</button>
//             )}
//           </li>
//         ))}
//       </ul>
//       <h3>Joined Rooms</h3>
//       <ul>
//         {joinedRooms.map((roomId) => (
//           <li key={roomId}>
//             {chatRooms.find((room) => room.id === roomId)?.name}{" "}
//             <button onClick={() => leaveRoom(roomId)}>Leave</button>
//           </li>
//         ))}
//       </ul>
//       <h3>Create Room</h3>
//       <input type="text" id="roomName" />
//       <button
//         onClick={() => createRoom(document.getElementById("roomName").value)}
//       >
//         Create
//       </button>
//     </div>
//   );
// };

// export default ChatRoom;
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const CreateChatRoom = () => {
  const [roomName, setRoomName] = useState('');

  const handleCreateRoom = async () => {
    if (roomName.trim() === '') {
      return;
    }

    try {
      // Add the chat room to Firestore
      const docRef = await addDoc(collection(db, 'chatRooms'), {
        roomName: roomName,
        
      });

      console.log('Chat room created with ID: ', docRef.id);

      // Reset the input field
      setRoomName('');
    } catch (error) {
      console.error('Error creating chat room: ', error);
    }
  };

  return (
    <div className="create-room">
      <h2>Create Chat Room</h2>
      <input
        type="text"
        placeholder="Enter room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <button onClick={handleCreateRoom}>Create Room</button>
    </div>
  );
};

export default CreateChatRoom;


