import React, { useState } from 'react';
import './App.css';

import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [todos, setTodos] = useState(
    [
      {
        rowNumber: 1, rowDescription: 'Code Review', rowAssigned: 'Pika'
      },
      {
        rowNumber: 2, rowDescription: 'Develop Frontend', rowAssigned: 'Chuu'
      },
      {
        rowNumber: 3, rowDescription: 'Unit Testing', rowAssigned: 'Chuu'
      },
      {
        rowNumber: 4, rowDescription: 'System Analysis', rowAssigned: 'Pika'
      }
    ]
  )
  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'New Todo',
        rowAssigned: 'User Three'
      }
      setTodos(todos => [...todos, newTodo])
      console.log(todos);
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add new todo
          </button>
          <NewTodoForm />
        </div>
      </div>
    </div >
  );
}

export default App;
