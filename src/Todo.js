import React, { useState } from "react";

import "./Todo.css";

export default function Todo(props) {
  const deleteHandler = () => {
    props.deleteTodoItem(props.todo.id); // passing the todo Id  to TODOLIST(parent) component
  };

  const completeHandler = () => {
    props.checkedTask(props.todo.id);
    // Todo completion handler passing the ID
  };

  // Using ternary opearator for conditional UI
  return props.todo.isCompleted ? (
    <div className="container">
      <div>
        <p className="ml-3 m-2 mark">{props.todo.todo}</p>
      </div>
      <div>
        <i
          onClick={completeHandler}
          className="far fa-times-circle mr-3 text-danger"
        ></i>
        <i onClick={deleteHandler} className="far fa-trash-alt text-danger"></i>
      </div>
    </div>
  ) : (
    <div className="container">
      <div>
        <p className="ml-3 m-2 unmark">{props.todo.todo}</p>
      </div>
      <div>
        <i
          onClick={completeHandler}
          className="far fa-check-square text-success mr-3"
        ></i>
        <i onClick={deleteHandler} className="far fa-trash-alt text-danger"></i>
      </div>
    </div>
  );
}

//   const [completed, setCompleted] = useState(false); // initializing the state for handling the status of todo

//   const checkedHandler = (e) => {
//     if (
//       props.todoList.map((eachId) => {
//         return eachId.id === props.id; // striking off the todo based on its id
//       })
//     ) {
//       alert("Are you Done with Your Task..?");
//       setCompleted((prevState) => {
//         return {
//           prevState: !prevState, //converting the previous state of todo
//         };
//       });
//     }
//   };
//   // console.log(completed);
//   const undoHandler = () => {
//     // handle of undo the todo list based on its previous state
//     alert("Are you not completed your Task..?");
//     setCompleted((prevState) => {
//       if (prevState === true) {
//         return {
//           prevState: !prevState,
//         };
//       }
//     });
//   };

//   // const randomColors = () => {
//   //   let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); //genearing the random colors for todos
//   //   return randomColor;
//   // };

//   return (
//     <div className="container">
//       <div>
//         <p className={`ml-3 ${completed ? "mark" : "unmark"} m-2`}>
//           {props.todo.todo}
//         </p>
//       </div>
//       <div>
//         <i
//           onClick={undoHandler}
//           className="far fa-times-circle mr-3 text-danger"
//         ></i>
//         <i
//           onClick={checkedHandler}
//           className="far fa-check-square text-success mr-3"
//         ></i>
//         <i onClick={deleteHandler} className="far fa-trash-alt text-danger"></i>
//       </div>
//     </div>
//   );
// }
//Above adding the handlers and added the conditional className for paragraph tag based on its state
