import { useState } from 'react';
import validateForm from '../utilities/validateform';
import clearFormData from '../utilities/clearForm';
import submitFormData from '../utilities/submitForm';

function Form({ onClose }) {

  const [formData, setFormData] = useState({

    name: '',

    email: '',

    age: '',

  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  };

  const handleClear = () => {

    setFormData(clearFormData());

    setErrors({});

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);

    } else {

      submitFormData(formData);

      handleClear();

      onClose(); 

    }

  };

  return (

    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>

      <div>

        <label>Name: </label>

        <input

          name="name"

          value={formData.name}

          onChange={handleChange}

        />

        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}

      </div>

      <div>

        <label>Email: </label>

        <input

          name="email"

          value={formData.email}

          onChange={handleChange}
          
          type="text"

        />

        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        
      </div>

      <div>

        <label>Age: </label>

        <input

          name="age"

          value={formData.age}

          onChange={handleChange}

          type="text"

        />

        {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}

      </div>

      <button type="button" onClick={handleClear} style={{ marginTop: '1rem' }}>

        Clear

      </button>

      <button type="submit" style={{ marginLeft: '1rem' }}>

        Submit

      </button>

    </form>

  );

}

export default Form;