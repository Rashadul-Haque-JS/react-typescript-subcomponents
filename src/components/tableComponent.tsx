import { TableStyle , THeadStyle,TBodyStyle, TRStyle, TRHStyle,TRDStyle,} from "../Styles/styles";
import { TableTypes, TableBodyTypes,TableHeadTypes,THTypes,TDTypes,TRTypes } from "../types/types";


const Table =({children, className}:TableTypes)=>{
  return  <TableStyle className={className}>{children}</TableStyle>
}

const THead= ({children}:TableHeadTypes)=>{
  return  <THeadStyle>{children}</THeadStyle>
}

const TBody= ({children}:TableBodyTypes)=>{
  return  <TBodyStyle>{children}</TBodyStyle>
}

const TR= ({children}:TRTypes)=>{
  return  <TRStyle>{children}</TRStyle>
}

const TH= ({text}:THTypes)=>{
 return   <TRHStyle>{text}</TRHStyle>
}

const TD= ({text,children}:TDTypes)=>{
 return   <TRDStyle>{text}{children}</TRDStyle>
}

Table.Head = THead
Table.Body = TBody
Table.TR = TR
Table.TH = TH
Table.TD = TD

export default Table