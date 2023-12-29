import { useRef } from "react";
import "./Login.css";

const Login = ({login}) => {
const email = useRef()
const password = useRef()

  return (
    <div className="login-form-parent">
      <form className="login-form" onSubmit={() => login(email.current.value, password.current.value)}>
        <h2>Log In</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            ref={email}
            placeholder="Enter Your Email"
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            ref={password}
            maxLength={10}
            placeholder="Enter Your Password"
            className="form-control"
          ></input>
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-black">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
