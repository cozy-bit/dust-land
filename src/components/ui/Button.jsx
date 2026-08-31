export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "relative font-bold uppercase transition-all duration-200 cursor-pointer text-center select-none flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 text-white shadow-[0_0_25px_rgba(249,115,22,0.45)] hover:brightness-110 [clip-path:polygon(12px_0,100%_0,calc(100%-12px)_100%,0_100%)]",
    secondary: "bg-zinc-800/80 border border-zinc-700 text-zinc-200 hover:bg-zinc-700/80 [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
};
