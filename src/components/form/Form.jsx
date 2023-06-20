import React, { useState } from "react";
import classes from "./Form.module.css";

//const ariaLabel = { "aria-label": "description" };
const Form = () => {
  const [userEmail, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = function () {
    let isValid = true;
    const newErrors = {};
    if (!userEmail.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!userName.trim()) {
      isValid = false;
      newErrors.name = "Please enter a valid name";
    }
    if (!userPassword.trim()) {
      isValid = false;
      newErrors.password = "please enter a password";
    } else if (userPassword.length < 6) {
      isValid = false;
      newErrors.password = "password length is > 6";
    }

    setError(newErrors);
    return isValid;
  };

  const emialInputHandler = (e) => {
    if (error.email) {
      setError((prevErrors) => ({ ...prevErrors, email: "" }));
    }
    setEmail(e.target.value);
  };

  const userNameInputHandler = (e) => {
    if (error.name) {
      setError((prevErrors) => ({ ...prevErrors, name: "" }));
    }
    setUserName(e.target.value);
  };

  const passwordInputHandler = (e) => {
    if (error.password) {
      setError((prevErrors) => ({ ...prevErrors, password: "" }));
    }
    setUserPassword(e.target.value);
  };

  const handleBlur = () => {
    if (isSubmitted) {
      validateForm();
    }
  };

  const submitFormHandler = function (e) {
    e.preventDefault();

    if (validateForm()) {
      // Send the form data to the server or perform further actions
      console.log("Form submitted:", { userEmail, userName, userPassword });
      alert(
        JSON.stringify(
          {
            userEmail,
            userName,
            userPassword,
          },
          null,
          2
        )
      );

      // Reset the form fields
      setUserName("");
      setUserPassword("");
      setEmail("");
      // Reset the errors
      setError({});

      setIsSubmitted(true);

      // return <BasicAlerts />;
    }
  };

  const emailClasses = error.email
    ? `${classes["form-control"]} ${classes["invalid"]}`
    : classes["form-control"];
  const userNameClasses = error.name
    ? `${classes["form-control"]} ${classes["invalid"]}`
    : classes["form-control"];
  const userPaswordClasses = error.password
    ? `${classes["form-control"]} ${classes["invalid"]}`
    : classes["form-control"];

  return (
    <div id="contact" className={classes["contact-container"]}>
      <form className={classes["form-container"]} onSubmit={submitFormHandler}>
        <h2>Get in touch</h2>
        <div className={classes["control-group"]}>
          <div className={userNameClasses}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={userNameInputHandler}
              autoComplete="on"
              onBlur={handleBlur}
              value={userName}
            />
            {error.name && (
              <p className={classes["error-text"]}> {error.name} </p>
            )}
          </div>
          <div className={userPaswordClasses}>
            <label htmlFor="name">Password</label>
            <input
              type="password"
              id="password"
              onChange={passwordInputHandler}
              value={userPassword}
            />
            {error.password && (
              <p className={classes["error-text"]}>{error.password}</p>
            )}
          </div>
        </div>
        <div className={emailClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="email"
            id="email"
            onChange={emialInputHandler}
            autoComplete="on"
            value={userEmail}
          />
          {error.email && (
            <p className={classes["error-text"]}>{error.email}</p>
          )}
        </div>
        <div className={classes["form-actions"]}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
