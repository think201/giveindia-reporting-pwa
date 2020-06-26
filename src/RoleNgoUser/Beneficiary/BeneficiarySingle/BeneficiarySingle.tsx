import React from "react";

import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "../styles/Beneficiary.module.scss";

function BeneficiarySingle() {
  return (
    <div className={styles.Relative}>
      <header className={`${styles.HeaderType1} ${styles.Type2}`}>
        <nav>
          <ul>
            <li>
              <i className="fas fa-arrow-left"></i>
            </li>
            <li>
              Beneficiary details
              <p>Gift education to a underprivileged child..</p>
            </li>
          </ul>
        </nav>
      </header>
      <div className="desktop-container">
        <div className={styles.DetailSingle}>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <h2>Tinkal Kumari</h2>
              <p className={`${styles.Small} ${styles.Red}`}>
                Female, 15 years old
              </p>
              <p className={styles.Small}>last updated 12 Apr 2020, 3:35 pm</p>
              <p className={`${styles.Small} ${styles.Blue}`}>
                donor already mapped
              </p>
            </Grid>
            <Grid item xs={3}>
              <img
                src="https://uc.uxpin.com/files/91911/99228/7546_TinkalKumari-da487b7784f4abcb3f9b5180de71f76c-907464.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <Button className="whiteBtn">Remove user</Button>
            </Grid>
            <Grid item xs={6}>
              <Button color="secondary" variant="contained" fullWidth>
                Edit details
              </Button>
            </Grid>
          </Grid>
        </div>
        <div className={styles.DetailSingle}>
          <label className={styles.Small}>Date of birth</label>
          <p className={styles.M0}>12 November 2005</p>
        </div>
        <div className={styles.DetailSingle}>
          <label className={styles.Small}>Location</label>
          <p className={styles.M0}>Dehradun</p>
        </div>
        <div className={styles.DetailSingle}>
          <label className={styles.Small}>Address details</label>
          <p className={styles.M0}>Purkal Gaon, P.O Bhagwantpur</p>
        </div>
        <div className={styles.DetailSingle}>
          <label className={styles.Small}>Description</label>
          <p className={styles.M0}>
            Meera Kumari is 14 yrs age, currently studying in Grade IX at
            Chandrakala Devi Daga School. It’s a secondary school part
            Government for girls and part private for boys. Since it’s a
            government school, no fees is paid by Meera's family. Her father is
            no more and her mother is the only source of income for their
            livelihood. She has got 2 sets of school uniforms in Jan 2016 and
            set of 12 text books in May 2016 free of cost.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className={styles.stickeyButtons}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Link to="/view-report">
              <Button color="primary" variant="contained" fullWidth>
                View Reports
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default BeneficiarySingle;
