// // import React, { useEffect, useState } from 'react';
// // import { db } from '../firebase';
// // import { collection, onSnapshot } from 'firebase/firestore';

// // const DirectChat = () => {
// //   const [users, setUsers] = useState([]);
// //   const [selectedUser, setSelectedUser] = useState(null);

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         // Fetch all users from Firestore
// //         const usersCollection = collection(db, 'users');
// //         const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
// //           const usersData = snapshot.docs.map((doc) => ({
// //             id: doc.id,
// //             ...doc.data(),
// //           }));
// //           setUsers(usersData);
// //         });

// //         // Clean up the subscription on component unmount
// //         return () => unsubscribe();
// //       } catch (error) {
// //         console.error('Error fetching users: ', error);
// //       }
// //     };

// //     // Fetch users when the component mounts
// //     fetchUsers();
// //   }, []);

// //   const handleUserClick = (user) => {
// //     setSelectedUser(user);
// //   };

// //   return (
// //     <div className="direct-chat">
// //       <h2>Direct Chat</h2>
// //       <div className="user-list">
// //         {users.map((user) => (
// //           <div
// //             key={user.id}
// //             className={`user ${selectedUser === user ? 'active' : ''}`}
// //             onClick={() => handleUserClick(user)}
// //           >
// //             {user.name}
// //           </div>
// //         ))}
// //       </div>
// //       <div className="chat-area">
// //         {selectedUser ? (
// //           <div className="chat-box">
// //             <h3>Chatting with {selectedUser.name}</h3>
// //             {/* Render chat messages and input box here */}
// //           </div>
// //         ) : (
// //           <div className="empty-chat">Select a user to start chatting</div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default DirectChat;
import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, doc, getDocs, onSnapshot, setDoc } from 'firebase/firestore';
import { Link } from "react-router-dom";
import{Routes,Route,useNavigate} from 'react-router-dom';

const DirectChat = () => {
   
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch all users from Firestore
        const usersCollection = collection(db, 'users');
        const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
          const usersData = snapshot.docs.map((doc) => ({
            email: doc.email,
            ...doc.data(),
          }));
          setUsers(usersData);
        });

        // Clean up the subscription on component unmount
        return () => unsubscribe();
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    // Fetch users when the component mounts
    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const saveCurrentUserToDB = async () => {
    try {
      const userRef = doc(db, 'users', currentUser.email);
      const userDoc = await getDocs(userRef);

      if (!userDoc.exists()) {
        await setDoc(userRef, {
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
        });
      }
    } catch (error) {
      console.error('Error saving current user to DB: ', error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      saveCurrentUserToDB();
    }
  }, [currentUser]);

  return (
    <div className="direct-chat">
      <h2>Direct Chat</h2>
      <div className="user-list">
        {users.map((user) => (
          <div
            key={user.email}
            className={`user ${selectedUser === user ? 'active' : ''}`}
            onClick={() => handleUserClick(user)}
          >
            {user.name}
          </div>
        ))}
      </div>
      <div className="chat-area">
        {selectedUser ? (
          <div className="chat-box">
            <h3>Chatting with {selectedUser.name}</h3>
            <h3>{selectedUser.email}</h3>

            {/* Render chat messages and input box here */}
          </div>
        ) : (
          <div className="empty-chat">Select a user to start chatting</div>
        )}
      </div>
     
    </div>
  );
};

 export default DirectChat;
// import React, { useState, useEffect } from "react";
// import { db } from "../firebase";
// import { Link } from "react-router-dom";

// const DirectChat = () => {
//   const [users, setUsers] = useState([]);
//      const [selectedUser, setSelectedUser] = useState(null);
//   const currentUser = auth.currentUser;

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersRef = await db.collection("users").get();
//         const usersData = usersRef.docs.map((doc) => ({
//           email: doc.email,
//           ...doc.data(),
//         }));
//         setUsers(usersData);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="direct-chat">
//       <h2>Direct Chat</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.email}>
//             <Link to={`/user/${user.email}`}>{user.displayName}</Link>
//           </li>
//         ))}
//       </ul>
//       <div className="chat-area">
//          {selectedUser ? (
//            <div className="chat-box">
//             <h3>Chatting with {selectedUser.name}</h3>
//             {/* Render chat messages and input box here */}           </div>
//         ) : (
//            <div className="empty-chat">Select a user to start chatting</div>
//         )}
//        </div>
//     </div>

//   );
// };

// export default DirectChat;
