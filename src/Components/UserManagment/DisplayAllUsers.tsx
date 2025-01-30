import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { User } from "../../types/User";

const DisplayAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]); // Use the User type

  useEffect(() => {
    axiosInstance
      .get<User[]>("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
  <div>
    <h2>User List</h2>
    <ul>
        {users.map((user) => (
          <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
    </ul>
  </div>
  )
};

export default DisplayAllUsers;