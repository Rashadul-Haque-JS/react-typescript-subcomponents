import React from "react";
import { User } from "../types/types";
import Table from "./tableComponent";
import { AvatarStyle } from "../Styles/styles";

const TableUserComponent = ({ props }: { props: User[] }) => {
  return (
    <Table className="table table-responsive table-bordered table-dark table-striped table-hover text-center">
      <Table.Head>
        <Table.TR>
          <Table.TH text={"ID"} />
          <Table.TH text={"First Name"} />
          <Table.TH text={"Last Name"} />
          <Table.TH text={"Contact"} />
          <Table.TH text={"Language"} />
          <Table.TH text={"City"} />
          <Table.TH text={"Identify by"} />
        </Table.TR>
      </Table.Head>
      <Table.Body>
        {props.map(user => {
          return (
            <Table.TR key={user.id}>
              <Table.TD text={user.id} />
              <Table.TD text={user.first_name} />
              <Table.TD text={user.last_name} />
              <Table.TD text={user.email} />
              <Table.TD text={user.language} />
              <Table.TD text={user.city} />
              <Table.TD children={<AvatarStyle src={user.avatar} alt="user" />} />
            </Table.TR>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default TableUserComponent;
