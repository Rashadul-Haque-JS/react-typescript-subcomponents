import styeled from 'styled-components'

export const AvatarStyle = styeled.img`
width:60px;
height:60px;
border-radius:50%;

`;

export const DivStyle = styeled.div`
  display:flex;
  justify-content:center;
  width:100%;
  height:100%;
  align-items:center;
`;



export const TableStyle = styeled.table`
  width:100%;
  border-collapse:collapse;
  padding:20px;
  margin:10px auto;
`;

export const THeadStyle = styeled.thead`
color:#DABCA0;
width:100%;
`;


export const TBodyStyle = styeled.tbody`
  width:100%;
  padding:10px;
  text-align:center;
  font-size:1rem;
  

`;

export const TRStyle = styeled.tr`
width:100%;
vertical-align: middle;

`;
export const TRDStyle = styeled.td`
background-color:#DABCA0;
text-align:center;

`;

export const TRHStyle = styeled.th`
background-color:#DABCA0;
text-align:center;

`;