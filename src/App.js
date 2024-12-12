import React, { useState, useEffect } from "react";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import UserTable from "./components/UserTable";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [users, setUsers] = useState([
   
  ]);

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">CRUD App with Hooks</h1>
      <div className="row">
        <div className="col-md-6">
          {editing ? (
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          ) : (
            <AddUserForm addUser={addUser} />
          )}
        </div>
        <div className="col-md-6">
          <h2 className="text-center">Ver Usuarios</h2>
          <UserTable
            users={users}
            editUser={editUser}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
