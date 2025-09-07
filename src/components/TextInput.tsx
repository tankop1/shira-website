import "./TextInput.css";

type TextInputProps = {
  name?: string;
  children: React.ReactNode;
  placeholder?: string;
  style?: React.CSSProperties;
  required?: boolean;
};

function TextInput({
  name,
  children,
  placeholder,
  style,
  required = false,
}: TextInputProps) {
  return (
    <div className="text-input" style={style}>
      <h6>{children}</h6>
      <input
        name={name}
        type="text"
        className="text-input-field card"
        placeholder={placeholder || ""}
        required={required}
      />
    </div>
  );
}

export default TextInput;
