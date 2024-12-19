
import { useState } from 'react';
import './Tasks.css';
import { v4 as uuidv4 } from 'uuid';
import { CheckCheck, Trash2, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router'
import { useEffect } from 'react';

export const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editTaskId, setEditTaskId] = useState(null); // State to track which task is being edited

    const navigate = useNavigate();
    useEffect(() => {
        const savedTask = JSON.parse(localStorage.getItem('tasks'));

        if (savedTask) {
            setTasks(savedTask);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);



    // Add or Update Task
    function upsertTask() {
        if (!inputValue.trim()) return;

        if (editTaskId) {
            // Update existing task
            const updatedTasks = tasks.map((task) =>
                task.id === editTaskId ? { ...task, text: inputValue } : task
            );
            setTasks(updatedTasks);
            setEditTaskId(null); // Exit edit mode
        } else {
            // Add new task
            const newTask = {
                id: uuidv4(),
                text: inputValue,
                completed: false,
            };
            setTasks([...tasks, newTask]);
        }

        setInputValue(''); // Reset input field

    }

    // Delete Task
    function deleteTask(id) {
        if (editTaskId) {
            return;
        }
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    }

    // Toggle Task Completion
    function toggleTaskCompleted(task) {
        const updatedTasks = tasks.map((t) =>
            t.id === task.id ? { ...t, completed: !t.completed } : t
        );
        setTasks(updatedTasks);
    }

    // Edit Task
    function startEditingTask(task) {
        setEditTaskId(task.id); // Set the task ID in edit mode
        setInputValue(task.text); // Set the input value to the task's current text
    }
    return (
        <main>
            <div className="app">
                <h1>To-Do-List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter a new task..."
                        value={inputValue}
                        onChange={({ target }) => setInputValue(target.value)}
                    />
                    <button onClick={upsertTask}>
                        {editTaskId ? 'Update' : 'Add'}
                    </button>
                </div>

                <ul className="task-list">
                    {tasks.map((task) => (
                        <li key={task.id} className={`${task.completed ? 'completed' : ''}`}>
                            <span onClick={() => navigate(`/task/${task.id}`)}>{task.text}</span>
                            <div className="icons-wrapper">
                                <CheckCheck
                                    onClick={() => toggleTaskCompleted(task)}
                                    className="check"
                                />
                                <Pencil
                                    onClick={() => startEditingTask(task)}
                                    className="edit"
                                />
                                <Trash2
                                    onClick={() => deleteTask(task.id)}
                                    className="trash"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
