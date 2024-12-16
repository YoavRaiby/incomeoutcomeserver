import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (index,e) => {
    //e.stopPropagation();
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul className="task-list">
  {tasks.map((t, index) => (
    <li
      key={index}
      className={t.completed ? 'completed' : ''}
    >
      <span onClick={() => toggleTask(index)}>{t.text}</span>
      <button className="delete-btn" onClick={() => deleteTask(index)}>
        Delete
      </button>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
}

export default App;
