import { useRef } from "react";

const User_Input = () => {

  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const person = {
    name: "",
    age: 0
  }

  const HandleSubmit = (event) => {
    event.preventDefault();
    
    if(nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if(ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
    }

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
            ref={nameRef}
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
            ref={ageRef}
            id="age" 
            type="number" 
            placeholder="Enter Your Name" 
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

export default User_Input;