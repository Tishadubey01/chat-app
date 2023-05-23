import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName} = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;


// // import React, { useState } from 'react';
// // import { db, auth } from '../firebase';
// // import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// // const SendMessage = ({ scroll, roomId }) => {
// //   const [msg, setMsg] = useState('');
// //   const messagesRef = collection(db, 'chatrooms', roomId, 'messages');

// //   const sendMsg = async (e) => {
// //     e.preventDefault();
// //     if (msg.trim() === '') {
// //       alert('Please enter a message');
// //       return;
// //     }
// //     const { displayName, photoURL } = auth.currentUser;

// //     await addDoc(messagesRef, {
// //       text: msg,
// //       name: displayName,
// //       createdAt: serverTimestamp(),
// //       photoURL: photoURL,
// //     });
// //     setMsg('');
// //     scroll.current.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   return (
// //     <form onSubmit={(event) => sendMsg(event)} className="send-message">
// //       <label htmlFor="messageInput" hidden>
// //         Enter Message
// //       </label>
// //       <input
// //         id="messageInput"
// //         name="messageInput"
// //         type="text"
// //         className="form-input__input"
// //         placeholder="Type a message..."
// //         value={msg}
// //         onChange={(e) => setMsg(e.target.value)}
// //       />
// //       <button type="submit">Send</button>
// //     </form>
// //   );
// // };

// // export default SendMessage;


// // import React, { useState } from 'react';
// // import { db, auth } from '../firebase';
// // import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// // const SendMessage=()=> {
// //     const [msg, setMsg] = useState('')
// //     const messagesRef = collection(db, "messages");

// //     const sendMsg = async (e) => {
// //         const { uid, photoURL } = auth.currentUser

// //         await addDoc(messagesRef, {
// //             text: msg,
// //             createdAt: serverTimestamp(),
// //             uid: uid,
// //             photoURL: photoURL
// //         })
// //         setMsg('');
// //     };

// //     return (
// //         <div>
// //             <input placeholder='Message...'
// //                 type="text" value={msg}
// //                 onChange={(e) => setMsg(e.target.value)}
// //             />
// //             <button onClick={sendMsg}>Send</button>
// //         </div>
// //     )
// // };

// // export default SendMessage;



// import React, { useState } from 'react';
// import { db, auth } from '../firebase'
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// const SendMessage=({scroll}) => {
//     const [msg, setMsg] = useState('');
//     const messagesRef = collection(db, "messages");

//     const sendMsg = async (e) => {
//         e.preventDefault();
//         if (msg.trim() === '') {
//             alert('Please enter a message');
//             return;
//         }
//         const { uid, displayName,photoURL } = auth.currentUser;

//         await addDoc(messagesRef, {
//             text: msg,
//             name: displayName,
//             createdAt: serverTimestamp(),
//             uid: uid,
//             photoURL: photoURL,
//         });
//         setMsg('');
//         scroll.current.scrollIntoView({ behavior: 'smooth' });
//     };

//     return (
//         <form onSubmit={(event) => sendMsg(event)} className="send-message">
//         <label htmlFor="messageInput" hidden>
//           Enter Message
//         </label>
//         <input
//           id="messageInput"
//           name="messageInput"
//           type="text"
//           className="form-input__input"
//           placeholder="type message..."
//           value={msg}
//           onChange={(e) => setMsg(e.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//     );
//   };



// export default SendMessage;
