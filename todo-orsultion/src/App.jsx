import { useState } from 'react';
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { func } from 'prop-types';

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('');

  function addTask() {
    if (!inputValue.trim()) return;

    const newTask = {
      id: uuidv4(),
      text: inputValue,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInputValue('')
  }

  function deleteTask(id) {
    const updateTasks = tasks.filter((task) => task.id !== id);

    setTasks(updateTasks);
  }


  function toggleTaskCompleted(task) {
    const updateTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          completed: !t.completed,
        };
      }

      return t;
    });

    setTasks(updateTasks);
  }


  return (
    <main>
      <div className="app">
        <h1>To-Do-List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder='Enter a new task...'
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
          <button onClick={addTask}>Add</button>

        </div>

        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={${task.completed ? ' completed' : ''}}>
              <span onClick={() => toggleTaskCompleted(task)}>{task.text}</span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </main >
  );
}

export default App