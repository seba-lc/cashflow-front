import React from 'react';

const InputSet = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mando info al backend');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" />
      <button type='submit'>Send</button>
    </form>
  );
};

export default InputSet;