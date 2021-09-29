import Todo from "./todo";

const TodoList = (props) => {
  return (
    <div>
      <h1>Todo List</h1>
      {props.todos?.map((todo, index) => {
        return <Todo isCompleted={todo.isCompleted} markAsCompleted={props.markAsCompleted} undoMarkAsCompleted={props.undoMarkAsCompleted} removeTodo={props.removeTodo}
          index={index} key={index} todo={todo} />;
      })}
    </div>
  );
};
export default TodoList;
