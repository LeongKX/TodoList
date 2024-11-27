// import { useState } from "react";
// import AddNewForm from "./components/addnew";
// import ItemList from "./components/list";
// import { nanoid } from "nanoid";

// function App() {
//   const [list, setList] = useState([]);

//   const handleToggleComplete = (id) => {
//     setList((prevList) =>
//       prevList.map((item) =>
//         item.id === id ? { ...item, isComplete: !item.isComplete } : item
//       )
//     );
//   };

//   return (
//     <div className="container">
//       <div
//         className="card rounded shadow-sm mx-auto my-4 "
//         style={{
//           maxWidth: "500px",
//         }}
//       >
//         <div className="card-body">
//           <h3 className="card-title mb-3">Todo List</h3>
//           <ItemList
//             list={list}
//             onTextDelete={(id) => {
//               const newList = list.filter((s) => s.id !== id);
//               setList(newList);
//             }}
//             onToggleComplete={handleToggleComplete}
//           />
//           <AddNewForm
//             onNewNameAdded={(textName) => {
//               const newList = [...list];
//               newList.push({
//                 id: nanoid(),
//                 name: textName,
//                 isComplete: false,
//               });
//               setList(newList);
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { nanoid } from "nanoid";

import AddNewForm from "./components/addnew";
import TodoList from "./components/list";

function App() {
  const stringTodos = localStorage.getItem("todos");

  const [todos, setTodos] = useState(() => JSON.parse(stringTodos) || []);

  return (
    <div className="App">
      <div
        className="card rounded shadow-sm"
        style={{
          maxWidth: "500px",
          margin: "60px auto",
        }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <TodoList
            todos={todos}
            onItemUpdate={(id, newIsCompleted) => {
              // method #1: use .map
              const newTodos = todos.map((item) => {
                // modify the isCompleted if ID is match
                if (item.id === id) {
                  item.isCompleted = newIsCompleted;
                }
                return item; // always return the item in .map
              });
              // method #2: use .find
              // clone the existing todos
              // const newTodos = [...todos];
              // const item = newTodos.find((t) => t.id === id);
              // // modify the isCompleted
              // if (item) {
              //   // only update if item exists
              //   item.isCompleted = newIsCompleted;
              // }
              setTodos(newTodos);
              let convertedTodos = JSON.stringify(newTodos);
              localStorage.setItem("todos", convertedTodos);
            }}
            onItemDelete={(id) => {
              // filter out the item with the selected id
              const newTodos = todos.filter((t) => t.id !== id);
              // update the existing state
              setTodos(newTodos);
              let convertedTodos = JSON.stringify(newTodos);
              localStorage.setItem("todos", convertedTodos);
            }}
          />
          <AddNewForm
            onNewItemAdded={(newItem) => {
              // clone the exisiting todos
              const newTodos = [...todos];
              newTodos.push({
                id: nanoid(),
                text: newItem,
                isCompleted: false,
              });
              // update the todos state
              setTodos(newTodos);
              let convertedTodos = JSON.stringify(newTodos);
              localStorage.setItem("todos", convertedTodos);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
