import logo from './logo.svg';
import './App.css';
import TodoForm from './components-hooks/todoForm';
import TodoList from './components-hooks/todoList';
import { useState } from 'react';

function App() {

  const [todos, setTodo] = useState([]);

  const addTodo = (value) => {
    setTodo(() => ([value, ...todos]));
  }

  const deleteTodo = (todoIndex) => {
    const newTodos = todos.filter((_, index) => { return (todoIndex !== index) })
    setTodo(newTodos);

  }


  return (
    <div className="App">
      <TodoForm
        saveTodo={(todoText) => {
          const trimText = todoText.trim();

          if (trimText.length > 0) {
            addTodo(trimText);
          }
        }} />

      <TodoList todos={todos} deleteTodo={deleteTodo} />

    </div>
  );
}

export default App;
