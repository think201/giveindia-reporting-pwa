import React from "react";
import { Link } from "react-router-dom";

import styles from "./Notifications.module.scss";
function Notifications() {
  return (
    <div>
      <header className={styles.HeaderType1}>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">
                <i className="fas fa-arrow-left"></i>
              </Link>
            </li>
            <li>My Programs</li>
          </ul>
        </nav>
      </header>
      <div>
        <div className={styles.Notification}>
          <i className="fas fa-check-circle success"></i>
          <div>
            <p>
              Admin has approved your benificiary request for the newly added
              beneficiary <strong>'Komal Tiwari'</strong>
            </p>
            <p>
              <span>14 Mar 2020, 05:30pm</span>
            </p>
          </div>
        </div>
        <div className={styles.Notification}>
          <i className="fas fa-ban fail"></i>
          <div>
            <p>
              Admin has approved your benificiary request for the newly added
              beneficiary <strong>'Komal Tiwari'</strong>
            </p>
            <p>
              <span>14 Mar 2020, 05:30pm</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
