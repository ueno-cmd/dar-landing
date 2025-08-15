const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, ...props }) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-500',
    secondary: 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 focus:ring-gray-500',
    outline: 'bg-transparent hover:bg-orange-50 text-orange-600 border-2 border-orange-500 focus:ring-orange-500'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const variantStyles = variants[variant] || variants.primary
  const sizeStyles = sizes[size] || sizes.md
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button