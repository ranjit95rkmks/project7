/* eslint-disable react/prop-types */


function List({ items, handleDelete }) {
  return (
    <div className="container mx-auto px-4 mt-8">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Message</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {items !== null ? (
            items.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.message}</td>
                <td className="">
                  <button onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border px-4 py-2" colSpan="4">
                No items to display.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
