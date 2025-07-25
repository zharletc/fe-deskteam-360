const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseClass = "px-6 py-2 rounded";
  const variantClass =
    variant === "primary"
      ? "bg-red-500 hover:bg-red-600"
      : "border border-black text-black hover:bg-gray-100";

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
