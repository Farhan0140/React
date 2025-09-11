
const CartNavBar = ({ ProductCount }) => {
  return (
    <div className="pl-10 mb-10">
      <h1 className="font-bold text-3xl p-5 text-black border-dotted border-4 inline">
        {ProductCount}
      </h1>
    </div>
  );
};

export default CartNavBar;