import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  secondary?: boolean;
  style?: React.CSSProperties;
};

function Button({ children, secondary, style }: ButtonProps) {
  return (
    <button
      className={secondary ? "secondary-button" : "primary-button"}
      style={style}
    >
      <h5>{children}</h5>
    </button>
  );
}

export default Button;
