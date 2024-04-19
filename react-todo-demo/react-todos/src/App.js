import logo from './logo.svg';
import './App.css';

import TodoTable from './components/TodoTable';

function App() {
  const todos = [
    {
      rowNumber: 1, rowDescription: 'Code Review', rowAssigned: 'Pika'
    },
    {
      rowNumber: 2, rowDescription: 'Develop Frontend', rowAssigned: 'Chuu'
    },
    {
      rowNumber: 3, rowDescription: 'Unit Testing', rowAssigned: 'Chuu'
    }
  ]
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
        </div>
      </div>
    </div >
  );
}

export default App;
