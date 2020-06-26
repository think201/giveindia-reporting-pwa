import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import styles from "../styles/Program.module.scss";

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

function ProgramUpdates() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <header className={`${styles.HeaderType1} ${styles.Type2}`}>
        <nav>
          <ul>
            <li>
              <i className="fas fa-arrow-left"></i>
            </li>
            <li>
              Program updates
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
          </Tabs>
        </AppBar>
        <div className="desktop-container">
          <TabPanel value={value} index={0}>
            <div className={`${styles.Body} ${styles.Pb0}`}>
              <p>Showing 2 program updates so far</p>
            </div>
            <div className={styles.updatesContainer}>
              <div className={styles.TimelineFlex}>
                <div className={styles.TimeLine}>
                  <span>#2</span>
                  <div className={styles.Line}></div>
                </div>
                <div className={styles.TimeLineDetails}>
                  <p className={styles.Small}>30 October, 2019</p>
                  <p>
                    This program reduced the drop outs rate and child marriage
                    which was on the peak point before some time.
                  </p>
                  <Button color="secondary" variant="contained">
                    View report
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.updatesContainer}>
              <div className={styles.TimelineFlex}>
                <div className={styles.TimeLine}>
                  <span>#1</span>
                  <div className={styles.Line}></div>
                </div>
                <div className={styles.TimeLineDetails}>
                  <p className={styles.Small}>30 October, 2019</p>
                  <p>
                    This program reduced the drop outs rate and child marriage
                    which was on the peak point before some time.
                  </p>
                  <Button color="secondary" variant="contained">
                    View report
                  </Button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={`${styles.Body} ${styles.Pb0}`}>
              <p>Showing 1 program updates so far</p>
            </div>
            <div className={styles.updatesContainer}>
              <div className={styles.TimelineFlex}>
                <div className={styles.TimeLine}>
                  <span>#1</span>
                  <div className={styles.Line}></div>
                </div>
                <div className={styles.TimeLineDetails}>
                  <p className={styles.Small}>30 October, 2019</p>
                  <p>
                    This program reduced the drop outs rate and child marriage
                    which was on the peak point before some time.
                  </p>
                  <Button color="secondary" variant="contained">
                    View report
                  </Button>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

export default ProgramUpdates;
