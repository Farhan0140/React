import axios from "axios";
import { useEffect, useState } from "react";

const API_Fatch = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res => res.json())
  //     .then(data => setUsers(data))
  // }, []);


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(data => setUsers(data.data))
    .catch(error => setError(error))
  }, []);
  
  return (
    <div className="p-10">
      
      {(error) && <span className="bg-red-100 text-red-800 p-3 rounded-2xl"> {error.message} </span>}

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