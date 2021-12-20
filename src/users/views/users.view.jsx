// vendors
import React from "react";
import { useQuery, useMutation, gql } from '@apollo/client';

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


const UPDATE_USER = gql `
mutation UpdateUser($input: UpdateInput!) {
  updateUser(input: $input) {
    _id
    status
  }
}

`;
const Users = () => {
  const { data } = useQuery(USERS);
  console.log(data);
  const [updateUser] = useMutation(UPDATE_USER);
  
  const handleUpdate = (_id) => {
    updateUser({
      variables: {
        _id,
        status
        
      }
    })
  }


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
    <td>{user.status === 'PENDING' ? <button onClick={() => handleUpdate(user._id)}> permitir </button> : <></>}</td>
    <td>{user.status === 'AUTHORIZED' ? <button> denegar </button> : <></>}</td>
    </tr>
  </table>
</div>

   </>
  ))}</>
};

export default Users;

