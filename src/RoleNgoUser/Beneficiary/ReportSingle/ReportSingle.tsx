import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "../styles/Beneficiary.module.scss";
import classes from "*.module.css";

function ReportSingle() {
  return (
    <div>
      <header className={`${styles.HeaderType1} ${styles.Type2}`}>
        <nav>
          <ul>
            <li>
              <i className="fas fa-arrow-left"></i>
            </li>
            <li>
              Report ID: #03
              <p>Tinkal Kumari</p>
            </li>
          </ul>
        </nav>
      </header>
      <div className="desktop-container">
        <div className={styles.reportDetails}>
          <p className={styles.Small}>last updated on 12 April 2020, 3:35 pm</p>
          <h2>Tinkal Kumari report details</h2>
          <p className={styles.Small}>Date of verification visit</p>
          <p>14 March 2020, 05:30pm</p>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <p className={styles.Small}>Status</p>
              <p className={styles.reportStatus}>Pending</p>
            </Grid>
            <Grid item xs={6}>
              <p className={styles.Small}>Location of visit</p>
              <p>Patna</p>
            </Grid>
          </Grid>
        </div>
        <div className={styles.Body}>
          <img
            src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM4MDE5fQ"
            alt=""
            className={styles.PageBanner}
          />
          <h4>Latest report updates</h4>
          <p>
            Tinkal Kumari is 14 yrs age, currently studying in Grade IX at
            Chandrakala Devi Daga School. It’s a secondary school part
            Government for girls and part private for boys. Since it’s a
            government school, no fees is paid by Meera's family. Her father is
            no more and her mother is the only source of income for their
            livelihood. She has got 2 sets of school uniforms in Jan 2016 and
            set of 12 text books in May 2016 free of cost
          </p>
          <br />
          <br />
          <div className={styles.stickeyButtons}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button className="whiteBtn">Delete report</Button>
              </Grid>
              <Grid item xs={6}>
                {/* <Link to="/add-beneficiary"> */}
                <Button color="secondary" variant="contained" fullWidth>
                  Edit report
                </Button>
                {/* </Link> */}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportSingle;
