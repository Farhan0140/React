import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CartApp = () => {

  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [cart, setCart] = useState([]);

  // Adding Item
  const addItem = ( data ) => {
    const isExist = cart.find((item) => item.name === data.productName);

    if( isExist ) {
      setCart( cart.map((item) => item.name === data.productName ? {...item, quantity: item.quantity += 1} : item) );
    } else {
      setCart([...cart, {name:data.productName, price:parseFloat(data.productPrice), quantity: 1}])
    }

  }


  // Updating Items
  const increaseQuantity = (product_name) => {
    setCart(cart.map((item) => item.name === product_name ? {...item, quantity: item.quantity + 1} : item ));
  }

  const decreaseQuantity = (product_name) => {
    setCart(cart.map(item => item.name === product_name ? {...item, quantity: item.quantity - 1} : item).filter(item => item.quantity > 0));
  }


  // Remove Item from cart
  const removeItem = (product_name) => {
    setCart(cart.filter((item) => item.name !== product_name));
  }


  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="rounded-2xl w-1/2 m-auto bg-gray-200 p-5 mt-10">
      <form 
        onSubmit={ handleSubmit( addItem ) }
        className="font-bold text-xl"
      >
        <div>
          <input 
            {...register("productName", {required: true, minLength: 5})}
            type="text"
            placeholder="Enter Product Name"
            className="bg-white w-full my-2 focus:outline-none focus:ring ring-stone-500 p-5 rounded-2xl" 
          />
          { errors.productName?.type === "required" && <span className="text-red-500 font-semibold block mb-3">● Please Fill This Field</span>}
          { errors.productName?.type === "minLength" && <span className="text-red-500 font-semibold block mb-3">● Product Name must be 5 characters long</span>}
        </div>

        <div>
          <input 
            {...register("productPrice", {required:true, min:0} )}
            type="number"
            step="any"
            placeholder="Enter Product Price"
            className="bg-white w-full my-2 focus:outline-none focus:ring ring-stone-500 p-5 rounded-2xl"
          />
          { errors.productPrice?.type === "required" && <span className="text-red-500 font-semibold block mb-3">● Please Fill This Field</span>}
          { errors.productPrice?.type === "min" && <span className="text-red-500 font-semibold block mb-3">● Product Price must be positive</span>}
        </div>

        <button 
          type="submit"
          className="w-full mb-4 bg-blue-500 text-white p-3 rounded-2xl hover:bg-blue-400 mt-5"
        >
          Add Product
        </button>
      </form>

      {(cart.length <= 0) ? (
        <div className="font-semibold text-lg">No Cart Items</div>
      ) : (
        <>
          <hr />

          <div>
            { cart.map((product, index) => (
              <div key={index} className="flex justify-between bg-white gap-3 p-3 my-3 rounded-xl">
                <div className="flex items-center justify-between w-2/3">
                  <h1 className="font-semibold text-lg">{product.name}</h1>
                  <p className="text-lg font-semibold text-gray-600">{(product.price * product.quantity).toFixed(2)}</p>
                </div>
                <div className="flex w-1/3 justify-around items-center border-l">
                  <div className="flex items-center">
                    <button 
                      onClick={() => decreaseQuantity(product.name)}
                      className="bg-red-500 hover:bg-red-600 py-1 rounded-lg text-white"
                    >
                      <Minus />
                    </button>
                    <h1 className="font-semibold text-2xl mx-2">{product.quantity}</h1>
                    <button 
                      onClick={() => increaseQuantity(product.name)}
                      className="bg-green-500 hover:bg-green-600 py-1 rounded-lg text-white"
                    >
                      <Plus />
                    </button>
                  </div>
                  <div 
                    onClick={() => removeItem(product.name)}
                    className="text-red-500 hover:text-red-600 bg-red-100 hover:bg-red-200 p-1 rounded-lg"
                  >
                    <Trash2 />
                  </div>
                </div>
              </div>
            )) }
          </div>

          <div className="flex items-center mt-8">
            <h1 className="font-bold text-lg mr-3">Total Price:</h1>
            <span className="text-lg font-semibold">{totalPrice}</span>
            <span className="text-lg text-gray-500 font-extrabold ml-1">৳</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CartApp;