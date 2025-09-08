import { useState } from "react";

const Person = () => {

  // const [firstName, setFirstName] = useState("");   // This is not a good practice
  // const [lastName, setLastName] = useState("");     //

  const [person, setPerson] = useState({
    firstName: "Farhan",
    lastName: "Nadim",
    address: "Dhaka",
    phone: "123",
    email: "n@email.com",
  });

  const HandleChangeName = () => {
    // person.firstName = "Mr";
    // person.lastName = "Nadim";     // It's wont work because React-এ state immutable
    // setPerson(person);
    // Thats why we need ---->  Spread Operator

    const newPerson = {
      ...person,
      firstName: "Mr.",
      phone: "123456789"
    }

    setPerson(newPerson)
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold">Full Name: {person.firstName} {person.lastName}</h1>
      <h1> {person.address} </h1>
      <h1> {person.phone} </h1>
      <h1 className="mb-10"> {person.email} </h1>
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