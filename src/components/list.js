import AddItem from "./item";

function ItemList(props) {
  const { todos } = props;
  return (
    <ul className="list-group ">
      {todos.map((text) => (
        <AddItem {...text} />
      ))}
    </ul>
  );
}
export default ItemList;
