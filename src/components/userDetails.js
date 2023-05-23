// import React, { useState, useEffect } from "react";
// import { db } from "../firebase";

// const UserDetails = ({ match }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const userRef = await db.collection("users").doc(match.params.userId).get();
//         if (userRef.exists) {
//           setUser(userRef.data());
//         } else {
//           // Handle the case when the user doesn't exist
//           console.log("User not found.");
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }
//     };

//     fetchUserDetails();
//   }, [match.params.userId]);

//   if (!user) {
//     return <div>Loading user details...</div>;
//   }

//   return (
//     <div className="user-details">
//       <h2>User Details</h2>
//       <p>Name: {user.displayName}</p>
//       <p>Email: {user.email}</p>
//       <button onClick={() => console.log("Start Chat")}>Start Chat</button>
//     </div>
//   );
// };

// export default UserDetails;
