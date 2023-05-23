import React from 'react';
import {auth,db} from "../firebase";
import CreateChatRoom from "./CreateRoom";
import JoinChatRoom from "./JoinChatRoom";
import DirectChat from "./DirectChat";
import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";
const Homepage = () => {
  
  return (
   <>
            
            
    <Router>
      <Routes>
      
        <Route exact path="/create"  element={<CreateChatRoom />} />
        <Route path="/join" element={<JoinChatRoom />} />
        <Route path="/direct-chat" element={<DirectChat />} />
      </Routes>
    </Router>
    </>
  );
};

export default Homepage;
