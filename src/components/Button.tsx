import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  secondary?: boolean;
  handleClick?: () => void;
  isSubmit?: boolean;
  style?: React.CSSProperties;
};

function Button({
  children,
  secondary,
  handleClick,
  isSubmit,
  style,
}: ButtonProps) {
  return (
    <button
      className={secondary ? "secondary-button" : "primary-button"}
      style={style}
      onClick={handleClick}
      type={isSubmit ? "submit" : "button"}
    >
      <h5>{children}</h5>
    </button>
  );
}

export default Button;
