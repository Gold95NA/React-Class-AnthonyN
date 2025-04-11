import { useState } from 'react';
import Form from './components/Form';

function App() {

  const [showForm, setShowForm] = useState(false);

  return (

    <div style={{

      height: '100vh',

      width: '100vw',

      display: 'flex',

      alignItems: 'center',

      justifyContent: 'center',

      backgroundColor: '#000000', 

    }}>

      {!showForm ? (

        <button

          onClick={() => setShowForm(true)}

          style={{

            padding: '0.75rem 1.25rem',

            fontSize: '1rem',

            borderRadius: '6px',

            border: 'none',

            background: '#444',

            color: 'white',

            cursor: 'pointer'

          }}

        >
          Display Form

        </button>

      ) : (

        <Form onClose={() => setShowForm(false)} />

      )}

    </div>

  );
  
}

export default App;
