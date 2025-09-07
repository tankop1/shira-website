import "./TextArea.css";

type TextAreaProps = {
  name?: string;
  children: React.ReactNode;
  placeholder?: string;
  style?: React.CSSProperties;
  required?: boolean;
};

function TextArea({
  name,
  children,
  placeholder,
  style,
  required = false,
}: TextAreaProps) {
  return (
    <div className="text-input" style={style}>
      <h6>{children}</h6>
      <textarea
        name={name}
        className="text-area-field card"
        placeholder={placeholder || ""}
        required={required}
      />
    </div>
  );
}

export default TextArea;
