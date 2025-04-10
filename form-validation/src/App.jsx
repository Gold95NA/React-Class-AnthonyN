import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Display Form</button>
      )}

      {showForm && (
        <Form onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}

export default App;
