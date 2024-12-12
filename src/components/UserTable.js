import React from "react";

const UserTable = ({ users, editUser, deleteUser }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Usuario</th>
        <th>Accion</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                className="btn btn-primary btn-sm me-2"
                onClick={() => editUser(user)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteUser(user.id)}
              >
                Borrar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3} className="text-center text-muted">
            No users available
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
