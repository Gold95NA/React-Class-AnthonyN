import React from 'react';

const ConfModal = ({ visible, onConfirm, onCancel, task }) => {

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>

      <div style={{   
        backgroundColor: '#444',
        padding: '2rem', 
        borderRadius: '8px', 
        textAlign: 'center' 
      }}>

        <p>Are you sure you want to mark "{task?.text}" as completed?</p>
        <button onClick={onConfirm} style={{ marginRight: '1rem' }}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  ); 
};

export default ConfModal;
