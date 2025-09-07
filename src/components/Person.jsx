import { useState } from "react";

const Person = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const HandleChangeName = () => {
    setFirstName("Farhan");
    setLastName("Nadim");

    // -> 
    console.log(firstName, lastName); // We can't find the updated value here because the state is asynchronous
  }

  return (
    <div className="p-10">
      <h1 className="mb-10 text-2xl font-semibold">Full Name: {firstName} {lastName}</h1>
      <button
        onClick={HandleChangeName}
        className="p-5 bg-blue-400 rounded-2xl"
      > 
        Change Name 
      </button>
    </div>
  );
};

export default Person;