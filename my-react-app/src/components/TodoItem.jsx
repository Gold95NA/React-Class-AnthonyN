import React from 'react';

const TodoItem = ({ task, onMarkDone }) => {

  return (

    <div style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc' }}>

      <p style={{ margin: 0 }}>{task.text}</p>

      <button onClick={() => onMarkDone(task)} disabled={task.completed}>

        {task.completed ? 'Completed' : 'Done'}

      </button>

    </div>

  );
  
};

export default TodoItem;