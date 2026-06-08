import React, { useState } from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    if(input === '') {
      alert("Please enter todo task to add.")
      return;
    }
    setTodo([...todo, input]);
    setInput(''); 
  }

  const updateTodo = (feature, index) => {
    if(feature === 'delete') {
      todo.splice(index, 1);
      setTodo([...todo]);
      return;
    }

    const updatedVal = prompt("Edit your task", todo[index]);
    todo.splice(index, 1, updatedVal);
    setTodo([...todo]);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder='Enter your todo' onChange={e => setInput(e.target.value)} value={input}  />
        <button type='submit'>Add Todo</button>
      </form>

      <ol>
        {todo.map((item, index) => {
          return (
            <li key={index}>{item}
            <div>
              <button onClick={() => updateTodo('delete', index)}>Delete</button>
              <button onClick={() => updateTodo('edit', index)}>Edit</button>
            </div>
          </li>
          )
        })
}
      </ol>

    </div>
  )
}

export default App