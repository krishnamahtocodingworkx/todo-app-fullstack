import React, { useState } from "react";

const Practice = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    const datToSave = { ...loginForm, [name]: value };
    setLoginForm(datToSave);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    /***
     * add validation
     */
    console.log(loginForm);
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Login Form</h1>
      <form className="practice--form" onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={loginForm.name}
          onChange={formHandler}
          className="input-field"
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={loginForm.email}
          onChange={formHandler}
          className="input-field"
        />
        <label htmlFor="email">Email</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={loginForm.password}
          onChange={formHandler}
          className="input-field"
        />
        <button type="submit" className="input-field">
          Login
        </button>
      </form>
    </div>
  );
};

export default Practice;
