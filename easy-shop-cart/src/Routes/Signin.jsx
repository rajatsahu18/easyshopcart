import axios from "axios";
import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import styles from "../Components/styles/Signin.module.css"
import { LoadingIndicator } from "../Components/LoadingIndicator";

const initState = {
  email: "",
  password: ""
};

function Signin() {
  const [formState, setFormState] = useState(initState);
  const { email, password } = formState;
  const { loginSuccess, isAuth } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formState
    };
    handleLogin(payload);
  };

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post("https://reqres.in/api/login", {
        email,
        password
      })
      .then((res) => {
        loginSuccess(res.data);
        setIsLoading(false);
      })
      .catch((err) => {});
  };

  if (isAuth) {
    return <Redirect to="/clothes" push />;
  }

  return isLoading ? (
    <LoadingIndicator/>
  ) : (
    <div className = {styles.formContainer}>
      <form onSubmit={handleSubmit} className = {styles.form}>
          <div className = {styles.emailInput}>
            <label>
            Email
            <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={hanldeChange}
            />
            </label>
          </div>
          <div className = {styles.passwordInput}>
            <label>
            Password
            <input
                type="text"
                placeholder="Password"
                name="password"
                value={password}
                onChange={hanldeChange}
            />
            </label>
          </div>
         <div>
            <input type="submit" value="SUBMIT" className = {styles.submit} />
         </div> 
      </form>
    </div>
  );
}
export { Signin };
