// vendors
import React from "react";
import { useQuery, gql } from '@apollo/client';

const USERS = gql `
  query AllUsers {
    allUsers {
      fullName
      email
      name
      status
      role
    }
  }
`;

const Users = () => {
  const { data } = useQuery(USERS);
  console.log(data);

  return <>{!data ? <></> : data?.allUsers?.map(user =>(
    <>
    <div key={user._id}>{user.fullName}</div>
    {user.status === 'PENDING' ? <button> aceptar </button> : <></>}
   </>
  ))}</>
};

export default Users;

