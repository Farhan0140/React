import { useState } from "react";

const Employee = () => {

  const Employee_Arr = [
    {name: "Farhan", age: 20},
    {name: "Nadim", age: 16},
    {name: "Fardin", age: 34}
  ];
  
  const [employee, setEmployee] = useState(Employee_Arr);

  const handleEmployeeAge = () => {
    setEmployee(employee.map((emp) => (emp.name === "Nadim") ? {...emp, age: 30} : emp));
  }


  return (
    <div className="p-10">

      <ul className="mb-10 list-disc ml-5">
        {employee.map( (emp, index) => 
            <li key={index}> <span className="font-bold">Name:</span> {emp.name}, <span className="font-bold">Age: </span> {emp.age}</li>
        )}
      </ul>

      <button
        className="btn_shadow p-5 rounded-xl"
        onClick={handleEmployeeAge}
      >
        Update Age
      </button>
    </div>
  );
};

export default Employee;