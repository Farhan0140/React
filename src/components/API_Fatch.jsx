import { useEffect, useState } from "react";

const API_Fatch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  
  return (
    <div className="p-10">
      <ul className="list-disc">
        {users.map((user) => (
          <li key={user.id} className="mt-2">
            {user.name} 
            <br /> 
            <p> -- {user.address.city}</p> 
            <p> -- {user.address.street}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default API_Fatch;