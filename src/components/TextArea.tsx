import "./TextArea.css";

type TextAreaProps = {
  children: React.ReactNode;
  placeholder?: string;
  style?: React.CSSProperties;
  required?: boolean;
};

function TextArea({
  children,
  placeholder,
  style,
  required = false,
}: TextAreaProps) {
  return (
    <div className="text-input" style={style}>
      <h6>{children}</h6>
      <textarea
        className="text-area-field card"
        placeholder={placeholder || ""}
        required={required}
      />
    </div>
  );
}

export default TextArea;
