import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import styles from "../styles/Beneficiary.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ViewBeneficiaryReports() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.Relative}>
      <header className={`${styles.HeaderType1} ${styles.Type2}`}>
        <nav>
          <ul>
            <li>
              <i className="fas fa-arrow-left"></i>
            </li>
            <li>
              Reports
              <p>Tinkal Kumari</p>
            </li>
          </ul>
        </nav>
      </header>
      <div className="desktop-container">
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Requested" />
            <Tab label="Approved" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div className={`${styles.Body} ${styles.Pb0}`}>
            <p>Showing 3 requested report</p>
            <div className={styles.Searchbar}>
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search programs here" />
            </div>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Link to="/add-report">
                <div className={`${styles.DetailSingle} ${styles.Pt0}`}>
                  <p className={`${styles.Small} ${styles.Dark}`}>
                    Report ID: #03
                  </p>
                  <p className={styles.Small}>submitted on</p>
                  <h3>14 March 2020, 05:30pm</h3>
                  <p className={`${styles.Small} ${styles.Dark}`}>
                    submitted by Janhvi Singhal
                  </p>
                  <p className={styles.Small}>added on 14 Mar 2020, 05:30pm</p>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className={`${styles.DetailSingle} ${styles.Pt0}`}>
                <p className={`${styles.Small} ${styles.Dark}`}>
                  Report ID: #03
                </p>
                <p className={styles.Small}>submitted on</p>
                <h3>14 March 2020, 05:30pm</h3>
                <p className={`${styles.Small} ${styles.Dark}`}>
                  submitted by Janhvi Singhal
                </p>
                <p className={styles.Small}>added on 14 Mar 2020, 05:30pm</p>
              </div>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={`${styles.Body} ${styles.Pb0}`}>
            <p></p>
            <div className={styles.Searchbar}>
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search programs here" />
            </div>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <div className={`${styles.DetailSingle} ${styles.Pt0}`}>
                <p className={`${styles.Small} ${styles.Dark}`}>
                  Report ID: #03
                </p>
                <p className={styles.Small}>submitted on</p>
                <h3>14 March 2020, 05:30pm</h3>
                <p className={`${styles.Small} ${styles.Dark}`}>
                  submitted by Janhvi Singhal
                </p>
                <p className={styles.Small}>added on 14 Mar 2020, 05:30pm</p>
              </div>
            </Grid>
          </Grid>
        </TabPanel>
      </div>
      <br />
      <br />
      <div className={styles.stickeyButtons}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Link to="/add-report">
              <Button color="primary" variant="contained" fullWidth>
                Add a new report
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ViewBeneficiaryReports;
