import './App.css'
import Just_Test from './components/just_test'
import List from './components/List_Using_Map'
import Button from './components/Button';


function App() {
  const fruits = ["Apple", "Banana", "Pine Apple", "Orange", "Mango", "Grapes"];
  const products = ["Mobile", "Clock", "Book", "Pen", "Note Book", "Calculator"];

  const handleClick = () => console.log("Button Clicked");

  return (
    
    <>
      {/* <List items={fruits} listName={"Fruits"}></List>
      <List items={products} listName={"Products"} />
      <Just_Test name="Nadim" age={23} /> */}

      <Button handleClick={handleClick} bgColor={"danger"}>Click Me</Button>
    </>
  )
}

export default App
