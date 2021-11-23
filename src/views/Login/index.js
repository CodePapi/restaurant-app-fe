import AuthFormContainer from "../../components/auth-form-container";
import Form from "./form";

const Register = () => {
  return (
    <AuthFormContainer subtitle={"Login "} title={"Welcome back!"}>
      <Form />
    </AuthFormContainer>
  );
};

export default Register;
