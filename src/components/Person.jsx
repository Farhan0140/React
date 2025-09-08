import { useState } from "react";

const Person = () => {

  const [person, setPerson] = useState({
    firstName: "Farhan",
    lastName: "Nadim",
    phone: "123",
    email: "n@email.com",
    address: {
      city: "Mirpur",
      state: "Dhaka",
    }
  });

  const HandleChangeName = () => {

    // Update Person  & Add new Field
    const newPerson = {
        ...person,
        address: {
          ...person.address,
          city: "Dhanmondi",
        }
    }

    setPerson(newPerson)
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold">Full Name: {person.firstName} {person.lastName}</h1>
      <h1> {person.phone} </h1>
      <h1> {person.email} </h1>
      <h1> {person.department} </h1>
      <p className="mb-10"> {person.address.city}, {person.address.state} </p>
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