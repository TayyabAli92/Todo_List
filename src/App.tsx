import TodoApp from "./components/Todo"
import "./App.css"

export default function App(){
  return (
    <div className="my-todo-list">
      <h1>Todo List</h1>
      <TodoApp />
    </div>
  )
}