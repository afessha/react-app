//DRY Do not repeat yourself
const LableWithInput = (props) => {
  const { name, placeholder, type = "text", onChange, value } = props;
  const handleChange = (event)=>{
      onChange(event.target.name, event.target.value);
  }
  return (
    <div>
      <label htmlFor={name}>  {placeholder}</label>
      <input value = {value} onChange = {handleChange} name={name} type={type} placeholder={placeholder} required />
    </div>
  );
};
export default LableWithInput;
