import { useState } from "react";
import ContactForm from "./component/ContactForm";
import List from "./component/List";




const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);
  
  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      {/* Other components or content */}
      <ContactForm items={items} />

      <List items={items} handleDelete={handleDelete}/>
    </div>
  );
}

export default App

