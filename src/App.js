import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Header from "./Header";
import TodosList from "./TodosList";
import { uuid } from "uuidv4"; // importing UUID for adding the specific Id to the Todo List
import "./Todo.css";
// importing components

export default function App() {
  const [todoList, setTodoList] = useState([]); // initializing the state for sting the todos

  const childData = (data) => {
    setTodoList([{ id: uuid(), ...data }, ...todoList]);
  }; // Adding the data to an array from user input

  // const [noTodo, setNoTodo] = useState("");
  useEffect(() => {
    const retrivedData = JSON.parse(localStorage.getItem("todoList"));
    if (retrivedData) setTodoList(retrivedData);
  }, []); // retriving data from localstorage

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]); // adding the todos into local storage

  const todoRemover = (id) => {
    const newTodoList = todoList.filter((eachTodo) => {
      return eachTodo.id !== id;
    }); // deleting the todos based on its id
    setTodoList(newTodoList);
  };

  const isCompleted = (taskId) => {
    const completedTask = todoList.map((eachTodo) => {
      if (eachTodo.id === taskId) {
        return {
          ...eachTodo,
          isCompleted: !eachTodo.isCompleted,
        };
      }
      return eachTodo;
    });
    setTodoList(completedTask);
  };

  return (
    <div>
      <Header />
      <div className="background-container">
        <AddTodo childData={childData} />
        <TodosList
          todoList={todoList}
          setTodoList={setTodoList}
          todoRemover={todoRemover}
          isCompleted={isCompleted}
        />
      </div>
      <h3 className="text-center text-info">
        {todoList.length >= 1 ? "" : "No Todos Available"}
      </h3>
    </div>
  );
}
//  Above added custom HTML Components and passed the props to its child component
