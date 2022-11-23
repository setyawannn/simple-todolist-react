import React from 'react';
import './App.scss';

function App() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function addTodoHandler(e) {
    e.preventDefault();

    setTodos([...todos, {
      id: generateId(),
      activity: activity,
    }]);
    setActivity('');
  }

  return (
    <div className='bg'>
      <div className='container'>
        <h1>Simple todolist</h1>
        <form onSubmit={addTodoHandler}>
          <input
            type='text'
            placeholder='Nama aktifitas'
            value={activity}
            onChange={function (e) {
              setActivity(e.target.value);
            }} />
          <button type='submit'>Tambah</button>
        </form>
        <ul>
          {todos.map(function (todo) {
            return <li key={todo.id}>{todo.activity}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
