import React from 'react';
import './App.scss';

function App() {
  const [activity, setActivity] = React.useState('');
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function saveTodoHandler(e) {
    e.preventDefault();

    if (edit.id) {
      const updateTodo = {
        id: edit.id,
        activity
      }
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });

      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updateTodo;

      setTodos(updatedTodos);
      return;
    }

    setTodos([...todos, {
      id: generateId(),
      activity,
    }]);
    setActivity('');
  }

  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
  }

  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  return (
    <div className='bg'>
      <div className='container'>
        <h1>Simple todolist</h1>
        <form onSubmit={saveTodoHandler}>
          <input
            type='text'
            placeholder='Nama aktifitas'
            value={activity}
            onChange={function (e) {
              setActivity(e.target.value);
            }} />
          <button type='submit'>
            {edit.id ? 'Simpan perubahan' : 'Tambah'}
          </button>
        </form>
        <ul>
          {todos.map(function (todo) {
            return (
              <li key={todo.id}>
                {todo.activity}
                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
