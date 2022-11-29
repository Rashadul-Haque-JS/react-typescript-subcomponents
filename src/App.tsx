import React from "react";
import users from './users.json'
import "./App.css";
import TableUserComponent from "./components/home";

function App() {
  return (
   <div className="w-100 app">
     <div className="container">
      <div className="text-center p-4 fw-bold">
        <h1  className="h4 fw-bold">Table of user data (fake) <span className="h6 d-block">Scrollable</span></h1>
      </div>
      <div className="scroll">
        <TableUserComponent props={users}/>
      </div>
    </div>
   </div>
  );
}

export default App;
