import React, { useReducer } from 'react';
import './App.css';
import { todoReducer, initialState } from './reducers/reducer.js';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import TodoContext from './contexts/TodoContext.js';
import useInput from './hooks/useInput.js';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask, handleTask] = useInput('');
  const [tag, setTag, handleTag] = useInput('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', payload: task })
    setTask('')
  }

  const addTag = (task) => {
    dispatch({type: 'ADD_TAG', payload: {task, tag}})
    setTag('');
  }

  const toggleComplete = (task) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: task})
  }

  const clearComplete = e => {
    e.preventDefault()
    dispatch({type: 'CLEAR_COMPLETED'})
  }

  return (
    <div className="App">
      <h1>TO DO List</h1>
      <TodoContext.Provider value={{state, task, tag, addTag, handleTag, toggleComplete, handleTask, handleSubmit, clearComplete}}>
        <TodoForm />
        <TodoList
          todos={state}
          toggleComplete={toggleComplete}
        />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
