
const Cart = ({ cartItem, onClear, OnRemove }) => {
  return (
    <div className="pl-10">
      <ul className="list-disc p-5 pb-10">
        {cartItem.map((item, index) => (
          <li 
            className="cursor-pointer"
            key={index}
            onClick={() => OnRemove(item)}
          > 
            {item} 
          </li>
        ))}
      </ul>

      <button 
        className="btn_shadow p-3 rounded-2xl"
        onClick={onClear}
      >
        Remove All
      </button>
    </div>
  );
};

export default Cart;