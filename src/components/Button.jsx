
// eslint-disable-next-line react/prop-types
const Button = ({handleClick, children, bgColor="primary"}) => {
  
  const BtnColor = {
    primary: "bg-blue-500",
    success: "bg-green-500",
    danger: "bg-red-500",
    info: "bg-cyan-500",
    warning: "bg-yellow-500",
  }

  return (
    <>
      <button 
        className={`p-3 ${BtnColor[bgColor]} text-white font-bold text-xl m-5 rounded-2xl`}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;