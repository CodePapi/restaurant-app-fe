import Style from "./index.module.css";

const AuthButton = ({ title, data, dataFunc, disabled }) => {
  return (
    <div className={Style.inputdiv}>
      <button
        disabled={disabled}
        onClick={() => dataFunc(data)}
        className={Style.button}
      >
        {title}
      </button>
    </div>
  );
};

export default AuthButton;
