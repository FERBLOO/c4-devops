// vendors
import React from "react";
import { useQuery, useMutation, gql } from '@apollo/client';

const USERS = gql `
  query AllUsers {
    allUsers {
      fullName
      email
      name

    }
  }
`;

const UPDATE_USER = gql `
  mutation updateUsers {
    updateUsers {
      fullName
      email
      name
      status

    }
  }
`;

const Users = () => {
  const { data } = useQuery(USERS);
  const [updateUser] = useMutation(UPDATE_USER);

  const handelUpdate = (_id) => {
    updateUser({
      variables: {
        _id,
      }
    });    
  }

  // console.log(data);

  return <>{!data ? <></> : data?.allusers?.map(user => (
    <>
      <div key={user._id}>
        {user.fullName} -&nbsp;
        {user.email} &nbsp;
        {user.status === 'PENDING' ? <button onClick={() => handelUpdate(user._id)}>Aceptar</button> : <></>}
         </div>
         </>
   ))}</>
};



export default Users;