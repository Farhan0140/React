
const List = () => {
  const fruits = ["Apple", "Banana", "Pine Apple", "Orange", "Mango", "Grapes"];

  const HandleItemPrint = (item) => {
    console.log(item);
  }

  return (
    <>
      {/* onClick */
      /* <ul className="list-decimal pl-10 text-2xl">
        {fruits.map((fruit) => (    // If we use () bracket Then we don't need to use return statement
            <li onClick={ () => HandleItemPrint(fruit) } key={fruit}>{fruit}</li>
        ))}
      </ul> */}


      {/* onMouseEnter
      <ul className="list-decimal pl-10 text-2xl">
        {fruits.map((fruit) => (    // If we use () bracket Then we don't need to use return statement
            <li onMouseEnter={ () => HandleItemPrint(fruit) } key={fruit}>{fruit}</li>
        ))}
      </ul> */}


      onDoubleClick
      <ul className="list-decimal pl-10 text-2xl">
        {fruits.map((fruit) => (    // If we use () bracket Then we don't need to use return statement
            <li onDoubleClick={ () => HandleItemPrint(fruit) } key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
};

export default List;