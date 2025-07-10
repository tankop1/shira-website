import "./ArrowButton.css";
import Arrow from "../assets/Arrow.png";

type ArrowButtonProps = {
  style?: React.CSSProperties;
  left?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function ArrowButton({ style, left, onClick }: ArrowButtonProps) {
  return (
    <button className="arrow-button" style={style} onClick={onClick}>
      <img src={Arrow} alt="Arrow Icon" className={left ? "left" : "right"} />
    </button>
  );
}

export default ArrowButton;
