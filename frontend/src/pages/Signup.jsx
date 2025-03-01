import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [foam, setFoam] = useState({
    name: "",
    email: "",
    password: "",
  });
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFoam((prev) => ({ ...prev, [name]: value }));
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!foam.email || !foam.name || !foam.password) {
      alert("All fields must be filled !!!");
      return;
    }
    console.log("form data :", foam);
    signupHandler();
  };
  const signupHandler = async () => {
    try {
      const res = await axios.post("http://localhost:9000/signup", foam);
      console.log("Signup Response :", res);
    } catch (error) {
      console.log("Error in signup :", Signup);
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
        <Typography>Signup Page </Typography>
        <TextField
          id="name"
          label="Enter name"
          name="name"
          value={foam.name}
          onChange={formHandler}
        />
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
        <>
          <p>Already have account want to </p>
          <Button variant="outlined" onClick={() => navigate("/login")}>
            Login{" "}
          </Button>
        </>

        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </Box>
    </Box>
  );
};

export default Signup;
