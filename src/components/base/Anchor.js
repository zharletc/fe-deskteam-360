const Anchor = ({
  children,
  variant = "primary-solid",
  className = "",
  ...props
}) => {
  const baseClass =
    "flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-semibold transition-colors";
  const variantClass =
    variant === "primary-solid" ? "bg-red-500 hover:bg-red-600 text-white" : "";

  return (
    <a className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </a>
  );
};

export default Anchor;
