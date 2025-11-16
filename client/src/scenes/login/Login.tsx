import { useState, type FormEvent } from "react";
import { login, signup } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [signState, setSignState] = useState<"Sign In" | "Sign Up">("Sign In");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const user_auth = async (
    event: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Authentication failed!");
    }

    setLoading(false);
  };

  return loading ? (
    <div className="login-spinner">
      <h2 style={{ color: "white" }}>Loading...</h2>
    </div>
  ) : (
    <div className="login">
      <div className="login-form">
        <h1>{signState}</h1>

        <form onSubmit={user_auth}>
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <button type="submit">{signState}</button>

          {/* ❌ Removed Remember Me section */}

          <p className="help-text">Need Help?</p>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New here?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
