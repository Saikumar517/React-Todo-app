import React, { useState } from "react";

export default function AddTodo(props) {
  const [userInput, setUserInput] = useState({
    todo: "",
    isCompleted: false,
  }); // initialized the state to store the user input data

  const inputHandler = (e) => {
    setUserInput((prevstate) => {
      return {
        ...prevstate,
        todo: e.target.value,
      };
    }); // taking the user input
  };

  // console.log(userInput);
  const btnSubmit = (e) => {
    // submiting the form
    if (userInput.todo === "") {
      alert("Please enter the valid input");
    }
    e.preventDefault(); // preventing the default browser behaviour
    props.childData(userInput); // sending the data from child component to parent component
    setUserInput((prevState) => {
      return {
        ...prevState,
        todo: "",
      };
    }); // setting the input box to normal state after entering the user input
  };

  // console.log(userInput.todo);
  return (
    <div className="text-center p-3">
      <form>
        <input
          className="form-control w-50 m-auto"
          type="text"
          placeholder="Please enter your Todo"
          onChange={inputHandler}
          value={userInput.todo}
          style={{
            border: userInput.todo === "" ? "2px solid red" : "2px solid green",
          }} // validating the input field based on input
        />
        <button
          onClick={btnSubmit} // button handler to submit the data
          type="submit"
          className="btn btn-primary mt-2"
        >
          Add Todos
        </button>
      </form>
    </div>
  );
}
