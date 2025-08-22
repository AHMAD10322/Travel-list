
export function Item({ item, ondeleteItem, ontoggleitems }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={item.packed}
                onChange={() => ontoggleitems(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.description} ({item.quantity})
            </span>
            <button onClick={() => ondeleteItem(item.id)}>❌</button>
        </li>
    );
}
