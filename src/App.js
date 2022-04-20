import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import useTodoState from './state-hooks/useTodoState'

function App() {
  // 初始state 定义 空 【 】
  // 因为多个method 都用到了 setTODO，所以可以自定义个hooks，后期引用 自定义hooks 返回的值，用的地方自己解构！

  const { todos, deleteTodo, addTodo } = useTodoState()

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
