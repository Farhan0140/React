import { useState } from "react";

const Person = () => {

  const [person, setPerson] = useState({
    firstName: "Farhan",
    lastName: "Nadim",
    address: "Dhaka",
    phone: "123",
    email: "n@email.com",
  });

  const HandleChangeName = () => {

    // Update Person  & Add new Field
    const newPerson = {
        ...person,
        firstName: "Mr.",
        phone: "123456789",
        department: "CSE",    // Added new field to person, 
    }

    setPerson(newPerson)
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold">Full Name: {person.firstName} {person.lastName}</h1>
      <h1> {person.address} </h1>
      <h1> {person.phone} </h1>
      <h1> {person.email} </h1>
      <h1 className="mb-10"> {person.department} </h1>
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