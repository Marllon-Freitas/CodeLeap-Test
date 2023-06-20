import { LoginWrapper, LoginContent } from "./styled";
import { Button } from "../../components/BaseButton";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm();
  const watchUsername = watch("username");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("username", data.username);
    navigate("/home");
  };

  return (
    <LoginWrapper>
      <LoginContent>
        <h1>Welcome to CodeLeap network!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-area">
            <label htmlFor="username">Please enter your username</label>
            <input
              type="text"
              placeholder="Jhon Doe"
              id="username"
              {...register("username", { required: true })}
            />
          </div>
          <Button
            actiontype="primary"
            isDisabled={watchUsername ? false : true}
          >
            Enter
          </Button>
        </form>
      </LoginContent>
    </LoginWrapper>
  );
}

export default Login;
