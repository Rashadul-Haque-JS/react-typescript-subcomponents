import React from "react";
// import TableComponent from "./components/users";
import users from './users.json'
import "./App.css";
import TableUserComponent from "./components/userTable";

function App() {
  return (
    <div className="container">
      <div className="text-center h4 p-5 fw-bold">
        Users Data
      </div>
      <div className="scroll">
        {/* <TableComponent props={users} /> */}
        <TableUserComponent props={users}/>
      </div>
    </div>
  );
}

export default App;
