import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
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

function BeneficiaryList() {
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
              Beneficiary
              <p>Gift education to a underprivileged child..</p>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.RedTab}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Pending" />
            <Tab label="Approved" />
            <Tab label="Rejected" />
            <Tab label="Inactive" />
          </Tabs>
        </AppBar>
        <div className="desktop-container">
          <TabPanel value={value} index={0}>
            <div className={`${styles.Body} ${styles.Pb0}`}>
              <p>Showing 8 programs running in the NGO</p>
              <div className={styles.Searchbar}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search programs here" />
              </div>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <Link to="/single-beneficiary">
                  <div className={styles.SingleBeneficiaryCard}>
                    <img
                      src="https://uc.uxpin.com/files/91911/99228/7546_SharmiliKhatoon-64793d0e36a9e6a23d980727be3b5a1a.jpg"
                      alt=""
                    />
                    <div>
                      <h4>Sharmili Khatoon</h4>
                      <h6>Female, 16 years</h6>
                      <p>added on 14th Mar 2020, 05:30pm</p>
                    </div>
                  </div>
                </Link>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <div className={styles.SingleBeneficiaryCard}>
                  <img
                    src="https://uc.uxpin.com/files/91911/99228/7546_SharmiliKhatoon-64793d0e36a9e6a23d980727be3b5a1a.jpg"
                    alt=""
                  />
                  <div>
                    <h4>Sharmili Khatoon</h4>
                    <h6>Female, 16 years</h6>
                    <p>added on 14th Mar 2020, 05:30pm</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={`${styles.Body} ${styles.Pb0}`}>
              <p>Showing 8 programs running in the NGO</p>
              <div className={styles.Searchbar}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search programs here" />
              </div>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <div className={styles.SingleBeneficiaryCard}>
                  <img
                    src="https://uc.uxpin.com/files/91911/99228/7546_SharmiliKhatoon-64793d0e36a9e6a23d980727be3b5a1a.jpg"
                    alt=""
                  />
                  <div>
                    <h4>Sharmili Khatoon</h4>
                    <h6>Female, 16 years</h6>
                    <p>added on 14th Mar 2020, 05:30pm</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className={`${styles.Body} ${styles.Pb0}`}>
              <p>Showing 8 programs running in the NGO</p>
              <div className={styles.Searchbar}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search programs here" />
              </div>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <div className={styles.SingleBeneficiaryCard}>
                  <img
                    src="https://uc.uxpin.com/files/91911/99228/7546_SharmiliKhatoon-64793d0e36a9e6a23d980727be3b5a1a.jpg"
                    alt=""
                  />
                  <div>
                    <h4>Sharmili Khatoon</h4>
                    <h6>Female, 16 years</h6>
                    <p>added on 14th Mar 2020, 05:30pm</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <div className={styles.SingleBeneficiaryCard}>
                  <img
                    src="https://uc.uxpin.com/files/91911/99228/7546_SharmiliKhatoon-64793d0e36a9e6a23d980727be3b5a1a.jpg"
                    alt=""
                  />
                  <div>
                    <h4>Sharmili Khatoon</h4>
                    <h6>Female, 16 years</h6>
                    <p>added on 14th Mar 2020, 05:30pm</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className={`${styles.Body} ${styles.Pb0}`}>
              <p>Showing 8 programs running in the NGO</p>
              <div className={styles.Searchbar}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search programs here" />
              </div>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <div className={styles.SingleBeneficiaryCard}>
                  <img
                    src="https://uc.uxpin.com/files/91911/99228/7546_SharmiliKhatoon-64793d0e36a9e6a23d980727be3b5a1a.jpg"
                    alt=""
                  />
                  <div>
                    <h4>Sharmili Khatoon</h4>

                    <h6>Female, 16 years</h6>
                    <p>added on 14th Mar 2020, 05:30pm</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </TabPanel>
        </div>
      </div>
      <div className={styles.stickeyButtons}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button className="whiteBtn">Bulk Upload</Button>
          </Grid>
          <Grid item xs={6}>
            <Link to="/add-beneficiary">
              <Button color="primary" variant="contained" fullWidth>
                Add Beneficiaries
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default BeneficiaryList;
