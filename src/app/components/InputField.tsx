interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  style?: object;
}

const InputField = ({ value, onChange, placeholder, style }: InputFieldProps) => {
  return (
    <input
      className='task-input'
      type='text'
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      style={style}
    />
  );
};

export default InputField;
