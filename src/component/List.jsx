/* eslint-disable react/prop-types */


function List({items, handleDelete}) {
    return (
        <div className="container mx-auto px-4 mt-8">
          <ul>
            { items.map(item => (
              <li key={item.id} className="flex items-center justify-between py-2 border-b">
                <span>{item.text}</span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
}


export default List;