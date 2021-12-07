import React from "react";
import Todo from "./Todo";
export default function TodosList(props) {
  const deleteTodoItem = (id) => {
    props.todoRemover(id);
  };
  // passing the id from TODO Component for delete the todo based on its id

  const checkedTask = (id) => {
    props.isCompleted(id);
  };

  const ListOfTodos = props.todoList.map((todo) => {
    // using map for adding the data onto an array and passing the props to TODO(child) component
    return (
      <Todo
        todo={todo}
        key={todo.id}
        deleteTodoItem={deleteTodoItem}
        checkedTask={checkedTask}
        noTodos={props.noTodo}
        todoList={props.todoList}
      />
    );
  });
  return <div>{ListOfTodos}</div>;
}
