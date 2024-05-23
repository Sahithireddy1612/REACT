import { useState } from "react";

const LoginForm2 = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [login, setLogin] = useState(false);

  const userNameHandler = (event) => {
    const username = event.target.value;
    setUserName(username);

    if (username.length > 15) {
      setUsernameError("Please enter less than 15 characters");
    } else {
      setUsernameError("");
    }
  };

  const passwordHandler = (event) => {
    const password = event.target.value;
    setPassword(password);
    if (password.length > 10) {
      setPasswordError("Password must be less than 10 characters");
    } else {
      setPasswordError("");
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      username: userName,
      password: password,
    };

    serverCall(userInfo);
  };

  const serverCall = (userInfo) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) {
          setLoginErrorMessage(response.message);
        } else {
          alert("Login successful");
          setLoginErrorMessage("");
          setLogin(true);
        }
      });
  };

  return (
    <>
      {login ? (
        <div className="container mt-5">
          <div className="alert alert-success" role="alert">
            <h2>Welcome, {userName}!</h2>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                  <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="username">Username:</label>
                      <input
                        type="text"
                        className={`form-control ${usernameError ? "is-invalid" : ""}`}
                        id="username"
                        placeholder="Enter username"
                        value={userName}
                        onChange={userNameHandler}
                      />
                      {usernameError && (
                        <div className="invalid-feedback" >{usernameError}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="password"style={{ marginTop: "25px" }}>Password:</label>
                      <input
                        type="password"
                        className={`form-control ${passwordError ? "is-invalid" : ""}`}
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={passwordHandler}
                      />
                      {passwordError && (
                        <div className="invalid-feedback">{passwordError}</div>
                      )}
                    </div>

                    {loginErrorMessage && (
                      <div className="alert alert-danger" style={{ marginBottom: "15px" }}>
                        {loginErrorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={usernameError || passwordError}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm2;
