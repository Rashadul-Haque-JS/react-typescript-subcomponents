import React from "react";
import { User } from "../types/types";
import { AvatarStyle } from "../Styles/styles";
import { TableStyle, THeadStyle, TRStyle, TBodyStyle } from "../Styles/styles";


const TableComponent = ({ props }: { props: User[] }) => {
  
  return (
    <TableStyle className="table table-bordered table-dark table-striped table-hover text-center">
       <THeadStyle>
        <TRStyle>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact</th>
          <th>Language</th>
          <th>City</th>
          <th>Recognise by</th>
        </TRStyle>
      </THeadStyle>
      <TBodyStyle>
        {props.map((user) => (
          <tr key={user.id} >
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.language}</td>
            <td>{user.city}</td>
            <td>
              <AvatarStyle src={user.avatar} alt="user" />
            </td>
          </tr>
        ))}
      </TBodyStyle>

    </TableStyle>
  );
};

export default TableComponent;
