import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: null, description: '' });

  const addTask = (description) => {
    const newTask = { id: tasks.length + 1, description: description };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, description: newDescription } : task
    );
    setTasks(updatedTasks);
    setShowModal(false);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleEditClick = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  return (
    <div className="app">
      <h1>Itinerary Planner</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} handleEditClick={handleEditClick} deleteTask={deleteTask} />

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Task</h2>
            <input
              type="text"
              value={currentTask.description}
              onChange={(e) => setCurrentTask({ ...currentTask, description: e.target.value })}
            />
            <div className="modal-buttons">
              <button onClick={() => updateTask(currentTask.id, currentTask.description)}>Save Changes</button>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
