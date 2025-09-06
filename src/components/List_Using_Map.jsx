import { useState } from "react";

const List = ({items=[], listName}) => {
  

  const [selectedIndex, setSelectedIndex] = useState(-1);
  console.log(useState(-1));

  return (
    <>
      <h1 className="font-bold text-3xl my-5">{listName}</h1>
      <ul className="list-decimal pl-10 text-2xl">
        {items.map((fruit, index) => (
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