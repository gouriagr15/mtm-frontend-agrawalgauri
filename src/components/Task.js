import React from 'react';

const Task = ({ task, handleEditClick, deleteTask }) => {
  return (
    <li className="task-item">
      <span>{task.description}</span>
      <div>
        <button onClick={() => handleEditClick(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default Task;
