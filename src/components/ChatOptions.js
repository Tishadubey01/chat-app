// import React,{useState} from "react";
// import { auth,db } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { collection, query, limit, orderBy, onSnapshot,addDoc,serverTimestamp } from "firebase/firestore";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// import SendMessage from "./SendMessage";
// import Message from "./Message";
// import { useRef } from "react";

// const ChatOptions = ({user}) => {
//     const [roomName, setRoomName] = useState('');
//     const [joinRoom, setJoinRoom] = useState('');
// //const docRef=collection(db, "rooms");
 
//     const createRoom = async (e) => {
//         e.preventDefault();
//         if (roomName.trim() === '') {
//             alert('Please enter a room name');
//             return;
//         }
//         const  { rid, rname,  participants } = auth.currentUser;
//         await db.collection("rooms").add( {
//             text: roomName,
//             name: rname,
//             createdAt: serverTimestamp(),
//             uid: rid,
//             participants: participants,});
//         setRoomName('');
//     };
//     return(
//         <form onSubmit={(event) => createRoom(event)} className="send-room">
//         <label htmlFor="roomInput" hidden>
//             Enter Message
//         </label>
//         <input

//             id="roomInput"
//             name="roomInput"
//             type="text"
//             className="form-input__input"
//             placeholder="type room..."
//             value={roomName}
//             onChange={(e) => setRoomName(e.target.value)}
//         />
//         <button type="submit">Create</button>
//     </form>
//     );};
//     // const joinRoomFunc = async (room) => {
//     //     try{
//     //         const roomSnapshot = await db.collection("rooms").doc(room.id).get();
//     //         const roomData = roomSnapshot.data();
//     //         if(roomData && !roomData.participants.includes(user.uid)){
//     //             await db.collection("rooms").doc(room.id).update({
//     //                 participants: [...roomData.participants, user.uid],
//     //             });
//     //         }
//     //     console.log("Chat room joined with ID: ", room.id);
//     //     setJoinRoom("");
//     // }
//     // catch(error){
//     //     console.error("Error joining room: ", error);
//     // }
//     // };

//     // const leaveRoom = async (room) => {
//     //     try{
//     //         const roomSnapshot = await db.collection("rooms").doc(room.id).get();
//     //         const roomData = roomSnapshot.data();
//     //         if(roomData && roomData.participants.includes(user.uid)){
//     //             await db.collection("rooms").doc(room.id).update({
//     //                 participants: roomData.participants.filter((id) => id !== user.uid),
//     //             });
//     //         }
//     //     console.log("Chat room left with ID: ", room.id);

//     // }
//     // catch(error){
//     //     console.error("Error leaving room: ", error);
//     // }
//     // };
//     // const handleRoomNameChange = (event) => {
//     //     setRoomName(event.target.value);
//     //   };
    
//     //   const handleJoinRoomChange = (event) => {
//     //     setJoinRoom(event.target.value);
//     //   };
//     //   return (
//     //     <div>
//     //       <h2>Chat Options</h2>
//     //       <h3>Create Room</h3>
//     //       <input type="text" value={roomName} onChange={handleRoomNameChange} />
//     //       <button onClick={createRoom}>Create</button>
//     //       <h3>Join Room</h3>
//     //       <input type="text" value={joinRoom} onChange={handleJoinRoomChange} />
//     //       <button onClick={() => joinRoom(joinRoom)}>Join</button>
//     //       <h3>Leave Room</h3>
//     //       <input type="text" value={joinRoom} onChange={handleJoinRoomChange} />
//     //       <button onClick={() => leaveRoom(joinRoom)}>Leave</button>
//     //     </div>
//     //   );
//     // };
    
//     export default ChatOptions;

//     // const joinRoomFunc = async () => {
//     //     useEffect(() => {
//     //         const q = query(
//     //             collection(db, "rooms"),
//     //             orderBy("createdAt"),
//     //             limit(50)
//     //         );
//     //         const data = onSnapshot(q, (QuerySnapshot) => {
//     //             let rooms = [];
//     //             QuerySnapshot.forEach((doc) => {
//     //                 rooms.push({ ...doc.data(), id: doc.id });
//     //             });
//     //             setJoinRoom(rooms);
    
//     //         }
//     //         );
//     //         return () => data;
//     //     );
//     // };
   




