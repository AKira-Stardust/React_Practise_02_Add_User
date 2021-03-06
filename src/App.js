import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName,uAge) => {
    //Handles adding new user from the AddUser component
    setUsersList( (prevUsersList) => {
      return [...prevUsersList, { id: Math.random().toString(), name: uName, age: uAge }]; 
    });    
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
