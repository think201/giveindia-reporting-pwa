import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../assets/images/gi-logo.svg";

function ForgotPassword() {
  return (
    <div>
      <div className="loginPage">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img src={logo} alt="" className="logo" />
          </Grid>
          <Grid item xs={12}>
            <br />
            <br />
            <br />
            <h2>Forgot password</h2>
            <p>
              Enter your email here and we'll send you a link to reset your
              password.
            </p>
            <br />
          </Grid>
          <Grid item xs={12}>
            <label>Username</label>
            <div className="form-group">
              <input type="text" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth>
              Submit
            </Button>
          </Grid>

          <Grid item xs={12}>
            <div className="text-center">
              <Link to="/">
                <span className="forgot">Sign in?</span>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ForgotPassword;
