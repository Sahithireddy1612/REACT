//http://localhost:5000/users
import { useState } from "react";

const RegisterForm = () => {
  const [users, setUsers] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    userName: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsers({ ...users, [name]: value });
  };

  const validation = () => {
    let errors = {};
    if (users.userName.length > 10) {
      errors.userName = "USERNAME MUST BE LESS THAN 10 CHARACTERS!!";
    }
    if (users.password.length > 10) {
      errors.password = "PASSWORD MUST BE LESS THAN 10 CHARACTERS!!";
    }
    if (!users.email.includes("@")) {
      errors.email = "Invalid Email Address!!";
    }
    if (users.phoneNumber.length !== 10) {
      errors.phoneNumber = "PHONE NUMBER MUST BE 10 DIGITS";
    }
    if (users.firstName.length > 15) {
      errors.firstName = "FIRST NAME MUST BE LESS THAN 15 CHARACTERS";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validation();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
      serverCall(users);
    }
  };

  const serverCall = (userInfo) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo)
    })
      .then((res) => res.json())
      .then((response) => {
        setRegistrationMessage("REGISTRATION SUCCESSFUL");
      })
      .catch((error) => {
        setRegistrationMessage("REGISTRATION FAILED");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Register</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                    id="firstName"
                    name="firstName"
                    placeholder="Enter first name"
                    value={users.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value={users.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    type="text"
                    className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    value={users.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="userName">User Name:</label>
                  <input
                    type="text"
                    className={`form-control ${errors.userName ? "is-invalid" : ""}`}
                    id="userName"
                    name="userName"
                    placeholder="Enter user name"
                    value={users.userName}
                    onChange={handleChange}
                  />
                  {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={users.password}
                    onChange={handleChange}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                {registrationMessage && (
                  <div className={`alert ${registrationMessage.includes("SUCCESSFUL") ? "alert-success" : "alert-danger"}`}>
                    {registrationMessage}
                  </div>
                )}

                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
