import React, { useReducer, useState } from 'react';
import './App.css';
import { todoReducer, initialState } from './reducers/reducer.js';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask] = useState('');

  const handleChange = e => {
    setTask(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', payload: task })
    setTask('')
  }

  const toggleComplete = task => {
    console.log(task.id)
    state.map(todo => {
      if(todo.id === task.id) {
        console.log(todo.id)
        return {
          ...todo,
          completed: !task.completed
        }
      }
      return todo
    })
    console.log(task)
    dispatch({ type: 'TOGGLE_COMPLETE'})
  }

  return (
    <div className="App">
      <h1>TO DO List</h1>
      <TodoForm 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        value={task}
      />
      <TodoList
        todos={state}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
