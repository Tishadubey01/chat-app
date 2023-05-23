import "./App.css";
import { BrowserRouter as Routes, Router, Route,Switch } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import Homepage from "./components/Homepage";
import DirectChat from "./components/DirectChat";
import UserDetails from "./components/userDetails";
import ChatOptions from "./components/ChatOptions";
import CreateChatRoom from "./components/CreateRoom";
import JoinChatRoom from "./components/JoinChatRoom";
import { useState } from "react";
import Profile from "./components/Updateprofile";
function App() {
  const [user] = useAuthState(auth);


  return (
    <div className="App">
      <NavBar />
      <Router>
      {!user ? (
        <Welcome />
      ) : (
        <>
         <Header/>
             <div className="app__body">
             <Sidebar/>
              <Switch>
                <Route path="/user/:userId">
                  <Chat/>
                </Route>
                <Route  path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
        </>
        )}
      </Router>
    </div>
  );
}

// return(<div className="App">
//       <NavBar />
//       {!user ? (
//         <Welcome />
//       ) : (
//         <>
//         <DirectChat />
//            <CreateChatRoom />
//           <JoinChatRoom />
//           <ChatBox /> 
//         </>
//       )}
//     </div>
//   );

//       }

// return (
    
//       <div className="App">
//         <Router>
//           <NavBar />
//           <Routes>
//             <Route exact path="/">
//               <Welcome />
//             </Route>
//             <Route path="/join">
//               <JoinChatroom />
//             </Route>
//             <Route path="/chatroom/:roomId">
//               <ChatBox />
//             </Route>
//           </Routes>
//         </Router>
//       </div>
   
//   );
// };
export default App;