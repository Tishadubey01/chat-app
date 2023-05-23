import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, onSnapshot,serverTimestamp,addDoc,query,where } from 'firebase/firestore';

const JoinChatRoom = () => {
  const [chatRooms, setChatRooms] = useState([]);
  
  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        // Fetch all chat rooms from Firestore
        const querySnapshot = await getDocs(collection(db, 'chatRooms'));

        // Convert the query snapshot to an array of chat rooms
        const rooms = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Set the chat rooms state
        setChatRooms(rooms);
      } catch (error) {
        console.error('Error fetching chat rooms: ', error);
      }
    };

    // Subscribe to real-time updates of chat rooms
    const unsubscribe = onSnapshot(collection(db, 'chatRooms'), (snapshot) => {
      const rooms = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setChatRooms(rooms);
    });

    // Fetch initial chat rooms and start the real-time subscription
    fetchChatRooms();

    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, []);

  const handleJoinRoom = (roomId) => {
    // Handle joining the selected chat room
    console.log('Joining chat room with ID: ', roomId);
  };

  return (
    <div className="join-room">
      <h2>Join Chat Room</h2>
      <ul>
        {chatRooms.map((room) => (
          <li key={room.id} onClick={() => handleJoinRoom(room.id)}>
            {room.roomName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JoinChatRoom;
// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase';
// import { collection, addDoc, serverTimestamp, onSnapshot, query, where } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// const JoinChatroom = () => {
//   const [rooms, setRooms] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchChatrooms = async () => {
//       try {
//         const roomsRef = collection(db, 'chatrooms');
//         const q = query(roomsRef, where('isActive', '==', true));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//           const chatrooms = [];
//           querySnapshot.forEach((doc) => {
//             chatrooms.push({ id: doc.id, ...doc.data() });
//           });
//           setRooms(chatrooms);
//         });

//         return unsubscribe;
//       } catch (error) {
//         console.error('Error fetching chat rooms:', error);
//       }
//     };

//     fetchChatrooms();
//   }, []);

//   const joinChatroom = async (roomId) => {
//     try {
//       // Create a new collection for the chat room
//       const roomRef = collection(db, 'chatrooms', roomId, 'messages');
//       await addDoc(roomRef, {
//         text: `Welcome to the chat room ${roomId}`,
//         name: 'Admin',
//         createdAt: serverTimestamp(),
//       });

//       navigate(`/chatroom/${roomId}`);
//     } catch (error) {
//       console.error('Error joining chat room:', error);
//     }
//   };

//   return (
//     <div className="join-chatroom">
//       <h2>Join Chat Room</h2>
//       <ul>
//         {rooms.map((room) => (
//           <li key={room.id} onClick={() => joinChatroom(room.id)}>
//             {room.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default JoinChatroom;
