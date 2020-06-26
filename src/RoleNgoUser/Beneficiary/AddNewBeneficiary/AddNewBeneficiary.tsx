import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio, { RadioProps } from "@material-ui/core/Radio";

import styles from "../styles/Beneficiary.module.scss";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

function AddNewBeneficiary() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <header className={styles.HeaderType1}>
        <nav>
          <ul>
            <li>Add beneficiary</li>
            <li className={styles.mlAuto}>
              <i className="fas fa-times"></i>
            </li>
          </ul>
        </nav>
      </header>
      <div className="desktop-container">
        <div className={styles.Body}>
          <div className={styles.profileImg}>
            <img
              src="https://uc.uxpin.com/files/91911/99228/7546_TinkalKumari-22c2306ed901599c4534f4531ec680a2.jpg"
              alt=""
            />
            {/* <i className="fas fa-pencil-alt"></i> */}
          </div>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <label>Gender</label>
            <div>
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
              />
              <span className={styles.ratioText}>Male</span>
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-button-demo"
                inputProps={{ "aria-label": "B" }}
              />
              <span className={styles.ratioText}>Female</span>
              <Radio
                checked={selectedValue === "c"}
                onChange={handleChange}
                value="c"
                name="radio-button-demo"
                inputProps={{ "aria-label": "C" }}
              />
              <span className={styles.ratioText}>Others</span>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Date of Birth</label>
            <input type="text" className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <label>Location</label>
            <input type="text" className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <label>Address detail</label>
            <input type="text" className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <label>Personal details</label>
            <textarea name="" id="" className={styles.formControl}></textarea>
          </div>
          <br />
          <div>
            <Button color="primary" variant="contained" fullWidth>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewBeneficiary;
