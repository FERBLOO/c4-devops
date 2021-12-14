// vendors
import React from "react";
import { useQuery, gql } from '@apollo/client';

const USERS = gql `
  query AllUsers {
    allUsers {
      fullName
      email
      name

    }
  }
`;

const Users = () => {
  const { data } = useQuery(USERS);
  console.log(data);

  return <>{!data ? <></> : 'Usuarios'}</>
};



export default Users;