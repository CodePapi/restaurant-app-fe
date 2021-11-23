import logo from "../../assets/imgs/logo.svg";
import Style from "./index.module.css";
const AuthFormContainer = ({ children, title, subtitle }) => {
  return (
    <div className={Style.container}>
      <section>
        <div className={Style.logosection}>
          <img src={logo} alt="logo" />
        </div>

        <div className={Style.formcont}>
          <div className={Style.titlediv}>
            <h2 className={Style.title}> {title}</h2>
            <h4 className={Style.subtitle}>{subtitle}</h4>
          </div>

          {children}
        </div>
      </section>
    </div>
  );
};

export default AuthFormContainer;
