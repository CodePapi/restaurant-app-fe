import AuthFormContainer from "../../components/auth-form-container";
import Form from "./form";

const Register = () => {
  return (
    <AuthFormContainer subtitle={"Setup an account "} title={"Create Account"}>
      <Form />
    </AuthFormContainer>
  );
};

export default Register;
