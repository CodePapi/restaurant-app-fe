import logo from "../../assets/imgs/logo.svg";
import { Button } from "antd";
import Style from "../nav/nav.module.css";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { slide as Menu } from "react-burger-menu";

import {
  getProfile,
  getProfileCleanup,
} from "../../store/actions/getUserProfile";
import { useEffect, useState } from "react";
import Bookings from "../bookings";
const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setData] = useState(null);
  const profileState = useSelector((s) => s.getProfile);

  const Logout = (e) => {
    localStorage.clear();
    setData(null);
    navigate("/");
    e && e.preventDefault();
  };

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    if (profileState.isSuccessful) {
      setData(profileState.data);
      dispatch(getProfileCleanup());
    } else if (profileState.error) {
      dispatch(getProfileCleanup());
    }
  }, [profileState]);

  return (
    <header className={"nav " + Style.nav}>
      <section className="container w-100">
        <div className={Style.navflex}>
          <div className={Style.logo}>
            <img src={logo} alt="logo" />
          </div>

          <div className={Style.buttoncontainer}>
            {userData !== null ? (
              <>
                <div className="hidein">
                  <Bookings />
                </div>
                <Menu>
                  <a id="contact" onClick={(e)=>e.preventDefault()} className="menu-item" href="">
                    Welcome {userData?.username}{" "}
                  </a>
                  <a onClick={Logout} className="menu-item--small pl-5" href="">
                    Logout
                  </a>
                </Menu>
                <div style={{ width: "280px" }}></div>{" "}
                <div className="hider">
                  {" "}
                  Welcome {userData?.username} | <Bookings /> |
                  <Button onClick={() => Logout()} type="link">
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                {" "}
                <Button
                  onClick={() => navigate("/register")}
                  className={Style.signinbutton}
                >
                  {" "}
                  Sign in
                </Button>
                <Button onClick={() => navigate("/login")} type="link">
                  Login
                </Button>
              </>
            )}
          </div>
        </div>
      </section>
    </header>
  );
};

export default Nav;
