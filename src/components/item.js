// function AddItem(props) {
//   const { id, name, isComplete, onTextDelete, onToggleComplete } = props;

//   return (
//     <li className="list-group-item d-flex justify-content-between align-items-center">
//       <div>
//         {isComplete ? (
//           <button
//             className="btn btn-sm btn-success"
//             onClick={() => onToggleComplete(id)}
//           >
//             <i className="bi bi-check-square"></i>
//           </button>
//         ) : (
//           <button className="btn btn-sm" onClick={() => onToggleComplete(id)}>
//             <i className="bi bi-square"></i>
//           </button>
//         )}
//         <span
//           className="ms-2 mb-3"
//           style={{ textDecoration: isComplete ? "line-through" : "none" }}
//         >
//           {name}
//         </span>
//       </div>
//       <div>
//         <button
//           className="btn btn-danger btn-sm"
//           onClick={() => {
//             onTextDelete(id);
//           }}
//         >
//           <i className="bi bi-trash"></i>
//         </button>
//       </div>
//     </li>
//   );
// }
// export default AddItem;

function TodoItem(props) {
  const { id, text, isCompleted, onItemUpdate, onItemDelete } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted ? (
          <button
            className="btn btn-sm btn-success"
            onClick={() => {
              // passing in the id and the new status
              onItemUpdate(id, false);
            }}
          >
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button
            className="btn btn-sm btn-light"
            onClick={() => {
              onItemUpdate(id, true);
            }}
          >
            <i className="bi bi-square"></i>
          </button>
        )}
        {/* <button className={isCompleted ? "btn btn-sm btn-success" : "btn btn-sm btn-light"}>
            <i className={ isCompleted ? "bi bi-check-square" : "bi bi-square" }></i>
        </button> */}
        {/* this is for comment */}
        <span
          className={isCompleted ? "ms-2 text-decoration-line-through" : "ms-2"}
        >
          {text}
        </span>
      </div>
      <div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            const confirm = window.confirm("Delete?");
            if (confirm) {
              onItemDelete(id);
            }
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
export default TodoItem;
