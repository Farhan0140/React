
const List = () => {
  const fruits = ["Apple", "Banana", "Pine Apple", "Orange", "Mango", "Grapes"];

  return (
    <>
      <ul>
        {/* {fruits.map((fruit) => {
            return <li key={fruit}> {fruit} </li>
        })} */}

        {fruits.map((fruit) => (    // If we use () bracket Then we don't need to use return statement
            <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
};

export default List;