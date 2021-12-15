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
    <div className="table-responsive">
  <table className="table">
    <tr>
  <th scope="row">Nombre:</th>
  <td key={user._id}>{user.fullName}</td>
  </tr>
  <tr>
  <th scope="row">E-mail:</th>
  <td key={user.email}>{user.email}</td>
  </tr>
  <tr>
  <th scope="row">Rol:</th>
  <td key={user.role}>{user.role}</td>
  </tr>
  <tr>
  <th scope="row">Estado:</th>
    <td key={user.status}>{user.status}</td>
    <td>{user.status === 'PENDING' ? <button> permitir </button> : <></>}</td>
    <td>{user.status === 'AUTHORIZED' ? <button> denegar </button> : <></>}</td>
    </tr>
  </table>
</div>

   </>
  ))}</>
};

export default Users;

