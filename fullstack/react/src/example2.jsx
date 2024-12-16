import React, { useState } from 'react';
import './App.css'

export default function App() {
  const [users, setUsers] = useState([{ id: 1, name: 'John', age: 25 }]);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [editUserId , setEditUserId] = useState(null);

  function handleEditUser(user){
    setEditUserId(user.id)
    setNewName(user.name)
    setNewAge(user.age)
  }

  const addUser = () => {
    if (newName.trim() === '') {
      alert('Please enter  name ');
      return;
    }
    const userExists  = users.find((user) => user.name === newName && user.id !== editUserId);
    if(userExists){
      alert('User already exists');
      return;
    }
    if (newAge.trim() === '') {
      alert('Please enter age');
      return;
    }
    if(editUserId){
      const updatedUsers = users.map((user) => user.id === editUserId ? {...user, name: newName, age: parseInt(newAge, 10)} : user);
      setUsers(updatedUsers);
      setEditUserId(null);
    }else{
      const newUser = {id: users.length +1, name: newName, age: parseInt(newAge, 10)};
      setUsers([...users, newUser]);
    }
    setNewName('');
    setNewAge('');
    


  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };


  return (
    <div>
      <h1>Object List</h1>
      <ul>
        {users.map((obj) => (
          <li key={obj.id}>
            ID: {obj.id}, Name: {obj.name}, Age: {obj.age}{' '}
            <button onClick={() => deleteUser(obj.id)}>Delete</button>
            <button onClick={() => handleEditUser(obj)}>Update</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter age"
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
        />
        <button onClick={addUser}>{editUserId ? "Update" : "Add New Object"}</button>
      </div>
    </div>
  );
}
