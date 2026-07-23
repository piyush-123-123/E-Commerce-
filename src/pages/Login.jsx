import { useRef ,useContext} from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../components/store/AuthContext";
import {Link} from "react-router-dom";

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
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOusCY-amGR3fTRaS8yq9GTm93N7RJbTk",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }
    console.log("Entered Email:", enteredEmail);
    ctx.login(data.idToken,enteredEmail);
    
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