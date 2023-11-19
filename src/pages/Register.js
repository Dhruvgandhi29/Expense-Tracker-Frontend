import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/RegisterPage.css";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post(
        "https://expense-tracker-backend-d36b.onrender.com/api/v1/users/register",
        values
      );
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="register-page ">
        {loading && <Spinner />}
        <Form
          className="register-form"
          layout="vertical"
          onFinish={submitHandler}
        >
          <h2>Registeration Form</h2>
          <Form.Item
            label={<span style={{ fontSize: "1.5em" }}>Name</span>}
            name="name"
          >
            <Input type="text" required />
          </Form.Item>
          <Form.Item
            label={<span style={{ fontSize: "1.5em" }}>Email</span>}
            name="email"
          >
            <Input type="email" required />
          </Form.Item>
          <Form.Item
            label={<span style={{ fontSize: "1.5em" }}>Password</span>}
            name="password"
          >
            <Input type="password" required />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login" style={{ fontSize: "1.5em" }}>
              Already Registered? login here!
            </Link>
            <button className="btn ">Register</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
