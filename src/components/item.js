function AddItem(props) {
  const { id, name, isComplete, onTextDelete, onToggleComplete } = props;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isComplete ? (
          <button
            className="btn btn-sm btn-success"
            onClick={() => onToggleComplete(id)}
          >
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button className="btn btn-sm" onClick={() => onToggleComplete(id)}>
            <i className="bi bi-square"></i>
          </button>
        )}
        <span
          className="ms-2 mb-3"
          style={{ textDecoration: isComplete ? "line-through" : "none" }}
        >
          {name}
        </span>
      </div>
      <div>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            onTextDelete(id);
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
export default AddItem;
