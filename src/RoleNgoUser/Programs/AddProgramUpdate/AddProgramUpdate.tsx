import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "../styles/Program.module.scss";

export default function AddProgramUpdate() {
  return (
    <div>
      <header className={`${styles.HeaderType1} ${styles.Type2}`}>
        <nav>
          <ul>
            <li>
              <i className="fas fa-arrow-left"></i>
            </li>
            <li>
              Add new program update
              <p>Gift education to a underprivileged child ..</p>
            </li>
          </ul>
        </nav>
      </header>
      <div className="desktop-container">
        <div className={styles.Body}>
          <img
            src="https://uc.uxpin.com/files/91911/99228/2019_07_22_chanchalakumari_anjalisharma-76cc77d6e4232ad0aa92c3e759b7ca63-1b8cff.jpg"
            alt=""
            className={styles.PageBanner}
          />
          <h2>Latest report updates</h2>
          <p>
            This program supports the educational expenses of the girls who
            belong to remote area. If we compare present time from the past
            time, there is a huge difference we see. People of remote area now
            understanding the value of education. Girls are showing interest
            towards the education. People are getting aware what the important
            role education play in their life. This program reduced the drop
            outs rate and child marriage which was on the peak point before some
            time. It has also reduced the child labour. Girls were used to work
            in kiln factory. So, the things are changing with the time and
            efforts. Apart from this, girls are doing well in academic also.
            They participated in so many science and games competition. Girls of
            CDDH play on block and district level. Generally, girls play volley
            ball and kabaddi. Girls also make aware their parents and community
            if some one making fool them regarding government plan."
          </p>
          <br />
          <br />
          <div className={styles.stickeyButtons}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {/* <Link to="/add-beneficiary"> */}
                <Button color="primary" variant="contained" fullWidth>
                  Save and Submit
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
