import logo from "../../assets/imgs/logo.svg";
import { Button } from "antd";
import Style from "../nav/nav.module.css";

const Nav = () => {
  return (
    <header className={"nav " + Style.nav}>
      <section className="container w-100">
        <div className={Style.navflex}>
          <div className={Style.logo}>
            <img src={logo} alt="logo" />
          </div>

          <div className={Style.buttoncontainer}>
            <Button className={Style.signinbutton}> Sign in</Button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Nav;
