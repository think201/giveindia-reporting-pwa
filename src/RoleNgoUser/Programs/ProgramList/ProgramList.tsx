import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { List, Grid } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";

import styles from "./ProgramList.module.scss";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 330,
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

function ProgramList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="sidebar"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={styles.SidebarHeader}>
        <img
          src="https://uc.uxpin.com/files/91911/99228/rSuiu_Hr-f7f0277c9fc2ccc99a2f79fcfacb6888.jpg"
          alt=""
        />
        <div className={styles.sidebarDetails}>
          <h4>Roshan Naik</h4>
          <p>Roashan@think201.com</p>
        </div>
      </div>
      <List>
        <ListItem>
          {/* <Link to=""> */}
          <div className={styles.SidebarLink}>
            <br />
            <br />
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </div>
          {/* </Link> */}
        </ListItem>
        <ListItem>
          {/* <Link to=""> */}
          <div className={styles.SidebarLink}>
            <i className="fas fa-envelope"></i>
            <span>Profile Details</span>
          </div>
          {/* </Link> */}
        </ListItem>
        <ListItem>
          <Link to="/notifications">
            <div className={styles.SidebarLink}>
              <i className="fas fa-bell"></i>
              <span>Notification</span>
            </div>
          </Link>
        </ListItem>
        <ListItem>
          {/* <Link to=""> */}
          <div className={styles.SidebarLink}>
            <i className="fas fa-user"></i>
            <span>Signout</span>
          </div>
          {/* </Link> */}
        </ListItem>
        <ListItem>
          {/* <Link to=""> */}
          <div className={styles.SidebarLink}>
            <i className="fas fa-map-marked-alt"></i>
            <span>Site map</span>
          </div>
          {/* </Link> */}
        </ListItem>
      </List>
    </div>
  );

  return (
    //HEADER
    <div>
      <header className={styles.HeaderType1}>
        <nav>
          <ul>
            <li>
              {(["left"] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                  <i
                    className="fas fa-bars"
                    onClick={toggleDrawer(anchor, true)}
                  ></i>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </li>
            <li>My Programs</li>
            <li className={styles.mlAuto}>
              <Link to="/notifications">
                <i className="fas fa-bell"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="desktop-container">
        <div className={styles.Body}>
          <p>Showing 8 programs running in the NGO</p>
          <div className={styles.Searchbar}>
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search programs here" />
          </div>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6} lg={4}>
              <Link to="/program-single">
                <div className={styles.programCard}>
                  <img
                    src="https://uc.uxpin.com/files/91911/99228/educate_a_girl_child_by_supporting_her_fees-dec4433f5bd5181b40f17512991befff-628a67.jpg"
                    alt=""
                  />
                  <div className={styles.CardBody}>
                    <h4>Gift education to uderprivileged childern</h4>
                    <p>
                      <span>5 Benefficiarues</span> / West Bengal
                    </p>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
              <div className={styles.programCard}>
                <img
                  src="https://uc.uxpin.com/files/91911/99228/gift_education_to_an_underprivileged_child-4ae9a8b7d237a80ae931d1afc4608c3b-818b76.jpg"
                  alt=""
                />
                <div className={styles.CardBody}>
                  <h4>Gift education to uderprivileged childern</h4>
                  <p>
                    <span>5 Benefficiarues</span> / West Bengal
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ProgramList;
