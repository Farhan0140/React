import { useState } from "react";

const List = () => {
  const fruits = ["Apple", "Banana", "Pine Apple", "Orange", "Mango", "Grapes"];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  console.log(useState(-1));

  // let selectedIndex = -1;

  // const HandleItemStyle = (item, index) => {
  //   selectedIndex = index;
  //   console.log(item, index);
  // }

  return (
    <>
      <ul className="list-decimal pl-10 text-2xl">
        {fruits.map((fruit, index) => (
          <li 
            className = {selectedIndex === index ? "bg-cyan-300 rounded-xl w-1/6 p-2 text-black" : ""} 
            onClick={ () => setSelectedIndex(index) } 
            key={fruit}
          >
            {fruit}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;