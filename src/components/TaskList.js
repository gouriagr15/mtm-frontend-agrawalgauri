import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, handleEditClick, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleEditClick={handleEditClick}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
