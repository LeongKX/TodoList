import { useState } from "react";
import "./App.css";
import AddNewForm from "./components/addnew";
import ItemList from "./components/list";
import { nanoid } from "nanoid";

function App() {
  const [list, setList] = useState([]);

  const handleToggleComplete = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  console.log(list);
  return (
    <div className="container">
      <div
        className="card rounded shadow-sm mx-auto my-4 "
        style={{
          maxWidth: "500px",
        }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">Todo List</h3>
          <ItemList
            list={list}
            onTextDelete={(id) => {
              const newList = list.filter((s) => s.id !== id);
              setList(newList);
            }}
            onToggleComplete={handleToggleComplete}
          />
          <AddNewForm
            onNewNameAdded={(textName) => {
              const newList = [...list];
              newList.push({
                id: nanoid(),
                name: textName,
                isComplete: false,
              });
              setList(newList);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
