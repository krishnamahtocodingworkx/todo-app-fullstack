import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  console.log("login render");
  const navigate = useNavigate();
  const [foam, setFoam] = useState({
    email: "",
    password: "",
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFoam((prev) => ({ ...prev, [name]: value }));
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!foam.email || !foam.password) {
      alert("All fields must be filled !!!");
      return;
    }
    console.log("form data :", foam);
    LoginHandler();
  };

  const LoginHandler = async () => {
    const toastId = toast.loading("Login processing...");
    try {
      const res = await axios.post("http://localhost:9000/login", foam);
      console.log("Login Response :", res);
      const { success, msg, updatedUser } = res.data;
      toast.success(msg);
      if (success) {
        sessionStorage.setItem("token", updatedUser?.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Error in Login :", error);
    } finally {
      toast.dismiss(toastId);
    }
  };
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Box
        component={"form"}
        onSubmit={formSubmitHandler}
        sx={{
          p: "10% 30%",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography>Login Page </Typography>
        <TextField
          id="email"
          label="Enter email"
          name="email"
          value={foam.email}
          onChange={formHandler}
        />
        <TextField
          id="password"
          label="Enter password"
          name="password"
          value={foam.password}
          onChange={formHandler}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
