import AddItem from "./item";

function ItemList(props) {
  const { list, onTextDelete, onToggleComplete } = props;
  return (
    <ul className="list-group ">
      {list.map((text) => (
        <AddItem
          key={text.id}
          {...text}
          onTextDelete={(id) => {
            onTextDelete(id);
          }}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}
export default ItemList;
