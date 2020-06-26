import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../assets/images/gi-logo.svg";

// import styles from "../Login/Login.module.scss";
function Login() {
  return (
    <div>
      <div className="loginPage">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img src={logo} alt="" className="logo" />
          </Grid>
          <Grid item xs={12}>
            <h2>Sign in</h2>
            <p>Enter your username and password to access admin panel.</p>
            <br />
            <br />
          </Grid>
          <Grid item xs={12}>
            <label>Username</label>
            <div className="form-group">
              <input type="text" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <label>Password</label>
            <div className="form-group">
              <input type="password" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Link to="/dashboard">
              <Button color="primary" variant="contained" fullWidth>
                Submit
              </Button>
            </Link>
          </Grid>

          <Grid item xs={12}>
            <div className="text-center">
              <Link to="/forgot-password">
                <span className="forgot">Forgot password?</span>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
