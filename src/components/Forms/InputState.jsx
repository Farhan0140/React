import { useState } from "react";

const InputState = () => {

  const personObj = {
    name: "",
    age: ""
  }

  const [person, setPerson] = useState(personObj);

  const HandleSubmit = (event) => {
    event.preventDefault();

    console.log(person);
  }

  return (
    <div className="p-10 w-1/2 m-auto">
      <form onSubmit={HandleSubmit}>
        <div>
          <label 
            htmlFor="name"
          >
            Name
          </label>
          <input
            onChange={(event) => { setPerson( {...person, name:event.target.value} )}}
            value={person.name}
            id="name" 
            type="text" 
            placeholder="Enter Your Name" 
            className="p-3 border rounded-xl w-full my-2 focus:outline-none focus:ring-1 focus:border-none focus:ring-blue-600"
          />
        </div>

        <div>
          <label 
            htmlFor="age"
          >
            Age
          </label>
          <input
            onChange={(event) => { setPerson( {...person, age:event.target.value} )}}
            value={person.age}
            id="age" 
            type="number" 
            placeholder="Enter Your age" 
            className="p-3 border rounded-xl w-full my-2 focus:outline-none focus:ring-1 focus:border-none focus:ring-blue-600"
          />
        </div>

        <button
          type="submit"
          className="btn-shadow p-3 rounded-2xl bg-blue-500 text-white font-bold w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputState;