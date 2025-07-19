import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  secondary?: boolean;
  handleClick?: () => void;
  style?: React.CSSProperties;
};

function Button({ children, secondary, handleClick, style }: ButtonProps) {
  return (
    <button
      className={secondary ? "secondary-button" : "primary-button"}
      style={style}
      onClick={handleClick}
    >
      <h5>{children}</h5>
    </button>
  );
}

export default Button;
