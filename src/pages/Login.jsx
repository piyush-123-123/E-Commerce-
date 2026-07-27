import { useRef, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const ctx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    try {
      await ctx.login(enteredEmail, enteredPassword);

      history.replace("/store");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Login</h2>

      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            ref={emailRef}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            ref={passwordRef}
            required
          />
        </div>

        <button className="btn btn-primary w-100">
          Login
        </button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;