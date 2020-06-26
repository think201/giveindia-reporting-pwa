import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "../styles/Beneficiary.module.scss";

function AddReport() {
  return (
    <div>
      <header className={styles.HeaderType1}>
        <nav>
          <ul>
            <li>Add a report</li>
            <li className={styles.mlAuto}>
              <i className="fas fa-times"></i>
            </li>
          </ul>
        </nav>
      </header>
      <div className="desktop-container">
        <div className={styles.Body}>
          <div className={styles.formGroup}>
            <label>Location of visit</label>
            <input type="text" className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <label>Date of verification visit*</label>
            <input type="text" className={styles.formControl} />
          </div>
          <img
            src="https://uc.uxpin.com/files/91911/99228/gift_education_to_an_underprivileged_child-4ae9a8b7d237a80ae931d1afc4608c3b-818b76.jpg"
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
              <Grid item xs={12}>
                <Link to="/report-single">
                  <Button color="primary" variant="contained" fullWidth>
                    Subit report details
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddReport;
