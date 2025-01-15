// import AddItem from "./item";

// function ItemList(props) {
//   const { list, onTextDelete, onToggleComplete } = props;
//   return (
//     <ul className="list-group ">
//       {list.map((text) => (
//         <AddItem
//           key={text.id}
//           {...text}
//           onTextDelete={(id) => {
//             onTextDelete(id);
//           }}
//           onToggleComplete={onToggleComplete}
//         />
//       ))}
//     </ul>
//   );
// }
// export default ItemList;
import TodoItem from "./item";

function TodoList(props) {
  const { todos, onItemUpdate, onItemDelete } = props;
  return (
    <ul className="list-group">
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            // id={item.id}
            // text={item.text}
            // isCompleted={item.isCompleted}
            {...item}
            onItemUpdate={onItemUpdate}
            onItemDelete={onItemDelete}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;

