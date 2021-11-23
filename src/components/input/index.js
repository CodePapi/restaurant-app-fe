import Style from "./index.module.css";

const Input = ({ type, placeholder, setValue }) => {
  return (
    <div className={Style.inputdiv}>
      <input onChange={(e)=>setValue(e.target.value)} placeholder={placeholder} type={type} className={Style.input} />
    </div>
  );
};

export default Input;
