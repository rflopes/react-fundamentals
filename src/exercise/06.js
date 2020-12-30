// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react';

function UsernameForm({onSubmitUsername}) {
  const inputRef = useRef(null);
  // const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // 1. using submit event
    // const value = event.target.elements.username.value;
    // 2. using refs
    const value = inputRef.current.value;
    onSubmitUsername(value);
  }

  function handleInputChange(event) {
    // 1. handle case error
    // const value = event.target.value;
    // setInputValue(value);
    // setError(
    //   value === value.toLowerCase() ? null : 'Username must be lower case',
    // );

    // 2. enforce lower case username
    const value = event.target.value;
    setInputValue(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          ref={inputRef}
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
      {/* <div role="alert" style={{color: 'red'}}>
        {error}
      </div> */}
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
