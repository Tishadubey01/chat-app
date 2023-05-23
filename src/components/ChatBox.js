// import React, { useState, useEffect,useRef } from 'react';
// import { db, auth } from '../firebase';
// import SendMessage from './SendMessage';
// import Message from './Message';
// import { collection, query, limit, orderBy, onSnapshot } from "firebase/firestore";

// const ChatBox=()=> {
//     const [messages, setMessages] = useState([]);
//     //const { userID } = auth.currentUser;

//     useEffect(() => {
//         const q = query(
//             collection(db, "messages"),
//             orderBy("createdAt"),
//             limit(50)
//         );
//         const data = onSnapshot(q, (QuerySnapshot) => {
//             let messages = [];
//             QuerySnapshot.forEach((doc) => {
//                 messages.push({ ...doc.data(), id: doc.id });
//             });
//             setMessages(messages);

//         });
//         return () => data;

//     }, []);
//     const scroll=useRef();
//     return (
//         <main className="chat-box">
//         <div className="messages-wrapper">
//           {messages?.map((message) => (
//             <Message key={message.id} message={message} />
//           ))}
//         </div>
//         {/* when a new message enters the chat, the screen scrolls dowwn to the scroll div */}
//         <span ref={scroll}></span>
//         <sendmessage scroll={scroll} />
//       </main>
//     );
//   };


// export default ChatBox;
// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import { db, auth } from '../firebase';
// // // import SendMessage from './SendMessage';
// // // import Message from './Message';
// // // import { collection, query, limit, orderBy, onSnapshot } from 'firebase/firestore';

// // // const ChatBox = () => {
// // //   const [messages, setMessages] = useState([]);
// // //   const { roomId } = useParams();
// // //   const scroll = useRef();

// // //   useEffect(() => {
// // //     const roomRef = collection(db, 'chatrooms', roomId, 'messages');
// // //     const q = query(roomRef, orderBy('createdAt'), limit(50));
// // //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
// // //       const messagesData = [];
// // //       querySnapshot.forEach((doc) => {
// // //         messagesData.push({ ...doc.data(), id: doc.id });
// // //       });
// // //       setMessages(messagesData);
// // //     });

// // //     return unsubscribe;
// // //   }, [roomId]);

// // //   return (
// // //     <main className="chat-box">
// // //       <div className="messages-wrapper">
// // //         {messages?.map((message) => (
// // //           <Message key={message.id} message={message} />
// // //         ))}
// // //       </div>
// // //       {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
// // //       <span ref={scroll}></span>
// // //       <SendMessage scroll={scroll} roomId={roomId} />
// // //     </main>
// // //   );
// // // };

// // // export default ChatBox;


// // // import React, { useState, useEffect } from 'react'
// // // import { db, auth } from '../firebase'
// // // import SendMessage from './SendMessage'
// // // import { collection, query, limit, orderBy, onSnapshot } from "firebase/firestore";

// // // const ChatBox = () => {
// // //     const [messages, setMessages] = useState([])
// // //     const { userID } = auth.currentUser


// // //     useEffect(() => {
// // //         const q = query(
// // //             collection(db, "messages"),
// // //             orderBy("createdAt"),
// // //             limit(50)
// // //         );
// // //         const data = onSnapshot(q, (QuerySnapshot) => {
// // //             let messages = [];
// // //             QuerySnapshot.forEach((doc) => {
// // //                 messages.push({ ...doc.data(), id: doc.id });
// // //             });
// // //             setMessages(messages)

// // //         });
// // //         return () => data;

// // //     }, []);

// // //     return (
// // //         <div>

// // //             {messages && messages.map((message, id, uid, photoURL) =>
// // //                 <div
// // //                     key={id}
// // //                     className={`msg ${userID === auth.currentUser.uid ? 'sent' : 'received'}`}>
// // //                     <img src={message.photoURL} />
// // //                     <p>{message.text}</p>
// // //                 </div>
// // //             )}
// // //             <SendMessage />
// // //         </div>
// // //     )
// // // }
// // // export default ChatBox;
import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />

        )
        )}
      </div>
      {/* when a new message enters the chat, the screen scrolls dowwn to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;

// // import React, { useState, useEffect } from 'react'
// // import { db, auth } from '../firebase'
// // import SendMessage from './SendMessage'
// // import Message from './Message';
// // import { collection, query, limit, orderBy, onSnapshot } from "firebase/firestore";

// // const ChatBox = () => {
// //     const [messages, setMessages] = useState([])
// //     const { userID } = auth.currentUser


// //     useEffect(() => {
// //         const q = query(
// //             collection(db, "messages"),
// //             orderBy("createdAt"),
// //             limit(50)
// //         );
// //         const data = onSnapshot(q, (QuerySnapshot) => {
// //             let messages = [];
// //             QuerySnapshot.forEach((doc) => {
// //                 messages.push({ ...doc.data(), id: doc.id });
// //             });
// //             setMessages(messages)

// //         });
// //         return () => data;

// //     }, []);

// //     return (
// //         <div>
// //             <button onClick={() => auth.signOut()}>Sign Out</button>
// //             {messages && messages.map((message, id, uid, photoURL) =>
// //                 <div
// //                     key={id}
// //                     className={`msg ${userID === auth.currentUser.uid ? 'sent' : 'received'}`}>
// //                     <img src={message.photoURL} />
// //                     <p>{message.text}</p>
// //                 </div>
// //             )}
// //             <SendMessage />
// //         </div>
// //     )
// // };
// // export default ChatBox;






// import React, { useState, useEffect,useRef } from 'react';
// import { db, auth } from '../firebase';
// import SendMessage from './SendMessage';
// import Message from './Message';
// import { collection, query, limit, orderBy, onSnapshot } from "firebase/firestore";

// const ChatBox=()=> {
//     const [messages, setMessages] = useState([]);
//     //const { userID } = auth.currentUser;
//     const scroll=useRef();
//     useEffect(() => {
//         const q = query(
//             collection(db, "messages"),
//             orderBy("createdAt"),
//             limit(50)
//         );
//         const data = onSnapshot(q, (QuerySnapshot) => {
//             let messages = [];
//             QuerySnapshot.forEach((doc) => {
//                 messages.push({ ...doc.data(), id: doc.id });
//             });
//             setMessages(messages);

//         });
//         return () => data;

//     }, []);
   
//     return (
//         <main className="chat-box">
//         <div className="messages-wrapper">
//           {messages?.map((message) => (
//             <Message key={message.id} message={message} />
//           ))}
//         </div>
//         {/* when a new message enters the chat, the screen scrolls dowwn to the scroll div */}
//         <span ref={scroll}></span>
//         <sendmessage scroll={scroll} />
//       </main>
//     );
//   };
  

// export default ChatBox;
