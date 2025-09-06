import { CircleX } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const Alert = ({ color="primary", children, onClose }) => {

  const AlertStyle = {
    success: "bg-green-100 text-green-700 border border-green-500 hover:bg-green-200",
    primary: "bg-blue-100 text-blue-700 border border-blue-500 hover:bg-blue-200",
    danger: "bg-red-100 text-red-700 border border-red-500 hover:bg-red-200",
    info: "bg-cyan-100 text-cyan-700 border border-cyan-500 hover:bg-cyan-200",
    warning: "bg-yellow-100 text-yellow-700 border border-yellow-500 hover:bg-yellow-200"
  }

  return (
    <div className={`mt-5 ml-5 px-4 py-2 rounded-xl transition-all duration-300 w-1/2 flex items-center justify-between ${AlertStyle[color]}`}>
      <span>{children}</span>
      <button 
        onClick={ () => onClose() }
        className="cursor-pointer"
      >
        <CircleX className='text-red-400' />
      </button>
    </div>
  );
};

export default Alert;
