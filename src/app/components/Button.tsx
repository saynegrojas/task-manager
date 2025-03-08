interface ButtonProps {
  disabled?: boolean;
  onClick: () => void;
  style?: object;
  label: string;
}

const Button = ({ disabled, onClick, style, label }: ButtonProps) => {
  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
