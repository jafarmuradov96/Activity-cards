
const Button = ({ children, color = 'blue', size = 'medium', onClick, disabled = false, className = '' }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-[20px]',
    large: 'px-6 py-3 text-lg'
  };

  const colorStyles = {
    blue: 'text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-500',
    red: 'text-white bg-red-500 hover:bg-red-600 focus:ring-red-500',
    green: 'text-white bg-green-500 hover:bg-green-600 focus:ring-green-500',
    gray: 'text-buttonSecondary bg-gray-500 hover:bg-gray-600 focus:ring-gray-500'
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[color]} ${disabled ? disabledStyles : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={{borderRadius: '8px'}}
    >
      {children}
    </button>
  );
};



export default Button;
