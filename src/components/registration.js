import { useRef } from "react";
import "./Registration.css";

const Registration = ({register,loginButton}) => {
const name = useRef()
const email = useRef()
const phone_number = useRef()
const password = useRef()

  return (
    <div className="login-form-parent">
      <form className="login-form" onSubmit={() => register(
        name.current.value,
        email.current.value,
        phone_number.current.value,
        password.current.value
      )}>
        <h2>Registration</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            ref={name}
            placeholder="Enter Your Name"
            className="form-control"
          ></input>
        </div>
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
          <label>Phone Number</label>
          <input
            type="phone"
            ref={phone_number}
            maxLength={10}
            placeholder="Enter Your Phone Number"
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
          Submit
        </button>
        <button type="button" className="btn btn-link btn-sm text-dark" onClick={loginButton}>Already have account? Login</button>
      </form>
     </div>
  );
};

export default Registration;
