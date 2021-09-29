import "./App.css";
import TodoList from "./Todo-List";
import FormTodo from "./form-todo";
import { useState } from "react";
function App() {
  const [todosList, setTodosList] = useState([
    {
      text: "1-task",
      isCompleted: false,
    },
    {
      text: "2-task",
      isCompleted: true,
    },
    {
      text: "3-task",
      isCompleted: false,
    },
  ]);
  const addTodo = (text) => {
    console.log("todo from app");
    const newTodos = [...todosList, { text, isCompleted: false }];
    setTodosList(newTodos);
  };
  // make a function to make a task completed
  // this function will be passed to TodoList
  // this function take index of task and mark it as completed
  const markAsCompleted = (index) => {
    const newTodos = [...todosList];
    newTodos[index].isCompleted = true;
    setTodosList(newTodos);

  }

  const undoMarkAsCompleted = (index) => {
    const newTodos = [...todosList];
    newTodos[index].isCompleted = false;
    setTodosList(newTodos);

  }
  const removeTodo = (index) => {

    const newTodos = [...todosList];
    newTodos.splice(index, 1);

    setTodosList(newTodos);

  }
  return (
    <div className="App">
      <FormTodo addTodo={addTodo} />
      <TodoList todos={todosList} markAsCompleted={markAsCompleted} undoMarkAsCompleted={undoMarkAsCompleted} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
