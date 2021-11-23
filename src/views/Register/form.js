import Style from "./index.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/input";
import AuthButton from "../../components/auth-button";
import { signUp, signUpCleanup } from "../../store/actions/signup";
import mailformat from "../../utils/email-regex";
import { Alert, message } from "antd";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const signupState = useSelector((s) => s.signUp);
  const datafun = (data) => {
    if (
      mailformat.test(data.email) &&
      data.username.trim().length > 2 &&
      data.password.trim().length > 5
    ) {
      dispatch(signUp(data));
      setError(false);
    } else setError(true);
  };

  const getUserName = (e) => {
    setUserName(e);
  };
  const getUserEmail = (e) => {
    setEmail(e);
  };
  const getUserPassword = (e) => {
    setPassword(e);
  };

  useEffect(() => {
    if (signupState.isSuccessful) {
      message.success(
        signupState.data.message + " You can now login to book restaurants"
      );
      navigate("/");
      dispatch(signUpCleanup());
    } else if (signupState.error) {
      message.error("Username or email already exists");
      dispatch(signUpCleanup());
    }
  }, [signupState]);
  return (
    <section>
      <section className={Style.form}>
        {error ? (
          <Alert
            type="error"
            message="Email must be in the correct format, username must be above 2 characters and password must be above 5 characters"
          />
        ) : null}
        <div>
          <Input setValue={getUserName} type="text" placeholder={"username"} />
          <Input setValue={getUserEmail} type="email" placeholder={"email"} />
          <Input
            setValue={getUserPassword}
            type="password"
            placeholder={"password"}
          />
          <AuthButton
            disabled={signupState.isLoading}
            dataFunc={datafun}
            data={{ username: userName, email: email, password: password }}
            title={signupState.isLoading ? "Loading..." : "Create Account"}
          />
        </div>
      </section>
    </section>
  );
};

export default Form;
