import { Trash } from "lucide-react";
import { useEffect, useState } from "react";

const Team = () => {

  useEffect(() => {
    fetch("./public/experts.json")
    .then(res => res.json())
    .then(data => setMembers(data))
  }, []);

  const [ members, setMembers ] = useState([]);
  const [hiredEmployee, setHiredEmployee] = useState([]); 

  const addEmployee = (Employee) => {
    const isEmployeeExist = hiredEmployee.find((emp => emp.name === Employee.name));

    console.log(isEmployeeExist);

    if(isEmployeeExist === undefined) {
      setHiredEmployee([...hiredEmployee, Employee]);
    }
  };

  const removeEmployee = (empName) => {
    setHiredEmployee(hiredEmployee.filter(emp => emp.name !== empName));
  }

  const total_cost = hiredEmployee.reduce((money, employee) =>  money + employee.salary , 0);
  const total_budget = 1000000;

  return (
    <div className=" w-5/6 m-auto">
      <div className="bg-gray-400 h-50 mt-10 rounded-2xl text-white">
        <div className="">
          <h1 className="text-center font-bold text-5xl p-5">Make a Cyber Security Team</h1>
          <h1 className="text-center text-2xl">Our Server is under attack so we need to hire special cyber security team</h1>
          <h1 className="text-center font-semibold text-3xl p-3">Total Budget: <span className="font-bold text-gray-700">10 Million</span> </h1>
        </div>
      </div>

      <div className="flex gap-x-3 my-10">
        <div className="bg-gray-400 w-2/3 rounded-2xl flex flex-wrap justify-around gap-y-4 p-3">
          {
            members.map((person) => (
              <div key={person.id} className="bg-gray-100 w-[230px] rounded-2xl shadow-lg shadow-gray-500 h-90">
                <div className="flex items-center justify-center">
                  <img 
                    className="border w-25 h-25 rounded-full text-center mt-5" 
                    src={person.img} 
                    alt="person Image" 
                  />
                </div>
                <h1 className="text-center font-bold text-2xl mt-5">{person.name} ({person.age})</h1>
                <h4 className="text-center font-semibold">{person.designation}</h4>
                <h6 className="text-center mt-5 text-xl">{person.address}</h6>
                <h2 className="text-center text-xl font-semibold mt-3">{person.salary} $</h2>
                <div className="flex items-center justify-center">
                  <button 
                    onClick={() => addEmployee(person)}
                    className="w-5/6 mt-2 text-xl border p-3 rounded-lg hover:bg-blue-500 transition-all duration-500 hover:text-white"
                  >
                    Hire Now
                  </button>
                </div>
              </div>
            ))
          }
        </div>

        <div className="bg-gray-400 w-1/3 max-h-min rounded-xl sticky top-10">
          <h1 
            className="m-3 font-bold text-2xl text-gray-800"
          >
            Expert Added: {hiredEmployee.length}
          </h1>
          <h1 
            className="m-3 font-bold text-2xl text-gray-800"
          >
            Total Cost: <span className={`${total_cost > total_budget ? "text-red-700" : "text-gray-700"}`}>{total_cost}</span>
          </h1>

          {
            hiredEmployee.map((emp) => (
              <div key={emp.id} className="bg-gray-100 shadow-lg shadow-gray-500 rounded-lg m-2 flex items-center gap-4">
                <img 
                  src={emp.img} 
                  alt="person_image"
                  className="w-20 h-20 rounded-full m-2" 
                />
                <div className="flex items-center justify-between pr-3 w-full">
                  <h1 className="text-2xl">{emp.name}</h1>
                  <button onClick={() => removeEmployee(emp.name)}>
                    <Trash className="hover:text-red-500" />
                  </button>
                </div>
              </div>
            ))
          }

          <div className=" my-4 flex items-center justify-center">
            <button 
              className="text-xl bg-gray-700 text-white w-[95%] p-3 rounded-lg hover:bg-gray-600 transition-all duration-500 hover:text-white"
            >
              Confirm List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;