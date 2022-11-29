import React from "react";
import { User } from "../types/types";
import Table from "./table";


const TableUserComponent = ({ props }: { props: User[] }) => {
  return (
    <Table className="table table-bordered table-dark table-striped table-hover text-center">
      <Table.Head>
        <Table.TR>
          <Table.TD text={"ID"} />
          <Table.TD text={"First Name"} />
          <Table.TD text={"Last Name"} />
          <Table.TD text={"Contact"} />
          <Table.TD text={"Language"} />
          <Table.TD text={"City"} />
          <Table.TD text={"Recognise with"} />
        </Table.TR>
      </Table.Head>
      <Table.Body>
      {props.map((user: User) => {
        return Object.values(user).map((str,index) =>  {
            return <Table.TR key={user.email}>
            <Table.TD text={str} key={index}/>
             </Table.TR>
           });
          })}
       
      </Table.Body>
    </Table>
  );
  
};

export default TableUserComponent;