import { useState } from 'react';
import { Modal } from './Modal';

const Todo = () => {
  const [showModal, setShowModal] = useState(false);
  return (
  <>
    <div className="card-content">
      <h2>Learn React</h2>
      <button onClick={() => {setShowModal(true)}}className="btn">Done</button>
    </div>
    {showModal && <Modal></Modal>
    }
  </>
  );
}

export default Todo;