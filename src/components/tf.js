function Tf(isCompleted) {
  return isCompleted ? (
    <button className="btn btn-sm btn-success">
      <i className="bi bi-check-square"></i>
    </button>
  ) : (
    <button className="btn btn-sm ">
      <i className="bi bi-square"></i>
    </button>
  );
}

export default Tf;
