function AddItem(props) {
  const { isCompleted, text } = props;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted === true ? (
          <button className="btn btn-sm btn-success">
            <i className="bi bi-check-square"></i>
          </button>
        ) : (
          <button className="btn btn-sm ">
            <i className="bi bi-square"></i>
          </button>
        )}
        <span className="ms-2 mb-3">{text}</span>
      </div>
      <div>
        <button class="btn btn-sm btn-danger">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}
export default AddItem;
