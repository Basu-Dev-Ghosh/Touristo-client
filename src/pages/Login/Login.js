import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { serverLink } from "../../App";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Password: "",
  });

  //Handling user inputs...
  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  // Adding user to Database..

  const signupUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${serverLink}api/signup`, user, {
        withCredentials: true,
      });
      if (res.status === 200) {
        setUser({
          Name: "",
          Email: "",
          Password: "",
          CPassword: "",
        });
        navigate('/')
      }
    } catch (err) {
      const data = err.data;
      alert(data.msg);
    }

  };

  // Log in user functionality...
  const loginUser = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post(`${serverLink}api/login`, user, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 200) {
        navigate('/');
      }
    } catch (err) {
      const data = err.data;
      alert(data.msg);
    }

  };







  return (
    <>
      <Navbar />
      <div
        className="login container"
        style={{
          width: "100%",
          height: "60vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div style={{ width: "400px", padding: "20px" }}>
          {/* Pills navs */}
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="tab-login"
                data-mdb-toggle="pill"
                href="#pills-login"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"

              >
                Login
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="tab-register"
                data-mdb-toggle="pill"
                href="#pills-register"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
              >
                Register
              </a>
            </li>
          </ul>
          {/* Pills navs */}
          {/* Pills content */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form onSubmit={loginUser}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" required id="loginName" className="form-control" name="Email" onChange={handleUserInput} />
                  <label className="form-label" htmlFor="loginName">
                    Email
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    required
                    id="loginPassword"
                    className="form-control"
                    name="Password" onChange={handleUserInput}
                  />
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  style={{ padding: "9px", backgroundColor: "#000", color: "#fff", border: "0" }}
                >
                  Sign in
                </button>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="pills-register"
              role="tabpanel"
              aria-labelledby="tab-register"
            >
              <form onSubmit={signupUser}>
                {/* Name input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    required
                    id="registerName"
                    className="form-control"
                    name="Name" onChange={handleUserInput}
                  />
                  <label className="form-label" htmlFor="registerName">
                    Name
                  </label>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    required
                    id="registerEmail"
                    className="form-control"
                    name="Email" onChange={handleUserInput}
                  />
                  <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    required
                    id="registerEmail"
                    className="form-control"
                    name="Phone" onChange={handleUserInput}
                  />
                  <label className="form-label" htmlFor="registerEmail">
                    Phone
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    required
                    id="registerPassword"
                    className="form-control"
                    name="Password" onChange={handleUserInput}
                  />
                  <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  style={{ padding: "9px", backgroundColor: "#000", color: "#fff", border: "0" }}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
          {/* Pills content */}
        </div>
      </div>
    </>
  );
};

export default Login;
