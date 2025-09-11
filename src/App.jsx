import { useState } from "react"
import Cart from "./components/Cart"
import CartNavBar from "./components/CartNavBar"

function App() {

  const [cartItem, setCartItem] = useState(["Mobile", "Pen", "Laptop", "Mouse", "Key-board", "Headphone"]);

  const HandleRemoveItem = ( item ) => {
    setCartItem(cartItem.filter(product => product != item));
  }
  
  return (
    <div>
      <CartNavBar ProductCount={cartItem.length} />
      <Cart 
        cartItem={cartItem} 
        onClear={() => setCartItem([])} 
        OnRemove={HandleRemoveItem} 
      />
    </div>
  )
}

export default App
