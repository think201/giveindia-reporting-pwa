import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "../styles/Program.module.scss";
function ProgramSingle() {
  return (
    <div>
      <header className={styles.HeaderType1}>
        <nav>
          <ul>
            <li>
              <i className="fas fa-arrow-left"></i>
            </li>
            <li>Program details</li>
          </ul>
        </nav>
      </header>
      <img
        src="https://uc.uxpin.com/files/91911/99228/gift_education_to_an_underprivileged_child-4ae9a8b7d237a80ae931d1afc4608c3b-818b76.jpg"
        alt=""
        className={styles.PageBanner}
      />
      <div className="desktop-container">
        <div className={styles.Body}>
          <div className={styles.bannerDetails}>
            <img
              src="https://uc.uxpin.com/files/91911/99228/give_assured_badge20-0f3265723bd3a2c8ec0dfce86b9dc901-c369dd.png"
              alt=""
              className={styles.NgoLogo}
            />
            <h2>Gift education to a nearby underprivileged child</h2>
            <ul>
              <li>
                <i className="fas fa-book"></i>
                Education
              </li>
              <li>
                <i className="fas fa-map-marker"></i>
                Tamil Nadu
              </li>
            </ul>
            <p>
              Nav Bharat Jagriti Kendra (NBJK) is committed to encouraging the
              education of poor children by providing the required ... <br />
              <span>Read more</span>
            </p>
          </div>
          <hr />
          <h4>
            Every monthly donation can help educate more children like Mithilesh
          </h4>
          <p>
            His childhood and innocence were almost dead and he had no option
            but to resign to the sad truth of poverty, when Nav Bharat Jagriti
            Kendra (NBJK) field workers found him. They counseled his parents
            and offered to find a donor to support his education in the NBJK
            Amoli Apurva High School in Mangarh.
          </p>
          <p>
            His childhood and innocence were almost dead and he had no option
            but to resign to the sad truth of poverty, when Nav Bharat Jagriti
            Kendra (NBJK) field workers found him. They counseled his parents
            and offered to find a donor to support his education in the NBJK
            Amoli Apurva High School in Mangarh.
          </p>
          <div className={styles.stickeyButtons}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button className="whiteBtn">Updates</Button>
              </Grid>
              <Grid item xs={6}>
                <Link to="/beneficiary-list">
                  <Button color="primary" variant="contained" fullWidth>
                    Beneficiaries
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

export default ProgramSingle;
