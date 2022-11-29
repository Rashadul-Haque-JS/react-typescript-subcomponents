import React from "react";

export type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    language: string;
    avatar?: string;
    city: string;
   
  };

  export type TableTypes ={
    children?: JSX.Element[] | JSX.Element;
    className: string;
  }

  export type TableHeadTypes ={
    children: | JSX.Element[] | JSX.Element
  }

  export type TableBodyTypes ={
    children: JSX.Element[][] | JSX.Element
  }

  export type TRTypes ={
    children: any
  }

  export type THTypes ={
    text: string | number
  }
  export type TDTypes={
    text: string | number
  }