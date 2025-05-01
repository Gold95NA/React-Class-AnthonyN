//Anthony Nalle

import { useState } from 'react';
import clearFormData from "../utilities/clearForm";
import submitFormData from "../utilities/submitForm";

function Form({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',

  });

  const [errors, setErrors] = useState({});

  const validateForm = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        if (value.length < 2) return 'Name must be at least 2 characters.';
        if (!/^[a-zA-Z\s'-]+$/.test(value)) return 'Name must contain only letters.';
        return '';

      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (value.length < 5) return 'Email must be at least 5 characters.';
        if (!/^\S+@\S+\.\S+$/.test(value)) return 'Email format is invalid.';
        return '';

      case 'age':
        if (!value.trim()) return 'Age is required.';
        if (isNaN(Number(value))) return 'Age must be a number.';
        if (Number(value) <= 0) return 'Age must be greater than zero.';
        return '';

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateForm(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleClear = () => {
    setFormData(clearFormData());
    setErrors({});
  };

  const handleSubmit = (e) => 
    e.preventDefault();
    const newErrors = {};
    for (const key in formData) {
      const error = validateForm(key, formData[key]);
      if (error) newErrors[key] = error;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }

    submitFormData(formData);
    handleClear();
    onClose(); 
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          background: '#444',
          color: '#fff',
          minWidth: '300px'
        }}>

        {['name', 'email', 'age'].map((field) => (
          <div key={field} style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginBottom: '0.25rem' }}>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>

            <input
              name={field}
              type="text"
              value={formData[field]}
              onChange={handleChange}
              style={{
                padding: '0.5rem',
                border: '1px solid #444',
                borderRadius: '4px',
                background: '#333',
                color: '#fff',
              }}
            />
            {errors[field] && (
              <span style={{ color: 'tomato', marginTop: '0.25rem' }}>
                {errors[field]}
              </span>
            )}
          </div>
        ))}

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="button" onClick={handleClear}>Clear</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  ); 
}

export default Form;