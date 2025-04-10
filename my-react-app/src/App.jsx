import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import ConfModal from './components/ConfModal';

const App = () => {

  const [todos, setTodos] = useState([

    { id: 1, text: 'Learn React', completed: false },

    { id: 2, text: 'Build a Todo App', completed: false },

    { id: 3, text: 'Deploy the App', completed: false }

  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  const handleMarkDone = (task) => {
    setSelectedTask(task);

    setModalVisible(true);

  };

  const confirmCompletion = () => {

    setTodos(prev => prev.map(t =>

      t.id === selectedTask.id ? { ...t, completed: true } : t

    ));

    setModalVisible(false);

    setSelectedTask(null);

  };

  const cancelModal = () => {

    setModalVisible(false);

    setSelectedTask(null);

  };

  return (

    <div style={{ padding: '2rem' }}>

      <h1>My Todo List</h1>

      {todos.map(todo => (

        <TodoItem key={todo.id} task={todo} onMarkDone={handleMarkDone} />

      ))}

      <ConfModal

        visible={modalVisible}

        onConfirm={confirmCompletion}

        onCancel={cancelModal}

        task={selectedTask}

      />

    </div>
    
  );

};

export default App;
