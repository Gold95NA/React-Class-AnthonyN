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

    setTodos(prev => prev.map(item =>

      item.id === selectedTask.id ? { ...item, completed: true } : item

    ));

    setModalVisible(false);

    setSelectedTask(null);

  };

  const cancelModal = () => {

    setModalVisible(false);

    setSelectedTask(null);

  };

  return (

    <div style={{

      height: '100vh',

      width: '100vw',

      display: 'flex',

      alignItems: 'center',

      justifyContent: 'center',

      backgroundColor: '#000'

    }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <h1 style={{ color: 'white' }}>My Todo List</h1>

        <div style={{ display: 'flex', gap: '1rem' }}>

          {todos.map(todo => (

            <TodoItem key={todo.id} task={todo} onMarkDone={handleMarkDone} />

          ))}

        </div>

        <ConfModal

          visible={modalVisible}

          onConfirm={confirmCompletion}

          onCancel={cancelModal}

          task={selectedTask}

        />

      </div>

    </div>

  );
  
};

export default App;
