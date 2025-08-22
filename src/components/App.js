import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import  PackingList  from "./PackingList";
import  {Stats}  from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handledeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleremovingItems() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) setItems([]); // ✅ clears all items
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        ondeleteItem={handledeleteItem}
        ontoggleitems={handleToggleItem}
        onclearlist={handleremovingItems}
      />
      <Stats items={items} />
    </div>
  );
}






