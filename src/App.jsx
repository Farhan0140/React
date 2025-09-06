import './App.css'
import Just_Test from './components/just_test'
import List from './components/List_Using_Map'

function App() {
  const fruits = ["Apple", "Banana", "Pine Apple", "Orange", "Mango", "Grapes"];
  const products = ["Mobile", "Clock", "Book", "Pen", "Note Book", "Calculator"];

  return (
    
    <>
      <List items={fruits} listName={"Fruits"}></List>
      <List items={products} listName={"Products"} />
      <Just_Test name="Nadim" age={23} />
    </>
  )
}

export default App
