import { useState } from "react";
import ContactForm from "./component/ContactForm";
import List from "./component/List";




const App = () => {
  const [items, setItems] = useState([
    {  name: "",
    email: "",
    message: "", 
    id: 12
  }
  ]);
  
  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = (data) =>{
    setItems(oldItems =>({
      ...oldItems,
      ...data
    }))
  }

  return (
    <div>
      {/* Other components or content */}
      <ContactForm addItem={addItem} />

      <List items={items} handleDelete={handleDelete}/>
    </div>
  );
}

export default App

