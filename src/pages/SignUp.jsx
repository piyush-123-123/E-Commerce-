import {Link,useHistory} from "react-router-dom";
import {useRef} from "react";



const SignUp=()=>{

    const history=useHistory();

    const emailRef=useRef("");
    const passwordRef=useRef("");

    const signUpHandler=async (e)=>{

        e.preventDefault();

        const enteredEmail=emailRef.current.value;
        const enteredPassword=passwordRef.current.value;
       try{
        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOusCY-amGR3fTRaS8yq9GTm93N7RJbTk",
            {
                method : "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:enteredEmail,
                    password : enteredPassword,
                    returnSecureToken:true
                })

            }
        )
        const data=await response.json();
        if(!response.ok){
            throw new Error(data.error.message);
        }
        alert("Account Created Successfully");
        history.replace("/login");
    }
    catch(err){
        alert(err.message);
    }
    
    }

    return (

 <div className="container mt-3" style={{ maxWidth: "400px" }}>
    <h2 className="mb-4">Sign Up</h2>

    <form onSubmit={signUpHandler}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-control"
          ref={emailRef}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          ref={passwordRef}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Sign Up
      </button>
    </form>

    <p className="mt-3 text-center">
      Already have an account?{" "}
      <Link to="/login">Login</Link>
    </p>
  </div>
    )

}
export default SignUp;