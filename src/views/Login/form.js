import Style from "./index.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/input";
import AuthButton from "../../components/auth-button";
import { login, loginCleanup } from "../../store/actions/login";
import { getProfileCleanup, getProfile } from "../../store/actions/getUserProfile";
import { Alert, message } from "antd";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const loginState = useSelector((s) => s.login);
  const profileState = useSelector(p=>p.getProfile)
  const datafun = (data) => {
    if (
      data.username.trim().length > 2 &&
      data.password.trim().length > 5
    ) {
      dispatch(login(data));
      setError(false);
    } else setError(true);
  };

  const getUserName = (e) => {
    setUserName(e);
  };
  const getUserPassword = (e) => {
    setPassword(e);
  };

  useEffect(() => {
    if (loginState.isSuccessful) {
      dispatch(getProfile())
      message.success(
         " Your login was successful"
      );
      navigate("/");
      dispatch(loginCleanup());
      dispatch(getProfileCleanup())
    } else if (loginState.error) {
      message.error("Username or password does not match");
      dispatch(loginCleanup());
      dispatch(getProfileCleanup())
    }
  }, [loginState]);
  return (
    <section>
      <section className={Style.form}>
        {error ? (
          <Alert
            type="error"
            message="username must be above 2 characters and password must be above 5 characters"
          />
        ) : null}
        <div>
          <Input setValue={getUserName} type="text" placeholder={"username"} />
          <Input
            setValue={getUserPassword}
            type="password"
            placeholder={"password"}
          />
          <AuthButton
            disabled={loginState.isLoading}
            dataFunc={datafun}
            data={{ password: password, username:userName }}
            title={loginState.isLoading ? "Loading..." : "Login"}
          />
        </div>
      </section>
    </section>
  );
};

export default Form;
