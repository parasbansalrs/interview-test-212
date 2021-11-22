import { useState, useEffect } from "react";
import "./styles.css";

const NEW_USER = { name: "Josh Grey" };

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  // TODO: Create a function to add NEW_USER in users state

  return (
    <div className="App">
      <ol>
        {users.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ol>

      {/* TODO: Add click handler here  */}
      <button>Add User</button>
    </div>
  );
}
